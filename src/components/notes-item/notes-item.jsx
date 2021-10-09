import React from 'react';

import './notes-item.scss'

class NotesItem extends React.Component {


	state = {
		title: this.props.title,
		id: this.props.id
	}

	render() {
		return (
			<li className="notes-item">
				<div className="notes-item-body">
					<h6 className="notes-item-title">{this.props.title}</h6>
				</div>
			</li>
		)
	}
}


export default NotesItem;
