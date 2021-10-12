import React from 'react'
import NoteColorChanger from '../note-color-changer/note-color-changer';

import './note-btn.scss'

const NoteBtn = ({ title, onClick, type, noteId, colorId, colorChangerOn, colorChangerOff, changeColor, isDark, colorChangerIsActive }) => {
	let className = "note-btn " + type;

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

export default NoteBtn;
