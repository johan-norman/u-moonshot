import React from 'react';
import './style.css';


const StyledTagItem = (props) => {
	const active = props.active ? 'active' : '';
	const hovered = (props.hovered && typeof props.hovered != 'undefined') ? 'hovered' : '';
	const classes = `${active} ${hovered} styled-tag-item`;
	return (
	<button className={classes} onClick={props.onClick}>
	{props.children}
	</button>
	)
}

export default StyledTagItem;