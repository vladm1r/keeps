import React from 'react'

import NotesList from '../../components/notes-list/notes-list';

const NotesSeparator = ({ notesList, removeNote, changeColor, pinNote, changeText }) => {

	const isNotesExist = notesList.length > 0;

	if (!isNotesExist) {
		return (
			<div>
				ЗАМЕТОК НЕТ
			</div>
		)
	}

	const pinnedNotesList = notesList.filter((item) => item.isPinned);
	notesList = notesList.filter((item) => !item.isPinned);


	return (
		<div>
			<NotesList
				isPinnedExist={pinnedNotesList.length}
				title={"Закреплённые заметки"}
				notesList={pinnedNotesList}
				removeNote={removeNote}
				changeColor={changeColor}
				pinNote={pinNote}
				changeText={changeText} />

			<NotesList
				isPinnedExist={pinnedNotesList.length}
				title={"Другие заметки"}
				notesList={notesList}
				removeNote={removeNote}
				changeColor={changeColor}
				pinNote={pinNote}
				changeText={changeText} />
		</div>
	)
}

export default NotesSeparator;
