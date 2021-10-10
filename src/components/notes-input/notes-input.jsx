import React from 'react';

import './notes-input.scss';

class NotesInput extends React.Component {

	state = {
		value: ''
	}

	handleInputChange = ({ target: { value } }) => {
		this.setState({
			value,
		})
	}

	handleSubmit = () => {
		const { value } = this.state;
		const id = value.substr(0, 3) + (new Date()).getTime();
		if (value) {
			this.props.addNote(id, this.state.value);
			this.setState({ value: '' })
		}
	}


	render() {
		return (
			<div className="notes-input">
				<textarea
					className="notes-input-textarea"
					placeholder="Новая заметка..."
					onChange={this.handleInputChange}
					value={this.state.value}
				>

				</textarea>
				<button onClick={this.handleSubmit} className="notes-input-btn">создать</button>
			</div>
		)
	}
}

export default NotesInput;
