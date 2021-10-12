import React from 'react'
import PropTypes, { array } from 'prop-types';
import NotesItem from '../notes-item/notes-item';
import './notes-list.scss';

const NotesList = ({ isPinnedExist, title, notesList, removeNote, changeColor, pinNote, changeText, isDark, onNoteClick, focusedItemId }) => (
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
					changeText={changeText}
					isDark={isDark}
					onNoteClick={onNoteClick}
					isActive={focusedItemId === id} />
			))}
		</ul>
	</div>
);

NotesList.propTypes = {
	isPinnedExist: PropTypes.number,
	title: PropTypes.string,
	notesList: array,
	isDark: PropTypes.bool,
	focusedItemId: PropTypes.string,
	changeColor: PropTypes.func,
	changeText: PropTypes.func,
	removeNote: PropTypes.func,
	pinNote: PropTypes.func,
	onNoteClick: PropTypes.func,
}

NotesList.defaultProps = {
	isPinnedExist: 0,
	title: '',
	notesList: [],
	isDark: false,
	focusedItemId: '',
	changeColor: () => { },
	changeText: () => { },
	removeNote: () => { },
	pinNote: () => { },
	onNoteClick: () => { },
}


export default NotesList;