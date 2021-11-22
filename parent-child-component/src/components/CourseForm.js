import React, { Component } from 'react';
import Courses from '../courses.json';

class CourseForm extends Component {
	state = {
		code: '',
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		let course = Courses.find((course) => course.code === this.state.code.toUpperCase());
		this.props.OfferCourses({ ...course, reg: false });
		this.setState({ code: '' });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type='text'
						name='code'
						value={this.state.code}
						onChange={this.handleChange}
						placeholder='code...'
					/>
					<button>Search</button>
				</form>
				{/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
			</div>
		);
	}
}

export default CourseForm;
