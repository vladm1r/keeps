import React from "react";

import './theme-btn.scss';

class ThemeBtn extends React.Component {

	render() {
		const className = 'theme-btn';
		const { isDark } = this.props;
		return (
			<button onClick={(e) => this.props.changeTheme()} className={className}>
				<span className="theme-btn-title">{isDark ? "светлая тема" : "тёмная тема"}</span>
			</button>
		);
	}
}

export default ThemeBtn;