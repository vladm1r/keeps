import React from 'react'

import NotesItem from '../notes-item/notes-item';
import './notes-list.scss';

const NotesList = ({ isPinnedExist, title, notesList, removeNote, changeColor, pinNote, changeText }) => (
	<div className="notes-list-container">
		{isPinnedExist > 0 && notesList.length > 0 && <h2 className="notes-list-title">{title}</h2>}
		<ul className="notes-list">
			{notesList.map(({ text, id, colorId, isPinned }) => (
				<NotesItem
					key={id}
					id={id}
					text={text}
					isPinned={isPinned}
					colorId={colorId}
					removeNote={removeNote}
					changeColor={changeColor}
					pinNote={pinNote}
					changeText={changeText} />
			))}
		</ul>
	</div>
);

export default NotesList;