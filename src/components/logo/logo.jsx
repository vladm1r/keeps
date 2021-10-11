import React from 'react'

import './logo.scss'
import logoIcon from '../../assets/logo.png';

const Logo = ({ title }) => {
	return (
		<div className="logo-container">
			<img src={logoIcon} alt="logo" className="logo-icon" />
			<span className="logo-text">{title}</span>
		</div>
	)
}

export default Logo
