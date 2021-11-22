import React, { Component, Fragment } from 'react';

export class Calc extends Component {
	state = {
		display: 0,
		opr: '',
		nums: [0, 0],
		index: 0,
	};

	handleClick = (e) => {
		const { nums, index } = this.state;
		switch (e.target.innerText) {
			case '+':
			case '-':
			case '*':
			case '/':
				this.setState({ opr: e.target.innerText, index: 1 });
				break;
			case '=':
				this.setState({
					display:
						this.state.opr === '+'
							? nums[0] + nums[1]
							: this.state.opr === '-'
							? nums[0] - nums[1]
							: this.state.opr === '*'
							? nums[0] * nums[1]
							: nums[0] / nums[1],
				});
				break;
			case 'C':
				this.setState({ display: 0, opr: '', nums: [0, 0], index: 0 });
				break;
			default:
				let n = Number(e.target.innerText);
				nums[index] = nums[index] * 10 + n;
				this.setState({
					display: nums[index],
				});
		}
	};

	render() {
		let digits = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '=', '0', '/'];
		return (
			<div>
				<div
					style={{
						width: '200px',
						height: '20px',
						border: '1px solid #808080',
						textAlign: 'right',
						margin: '0 auto',
						font: 'bold 14pt Arial',
						padding: '5px',
					}}
				>
					{this.state.display}
				</div>
				{digits.map((digit, i) => (
					<Fragment key={i}>
						<button
							style={{
								width: '50px',
								height: '50px',
								fontSize: '14pt',
							}}
							onClick={this.handleClick}
						>
							{digit}
						</button>
						{(i + 1) % 4 === 0 ? <br /> : null}
					</Fragment>
				))}

				<pre style={{ textAlign: 'left' }}>{JSON.stringify(this.state, null, 2)}</pre>
			</div>
		);
	}
}

export default Calc;
