import React, { Component } from 'react';

const PROGRAMS = ['Computer Science', 'Management Science', 'Social Science', 'Media Science'];

class UserForm extends Component {
	state = {
		firstName: '',
		lastName: '',
		comments: '',
		semester: '',
		faculty: '',
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

			this.setState({ programs: programs });
		}
	};

	render() {
		let checkboxes = PROGRAMS.map((prg, i) => (
			<div key={i} style={{ display: 'inline-flex', marginLeft: '10px' }}>
				<label>
					<input
						type='checkbox'
						value={prg}
						onChange={this.handleChange}
						checked={this.state.programs.includes(prg)}
					/>{' '}
					{prg}
				</label>
				{'  '}
				<br />
			</div>
		));

		return (
			<div>
				<table>
					<tbody>
						<tr>
							<td>Firt Name : </td>
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
							<td>Last Name : </td>
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
							<td>Comments : </td>
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
							<td>Semester : </td>
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
							<td>Faculty : </td>
							<td>
								<label>
									<input
										type='radio'
										name='faculty'
										value='fulltime'
										checked={this.state.faculty === 'fulltime'}
										onChange={this.handleChange}
									/>{' '}
									Full Time
								</label>
								{'  '}
								<label>
									<input
										type='radio'
										name='faculty'
										value='adjunct'
										checked={this.state.faculty === 'adjunct'}
										onChange={this.handleChange}
									/>{' '}
									Adjunct
								</label>
							</td>
						</tr>
						<tr>
							<td>Programs : </td>
							<td>{checkboxes}</td>
						</tr>
					</tbody>
				</table>
				<button
					onClick={() => {
						this.setState({
							programs: this.state.programs.length === 0 ? PROGRAMS : [],
						});
					}}
				>
					Select All
				</button>
				<div>
					<pre style={{ textAlign: 'left' }}>{JSON.stringify(this.state, null, 2)}</pre>
				</div>
			</div>
		);
	}
}

export default UserForm;
