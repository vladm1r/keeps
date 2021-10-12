import React from 'react';
import PropTypes from 'prop-types';
import { COLOR_LIST } from '../../constants';
import './note-color-changer.scss';



class NoteColorChanger extends React.Component {

	state = {
		value: this.props.colorId,
		parentId: this.props.noteId
	}

	handleChange = (e) => {
		let id = +e.target.value;
		const { parentId } = this.state;
		this.props.changeColor(parentId, id);
	}

	render() {
		const { noteId, colorId, isDark, isActive } = this.props;
		const className = isActive ? "note-color-changer isActive" : "note-color-changer";
		return (
			<div className={className}>
				{COLOR_LIST.map(({ id, color, colorDark }) => (
					<label key={id} className="note-color-input-cont">
						<input id={id} type="radio" name={noteId + '-input'} value={id} onChange={this.handleChange} defaultChecked={colorId === id ? true : false} />
						<div className="note-color-radio" style={{ backgroundColor: isDark ? colorDark : color }}></div>
					</label>
				))}
			</div>
		)
	}
};

NoteColorChanger.propTypes = {
	noteId: PropTypes.string,
	colorId: PropTypes.number,
	isDark: PropTypes.bool,
	isActive: PropTypes.bool,
	changeColor: PropTypes.func,
}

NoteColorChanger.defaultProps = {
	noteId: '',
	colorId: 1,
	isDark: false,
	isActive: false,
	changeColor: () => { },
}


export default NoteColorChanger;
