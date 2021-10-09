import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../../actions/actionCreator';

import NotesList from '../../components/notes-list/notes-list';
import NotesInput from '../../components/notes-input/notes-input';

import './notes-manager.scss';



class NotesManager extends React.Component {
	state = {
		activeFilter: 'all',
	}

	addNote = (id, text) => {
		const { addNote } = this.props;
		addNote(id, text);
	}

	render() {
		const { notes } = this.props;
		const isNotesExist = notes && notes.length > 0;

		return (
			<main className="main">
				<div className="main-input-container">
					<NotesInput addNote={this.addNote} />
				</div>
				{isNotesExist && <NotesList notesList={notes} />}
			</main>
		)
	}
}



export default connect(state => ({
	notes: state.notesReducer,
}), { addNote })(NotesManager);

