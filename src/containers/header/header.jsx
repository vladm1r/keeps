import React from 'react'
import { connect } from 'react-redux';
import { changeTheme } from '../../actions/actionCreator';

import Logo from '../../components/logo/logo';
import ThemeBtn from '../../components/theme-btn/theme-btn';

import './header.scss';

class Header extends React.Component {

	render() {
		const { isDark, changeTheme } = this.props;
		const headerClassName = isDark ? "header isDark" : "header";
		return (
			<header className={headerClassName}>
				<Logo title={'notes'} />
				<ThemeBtn isDark={isDark} changeTheme={changeTheme} />
			</header>
		)
	}
}

export default connect(state => ({
	isDark: state.themeReducer[0].isDark
}), { changeTheme })(Header);