import React, {Component} from 'react';

import './style.css';

const HeaderImage = (props) => {
	return (
		<div className="header-image" style={ { backgroundImage: `url(${ props.img })` } }>
			<div className="gradient-mask"></div>
			{props.children}
		</div>
	);
}

export default HeaderImage;