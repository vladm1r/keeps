import React from 'react';

import NotesList from '../../components/notes-list/notes-list';
import NotesInput from '../../components/notes-input/notes-input';

import './notes.scss';

const NOTES = [
	{
		title: 'Первая заметка',
		id: '1'
	},
	{
		title: 'Вторая заметка',
		id: '2'
	}
];

class Notes extends React.Component {
	state = {
		activeFilter: 'all',
	}

	render() {
		const notesList = NOTES;
		const isNotesExist = notesList && notesList.length > 0;

		return (
			<main className="main">
				<div className="main-input-container">
					<NotesInput />
				</div>
				{isNotesExist && <NotesList notesList={notesList} />}
			</main>
		)
	}
}

export default Notes;
