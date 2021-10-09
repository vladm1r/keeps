import React from 'react';

import './notes-item.scss'

class NotesItem extends React.Component {


	state = {
		id: this.props.id,
		text: this.props.text,
	}

	render() {
		return (
			<li className="notes-item">
				<div className="notes-item-body">
					<h6 className="notes-item-text">{this.props.text}</h6>
				</div>
			</li>
		)
	}
}


export default NotesItem;
