import React from 'react'

import NotesItem from '../notes-item/notes-item';
import './notes-list.scss';

const NotesList = ({ notesList, removeNote, changeColor, pinNote }) => (
	<ul className="notes-list">
		{notesList.map(({ text, id, colorId }) => (
			<NotesItem
				key={id}
				id={id}
				text={text}
				colorId={colorId}
				removeNote={removeNote}
				changeColor={changeColor}
				pinNote={pinNote} />
		))}
	</ul>
);

export default NotesList;