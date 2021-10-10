import React from 'react'

import NotesList from '../../components/notes-list/notes-list';

const NotesSeparator = ({ notesList, removeNote, changeColor, pinNote }) => {

	const isNotesExist = notesList.length > 0;

	if (!isNotesExist) {
		return (
			<div>
				ЗАМЕТОК НЕТ
			</div>
		)
	}

	const pinnedNotesList = notesList.filter((item) => item.isPinned);

	return (
		<div>
			<NotesList notesList={pinnedNotesList} removeNote={removeNote} changeColor={changeColor} pinNote={pinNote} />
			<NotesList notesList={notesList} removeNote={removeNote} changeColor={changeColor} pinNote={pinNote} />
		</div>
	)
}

export default NotesSeparator;
