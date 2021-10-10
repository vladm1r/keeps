import React from 'react';
import { connect } from 'react-redux';
import { addNote, removeNote, changeColor, pinNote, changeText } from '../../actions/actionCreator';

import NotesSeparator from '../../components/notes-separator/notes-separator';
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

	changeColor = (id, colorId) => {
		const { changeColor } = this.props;
		changeColor(id, colorId);
	}

	changeColor = (id, text) => {
		const { changeText } = this.props;
		changeText(id, text);
	}

	pinNote = (id) => {
		const { pinNote } = this.props;
		pinNote(id);
	}

	render() {
		const { notes, removeNote, changeColor, pinNote, changeText } = this.props;

		return (
			<main className="main">
				<div className="main-input-container">
					<NotesInput addNote={this.addNote} />
				</div>
				<NotesSeparator notesList={notes} removeNote={removeNote} changeColor={changeColor} pinNote={pinNote} changeText={changeText} />

			</main>
		)
	}
}



export default connect(state => ({
	notes: state.notesReducer,
}), { addNote, removeNote, changeColor, pinNote, changeText })(NotesManager);

