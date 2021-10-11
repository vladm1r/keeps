import React from 'react'

import Logo from '../../components/logo/logo';
import ThemeBtn from '../../components/theme-btn/theme-btn';

import './header.scss';

class Header extends React.Component {

	render() {
		return (
			<header className="header">
				<Logo title={'notes'} />
				<ThemeBtn />
			</header>
		)
	}
}

export default Header;
