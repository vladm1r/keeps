import React from 'react'

import NotesItem from '../notes-item/notes-item';
import './notes-list.scss';

const NotesList = ({ notesList }) => (
	<ul className="notes-list">
		{notesList.map(({ text, id }) => (
			<NotesItem key={id} id={id} text={text} />
		))}
	</ul>
);

export default NotesList;