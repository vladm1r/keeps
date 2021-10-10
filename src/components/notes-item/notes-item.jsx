import React from 'react';
import { COLOR_LIST } from '../../constants';
import NoteBtn from '../note-btn/note-btn';

import './notes-item.scss'


const NotesItem = ({ id, text, colorId, removeNote, changeColor, pinNote }) => {

	const [color] = COLOR_LIST.filter(({ id }) => id === colorId);

	return (
		<li className="notes-item">
			<div className="notes-item-body" style={{ backgroundColor: color.color }}>
				<h6 className="notes-item-text">{text}</h6>
				<NoteBtn type="note-color-change-btn" title={'цвет'} noteId={id} colorId={colorId} changeColor={changeColor} />
				<NoteBtn onClick={() => pinNote(id)} type="note-btn-pin" title={'закрепить'} />
				<NoteBtn onClick={() => removeNote(id)} type="note-btn-delete" title={'удалить'} />
			</div>
		</li>
	)
}


export default NotesItem;
