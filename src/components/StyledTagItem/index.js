import React from 'react';
import './style.css';


const StyledTagItem = (props) => {
	const active = props.active ? 'active' : '';
	const classes = `${active} styled-tag-item`;
	return (
	<button className={classes} onClick={props.onClick}>
	{props.children}
	</button>
	)
}

export default StyledTagItem;
