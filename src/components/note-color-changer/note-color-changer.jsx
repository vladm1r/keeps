import React from 'react';
import { COLOR_LIST } from '../../constants';
import './note-color-changer.scss';



class NoteColorChanger extends React.Component {

	state = {
		value: this.props.colorId,
		parentId: this.props.noteId
	}

	handleChange = (e) => {
		let id = +e.target.value;
		const { parentId } = this.state;
		this.props.changeColor(parentId, id);
	}

	render() {
		const { noteId, colorId, isDark } = this.props;
		return (
			<div className="note-color-changer">
				{COLOR_LIST.map(({ id, color, colorDark }) => (
					<label key={id} className="note-color-input-cont">
						<input id={id} type="radio" name={noteId + '-input'} value={id} onChange={this.handleChange} defaultChecked={colorId === id ? true : false} />
						<div className="note-color-radio" style={{ backgroundColor: isDark ? colorDark : color }}></div>
					</label>
				))}
			</div>
		)
	}
};



export default NoteColorChanger;
