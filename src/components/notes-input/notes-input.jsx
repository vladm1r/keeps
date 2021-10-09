import React from 'react';

import './notes-input.scss';

class NotesInput extends React.Component {

	state = {
		value: ''
	}

	render() {
		return (
			<div className="notes-input">
				<textarea
					className="notes-input-textarea"
					placeholder="Новая заметка..."
				// onChange={onChange}
				// value={value}
				>

				</textarea>
				<button onClick={this.handleSubmit} className="notes-input-btn">создать</button>
			</div>
		)
	}
}

export default NotesInput;
