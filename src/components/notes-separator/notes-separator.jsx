import React from 'react'

import NotesList from '../../components/notes-list/notes-list';

import './notes-separator.scss';

const NotesSeparator = ({ notesList, removeNote, changeColor, pinNote, changeText, isDark }) => {

	const isNotesExist = notesList.length > 0;

	if (!isNotesExist) {
		return (
			<div className="empty-list-container">
				<h2 className="empty-list-title">Здесь будут заметки</h2>
			</div>
		)
	}

	const pinnedNotesList = notesList.filter((item) => item.isPinned).reverse();
	notesList = notesList.filter((item) => !item.isPinned).reverse();


	return (
		<div>
			{pinnedNotesList.length > 0 &&
				<NotesList
					isPinnedExist={pinnedNotesList.length}
					title={"Закреплённые"}
					notesList={pinnedNotesList}
					removeNote={removeNote}
					changeColor={changeColor}
					pinNote={pinNote}
					changeText={changeText}
					isDark={isDark} />}

			<NotesList
				isPinnedExist={pinnedNotesList.length}
				title={"Другие заметки"}
				notesList={notesList}
				removeNote={removeNote}
				changeColor={changeColor}
				pinNote={pinNote}
				changeText={changeText}
				isDark={isDark} />
		</div>
	)
}

export default NotesSeparator;
