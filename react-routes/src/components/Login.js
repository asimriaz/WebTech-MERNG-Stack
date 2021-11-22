import React, { Component } from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import axios from 'axios';
import cookies from 'js-cookie';

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		'& > *': {
// 			width: '25ch',
// 		},
// 	},
// }));

export class Login extends Component {
	state = {
		username: '',
		password: '',
	};
	handleChange = (e) => {
		const { id, value } = e.target;
		this.setState({ [id]: value });
	};

	handleClick = () => {
		console.log('Click');
		axios.post(`/api/users/login`, this.state).then((res) => {
			console.log(res.data);
			cookies.set('jwt', res.data.token);
			cookies.set('user', JSON.stringify(res.data.user.fullname));
		});
	};

	render() {
		return (
			<form noValidate autoComplete='off'>
				<TextField id='username' label='User Name' onChange={this.handleChange} /> <br />
				<TextField id='password' label='Password' type='password' onChange={this.handleChange} /> <br />
				<br />
				{/* <TextField id='filled-basic' label='Filled' variant='filled' />
                <TextField id='outlined-basic' label='Outlined' variant='outlined' /> */}
				<Button variant='contained' onClick={this.handleClick}>
					Login
				</Button>
				<pre>{JSON.stringify(this.state, null, 2)}</pre>
			</form>
		);
	}
}
