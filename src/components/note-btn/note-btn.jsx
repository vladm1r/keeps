import React from 'react';
import PropTypes from 'prop-types';
import NoteColorChanger from '../note-color-changer/note-color-changer';

import './note-btn.scss'

const NoteBtn = ({ title, onClick, type, noteId, colorId, colorChangerOn, colorChangerOff, changeColor, isDark, colorChangerIsActive }) => {
	const className = "note-btn " + type;

	if (type === "note-color-change-btn") {
		return (
			<button
				onClick={colorChangerOn}
				onMouseOver={colorChangerOn}
				onMouseOut={colorChangerOff}
				className={className}>

				<NoteColorChanger noteId={noteId} isDark={isDark} colorId={colorId} isActive={colorChangerIsActive} changeColor={changeColor} />
				<span className="note-btn-title">{title}</span>
			</button>
		)
	}

	return (
		<button onClick={onClick} className={className}>
			<span className="note-btn-title">{title}</span>
		</button>
	)
}

NoteBtn.propTypes = {
	title: PropTypes.string,
	type: PropTypes.string,
	noteId: PropTypes.string,
	colorId: PropTypes.number,
	isDark: PropTypes.bool,
	colorChangerIsActive: PropTypes.bool,
	onClick: PropTypes.func,
	colorChangerOn: PropTypes.func,
	colorChangerOff: PropTypes.func,
	changeColor: PropTypes.func,
}

NoteBtn.defaultProps = {
	title: '',
	type: '',
	noteId: '',
	colorId: 1,
	isDark: false,
	colorChangerIsActive: false,
	onClick: () => { },
	colorChangerOn: () => { },
	colorChangerOff: () => { },
	changeColor: () => { },
}


export default NoteBtn;
