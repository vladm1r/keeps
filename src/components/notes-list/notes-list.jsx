import React from 'react'

import NotesItem from '../notes-item/notes-item';
import './notes-list.scss';

const NotesList = ({ notesList }) => (
	<ul className="notes-list">
		{notesList.map(({ title, id }) => (
			<NotesItem key={id} id={id} title={title} />
		))}
	</ul>
);

export default NotesList;