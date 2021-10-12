import React from 'react';
import { connect } from 'react-redux';
import { addNote, removeNote, changeColor, pinNote, changeText } from '../../actions/actionCreator';

import NotesSeparator from '../../components/notes-separator/notes-separator';
import NotesInput from '../../components/notes-input/notes-input';

import './notes-manager.scss';



class NotesManager extends React.Component {

	state = {
		focusedItemId: ''
	}

	onNoteClick = (id) => {
		if (id) {
			this.setState({
				focusedItemId: id
			})
		}
	}

	render() {
		const { notes, addNote, removeNote, changeColor, pinNote, changeText, isDark } = this.props;
		const { focusedItemId } = this.state;
		const mainClassName = isDark ? "main isDark" : "main";

		return (
			<main className={mainClassName}>
				<div className="main-input-container">
					<NotesInput addNote={addNote} />
				</div>
				<NotesSeparator
					notesList={notes}
					isDark={isDark}
					removeNote={removeNote}
					changeColor={changeColor}
					pinNote={pinNote}
					changeText={changeText}
					onNoteClick={this.onNoteClick}
					focusedItemId={focusedItemId} />

			</main>
		)
	}
}



export default connect(state => ({
	notes: state.notesReducer,
	isDark: state.themeReducer[0].isDark
}), { addNote, removeNote, changeColor, pinNote, changeText })(NotesManager);

