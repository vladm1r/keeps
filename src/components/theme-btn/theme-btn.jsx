import React from "react";

import './theme-btn.scss';

class ThemeBtn extends React.Component {

	state = {

	}

	render() {
		const className = 'theme-btn';
		return (
			<button className={className}>
				<span className="theme-btn-title">тёмная тема</span>
			</button>
		);
	}
}

export default ThemeBtn;