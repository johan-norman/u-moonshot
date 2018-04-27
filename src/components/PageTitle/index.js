import React from 'react';
import './style.css';

const PageTitle = (props) => {
	return (
	<div className="page-title">
		<span>{props.pageNumber}</span>
		{props.children}
	</div>
	);
}

export default PageTitle;