import React, { Component } from 'react';
import { Course } from './Course';

import CourseForm from './CourseForm';

class CourseList extends Component {
	state = {
		courses: [],
		error: '',
		show: 'All',
	};

	OfferCourses = (course) => {
		console.log(course);
		this.state.courses.some((crs) => crs.code === course.code)
			? this.setState({ error: 'Course Already Exists' })
			: Object.keys(course).length === 1
			? this.setState({ error: 'Course Not Found' })
			: this.setState({ courses: [...this.state.courses, course] });
	};

	setReg = (id) => {
		this.setState({
			courses: this.state.courses.map((course) =>
				course.courseid === id ? { ...course, reg: !course.reg } : course
			),
		});
	};

	render() {
		let courses =
			this.state.show === 'Off'
				? this.state.courses.filter((c) => !c.reg)
				: this.state.show === 'Reg'
				? this.state.courses.filter((c) => c.reg)
				: this.state.courses;

		return (
			<div>
				<div style={{ color: 'red', height: '20px' }}>{this.state.error}</div>
				<div className='col'>
					<CourseForm OfferCourses={this.OfferCourses} />
					{this.state.courses.length !== 0 && (
						<table>
							<thead>
								<tr>
									<th>Sem</th>
									<th>Code</th>
									<th>Tite</th>
									<th>Cr.</th>
									<th>Reg</th>
								</tr>
							</thead>
							<tbody>
								{courses.map((course) => (
									<Course
										key={course.courseid}
										course={course}
										setReg={() => {
											this.setReg(course.courseid);
										}}
									/>
								))}
							</tbody>
							<tfoot>
								<tr>
									<td></td>
									<td></td>
									<td>registered : {courses.filter((c) => c.reg).length}</td>
									<td>{courses.reduce((a, c) => a + c.crhr, 0)}</td>
									{/* <td>{this.state.courses.reduce((a, c) => a + (c.reg ? c.crhr : 0), 0)}</td> */}
									<td></td>
								</tr>
							</tfoot>
						</table>
					)}
					{/* prettier-ignore */}
					<div>
                    <button onClick={()=>{this.setState({show: "All"})}}>All</button>
                    <button onClick={()=>{this.setState({show: "Reg"})}}>Reg</button>
                    <button onClick={()=>{this.setState({show: "Off"})}}>Off</button>
                </div>
				</div>

				<div className='col'>
					<pre>{JSON.stringify(this.state, null, 2)}</pre>
				</div>
			</div>
		);
	}
}

export default CourseList;
