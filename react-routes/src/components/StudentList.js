import React, { Component } from 'react';
import axios from 'axios';
import StudentForm from './StudentForm';

class StudentList extends Component {
	state = {
		regno: null,
		students: [],
	};

	componentDidMount() {
		this.getStudents();
	}

	getStudents = () => {
		axios.get('/api/students').then((students) => this.setState({ students: students.data }));
	};

	handleClick = (regno) => {
		this.setState({ regno });
	};

	showUpdated = (std) => {
		//console.log('updated', std);
		this.setState({
			students: this.state.students.map((student) => (student._id === std._id ? std : student)),
			regno: null,
		});
	};

	render() {
		let url = '#';
		return (
			<div>
				<div className='col'>
					<table>
						<thead>
							<tr>
								<th>Reg #</th>
								<th>Name</th>
							</tr>
						</thead>
						<tbody>
							{this.state.students.map((student) => (
								<tr key={student._id}>
									<td>{student.regno}</td>
									<td>
										<a href={url} onClick={() => this.handleClick(student.regno)}>
											{student.studentname}
										</a>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className='col'>
					{this.state.regno !== null && (
						<StudentForm regno={this.state.regno} showUpdated={this.showUpdated} />
					)}
				</div>
				<div className='col'>
					<pre>{JSON.stringify(this.state, null, 2)}</pre>
				</div>
			</div>
		);
	}
}

export default StudentList;
