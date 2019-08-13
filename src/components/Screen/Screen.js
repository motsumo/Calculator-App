import React from 'react';
import { Textfit } from 'react-textfit';
import './Screen.css';

export default props => {
	return (
		<div className="screen">
			<Textfit
				max={20}
				throttle={60}
				mode="single"
				className="screen-top"
				forceSingleModeWidth={false}
			>
				{props.expression}
			</Textfit>
			<Textfit
				max={80}
				mode="single"
				className="screen-bottom"
				forceSingleModeWidth={false}
			>
				{props.total}
			</Textfit>
		</div>
	);
};
