import React from 'react';

import './keeps-input.scss';

class KeepsInput extends React.Component {

	state = {
		value: ''
	}

	handleChange = (event) => {
		this.setState({ value: event.target.value });
	}

	handleSubmit = (event) => {
		event.preventDefault();
		if (this.state.value) {
			this.createKeep(this.state.value);
		}
		this.setState({ value: '' });
	}

	createKeep = (title) => {
		let id = title.substr(0, 3) + (new Date).getTime();
		let keep = {
			title: title,
			id: id
		}
		this.props.addKeep(keep);
	}

	render() {
		return (
			<div className="keeps-input">
				<textarea
					className="keeps-input-textarea"
					placeholder="Новая заметка..."
					onChange={this.handleChange}
					value={this.state.value}
				>

				</textarea>
				<button onClick={this.handleSubmit} className="keeps-input-btn">создать</button>
			</div>
		)
	}
}

export default KeepsInput;
