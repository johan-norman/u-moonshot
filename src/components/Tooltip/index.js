import React from 'react';
import ReactTooltip from 'react-tooltip';

import './style.css';

const Tooltip = (props) => {
	return (
		<div className="tooltip-wrap">
			<ReactTooltip />
			<i className="tooltip" data-tip={props.text}></i>
		</div>
	)
}

export default Tooltip;