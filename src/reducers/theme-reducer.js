import { CHANGE_THEME } from "../constants";

const THEME = [{
	isDark: false
}];

const themeReducer = (state = THEME, { type }) => {
	switch (type) {
		case CHANGE_THEME:
		case CHANGE_THEME:
			return [...state].map(item => {
				item.isDark = !item.isDark;
				return item;
			});
		default:
			return state;
	}
}

export default themeReducer;