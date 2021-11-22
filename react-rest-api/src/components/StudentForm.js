import React, { Component } from 'react';
import axios from 'axios';

class StudentForm extends Component {
	state = {};
	getStudentDetails = () => {
		const { regno } = this.props;
		axios.get(`/api/students/${regno}`).then((student) => {
			this.setState({ ...student.data });
		});
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSave = () => {
		axios.patch(`/api/students/update`, this.state).then((res) => {
			if (res.status === 200) {
				this.props.showUpdated(res.data);
			}
		});
	};

	componentDidMount() {
		this.getStudentDetails();
	}

	componentDidUpdate(prevProps) {
		if (this.props !== prevProps) {
			this.getStudentDetails();
		}
	}

	render() {
		return (
			<div>
				<table>
					<tbody>
						<tr>
							<th>Reg # : </th>
							<td>{this.state.regno || ''}</td>
						</tr>
						<tr>
							<th>Name :</th>
							<td>
								<input
									type='text'
									name='studentname'
									value={this.state.studentname || ''}
									onChange={this.handleChange}
								/>
							</td>
						</tr>
						<tr>
							<th>Father : </th>
							<td>
								<input
									type='text'
									name='fathername'
									value={this.state.fathername || ''}
									onChange={this.handleChange}
								/>
							</td>
						</tr>
						<tr>
							<th></th>
							<td>
								<input type='button' value='Save' onClick={this.handleSave} />
							</td>
						</tr>
					</tbody>
				</table>
				<div>
					<pre>{JSON.stringify(this.state, null, 2)}</pre>
				</div>
			</div>
		);
	}
}

export default StudentForm;
