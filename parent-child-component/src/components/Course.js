import React from 'react';

export const Course = (props) => {
	const { course } = props;
	return (
		<tr
			style={{
				cursor: 'pointer',
				color: course.reg ? 'limegreen' : 'lightgray',
			}}
		>
			<td>{course.semester}</td>
			<td>{course.code}</td>
			<td onClick={props.setReg}>{course.title}</td>
			<td>{course.crhr}</td>
			<td>{course.reg.toString()}</td>
		</tr>
	);
};
