import React, { Component } from 'react';

class UserForm extends Component {
	state = {
		firstName: '',
		lastName: '',
		comments: '',
		semester: '',
		employee: '',
		programs: [],
	};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		if (type !== 'checkbox') {
			this.setState({ [name]: value });
		} else {
			const { programs } = this.state;
			let index = programs.indexOf(value);

			index === -1 ? programs.push(value) : programs.splice(index, 1);

			this.setState({ programs });
		}
	};

	render() {
		let checkboxs = ['Computer Science', 'Management Science', 'Social Science', 'Media Science'];
		let radios = { 'Full Time': 'fulltime', Adjunct: 'adjunct', Staff: 'staff' };

		let radioBtns = Object.entries(radios).map(([key, value], i) => (
			<label key={i}>
				<input
					type='radio'
					name='employee'
					value={value}
					checked={this.state.employee === value}
					onChange={this.handleChange}
				/>
				{key}
			</label>
		));

		let chkBoxBtns = checkboxs.map((prg) => (
			<label key={prg}>
				<input
					type='checkbox'
					name='programs'
					value={prg}
					checked={this.state.programs.includes(prg)}
					onChange={this.handleChange}
				/>
				{prg}
			</label>
		));

		return (
			<div>
				<table>
					<tbody>
						<tr>
							<th>First Name : </th>
							<td>
								<input
									type='text'
									name='firstName'
									value={this.state.firstName}
									onChange={this.handleChange}
								/>
							</td>
						</tr>
						<tr>
							<th>Last Name : </th>
							<td>
								<input
									type='text'
									name='lastName'
									value={this.state.lastName}
									onChange={this.handleChange}
								/>
							</td>
						</tr>
						<tr>
							<th>Comments : </th>
							<td>
								<textarea
									type='text'
									name='comments'
									rows='2'
									cols='30'
									value={this.state.comments}
									onChange={this.handleChange}
								/>
							</td>
						</tr>
						<tr>
							<th>Semester : </th>
							<td>
								<select name='semester' value={this.state.semester} onChange={this.handleChange}>
									<option hidden value=''></option>
									<option value='Spring'>Spring</option>
									<option value='Summer'>Summer</option>
									<option value='Fall'>Fall</option>
								</select>
							</td>
						</tr>
						<tr>
							<th>Employee : </th>
							<td>
								{/* <label>
									<input
										type='radio'
										name='employee'
										value='fulltime'
										checked={this.state.employee === 'fulltime'}
										onChange={this.handleChange}
									/>
									Full Time
								</label>
								<label>
									<input
										type='radio'
										name='employee'
										value='adjunct'
										checked={this.state.employee === 'adjunct'}
										onChange={this.handleChange}
									/>
									Adjunct
								</label>
								<label>
									<input
										type='radio'
										name='employee'
										value='staff'
										checked={this.state.employee === 'staff'}
										onChange={this.handleChange}
									/>
									Staff
								</label> */}
								{radioBtns}
							</td>
						</tr>
						<tr>
							<th>Programs : </th>
							<td>{chkBoxBtns}</td>
						</tr>
						<tr>
							<th></th>
							<td>
								<button
									onClick={() => {
										this.setState({ programs: this.state.programs.length === 0 ? checkboxs : [] });
									}}
								>
									{this.state.programs.length === 0 ? '' : 'Un'}Select All
								</button>
							</td>
						</tr>
					</tbody>
				</table>
				<pre>{JSON.stringify(this.state, null, 2)}</pre>
			</div>
		);
	}
}

export default UserForm;
