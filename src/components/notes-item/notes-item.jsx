import React from 'react';
import autosize from 'autosize';
import { COLOR_LIST } from '../../constants';
import NoteBtn from '../note-btn/note-btn';

import './notes-item.scss'


// const NotesItem = ({ id, text, colorId, removeNote, changeColor, pinNote, changeText }) => {

// 	componentDidMount(){
// 		this.textarea.focus();
// 		autosize(this.textarea);
// 	}

// 	const [color] = COLOR_LIST.filter(({ id }) => id === colorId);

// 	return (
// 		<li className="notes-item">
// 			<div className="notes-item-body" style={{ backgroundColor: color.color }}>
// 				<textarea className="notes-item-text" onChange={(e) => changeText(id, e.target.value)} defaultValue={text}></textarea>
// 				<NoteBtn type="note-color-change-btn" title={'цвет'} noteId={id} colorId={colorId} changeColor={changeColor} />
// 				<NoteBtn onClick={() => pinNote(id)} type="note-btn-pin" title={'закрепить'} />
// 				<NoteBtn onClick={() => removeNote(id)} type="note-btn-delete" title={'удалить'} />
// 			</div>
// 		</li>
// 	)
// }

class NotesItem extends React.Component {

	componentDidMount() {
		this.textarea.focus();
		autosize(this.textarea);
	}

	render() {
		const { id, text, colorId, removeNote, changeColor, pinNote, changeText } = this.props;
		const [color] = COLOR_LIST.filter(({ id }) => id === colorId);
		return (
			<li className="notes-item">
				<div className="notes-item-body" style={{ backgroundColor: color.color }}>
					<textarea ref={c => this.textarea = c} className="notes-item-text" onChange={(e) => changeText(id, e.target.value)} defaultValue={text}></textarea>
					<NoteBtn type="note-color-change-btn" title={'цвет'} noteId={id} colorId={colorId} changeColor={changeColor} />
					<NoteBtn onClick={() => pinNote(id)} type="note-btn-pin" title={'закрепить'} />
					<NoteBtn onClick={() => removeNote(id)} type="note-btn-delete" title={'удалить'} />
				</div>
			</li>
		)
	}
}



export default NotesItem;
