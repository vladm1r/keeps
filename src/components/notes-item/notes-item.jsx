import React from 'react';
import PropTypes from 'prop-types';
import autosize from 'autosize';
import { COLOR_LIST } from '../../constants';
import NoteBtn from '../note-btn/note-btn';

import './notes-item.scss'


class NotesItem extends React.Component {

	state = {
		colorChangerIsActive: false
	}

	componentDidMount() {
		this.textarea.focus();
		autosize(this.textarea);
	}

	pinThisNote = () => {
		const { pinNote, id, isActive } = this.props;
		if (isActive) {
			pinNote(id);
		}
	}

	removeThisNote = () => {
		const { removeNote, id, isActive } = this.props;
		if (isActive) {
			removeNote(id);
		}
	}

	colorChangerOn = () => {
		this.setState({
			colorChangerIsActive: true
		})
	}

	colorChangerOff = () => {
		this.setState({
			colorChangerIsActive: false
		})
	}

	render() {
		const { id, text, colorId, changeColor, changeText, isPinned, isDark, onNoteClick, isActive } = this.props;
		const [color] = COLOR_LIST.filter(({ id }) => id === colorId);
		let className = isPinned ? "notes-item isPinned" : "notes-item";
		const noteColor = isDark ? color.colorDark : color.color;

		className = isActive ? className + ' isActive' : className;

		return (
			<li className={className}>
				<div className="notes-item-body"
					style={{ backgroundColor: noteColor }}
					onClick={() => onNoteClick(id)}
					onMouseOver={() => onNoteClick(id)}
					onMouseOut={() => onNoteClick(' ')}>

					<textarea
						ref={c => this.textarea = c}
						className="notes-item-text"
						onChange={(e) => changeText(id, e.target.value)}
						defaultValue={text}
						spellCheck="false"></textarea>

					<NoteBtn
						type="note-color-change-btn"
						isDark={isDark}
						colorChangerIsActive={this.state.colorChangerIsActive}
						title={'цвет'}
						noteId={id}
						colorId={colorId}
						changeColor={changeColor}
						colorChangerOn={() => this.colorChangerOn()}
						colorChangerOff={() => this.colorChangerOff()} />

					<NoteBtn onClick={() => this.pinThisNote()} type="note-btn-pin" title={isPinned ? 'открепить' : 'закрепить'} />
					<NoteBtn onClick={() => this.removeThisNote()} type="note-btn-delete" title={'удалить'} />

				</div>
			</li>
		)
	}
}

NotesItem.propTypes = {
	id: PropTypes.string.isRequired,
	text: PropTypes.string,
	colorId: PropTypes.number,
	isPinned: PropTypes.bool,
	isDark: PropTypes.bool,
	isActive: PropTypes.bool,
	changeColor: PropTypes.func,
	changeText: PropTypes.func,
	onNoteClick: PropTypes.func,
}

NotesItem.defaultProps = {
	text: '',
	colorId: 1,
	isPinned: false,
	isDark: false,
	isActive: false,
	changeColor: () => { },
	changeText: () => { },
	onNoteClick: () => { },
}

export default NotesItem;
