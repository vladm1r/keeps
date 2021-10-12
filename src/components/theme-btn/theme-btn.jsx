import React from "react";
import PropTypes from 'prop-types';

import './theme-btn.scss';

const ThemeBtn = ({ isDark, changeTheme }) => {

	const className = 'theme-btn';
	return (
		<button onClick={() => changeTheme()} className={className}>
			<span className="theme-btn-title">{isDark ? "светлая тема" : "тёмная тема"}</span>
		</button>
	);
}

ThemeBtn.propTypes = {
	isDark: PropTypes.bool,
	changeTheme: PropTypes.func,
}

ThemeBtn.defaultProps = {
	isDark: false,
	changeTheme: () => { },
}

export default ThemeBtn;