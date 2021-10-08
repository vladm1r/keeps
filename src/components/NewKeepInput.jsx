import React from 'react';

import 'Styles/newKeepInput.scss';

class NewKeepInput extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.createKeep = this.createKeep.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		if (this.state.value) {
			this.createKeep(this.state.value);
		}
		this.setState({ value: '' });
	}

	createKeep(title) {
		let id = title.substr(0, 3) + (new Date).getTime();
		let keep = {
			title: title,
			id: id
		}
		this.props.addKeep(keep);
	}

	render() {
		return (
			<div className="newkeep">
				<textarea
					className="newkeep__input"
					placeholder="Новая заметка..."
					onChange={this.handleChange}
					value={this.state.value}
				>

				</textarea>
				<button onClick={this.handleSubmit} className="newkeep__btn">создать</button>
			</div>
		)
	}
}

export default NewKeepInput;
