import React from 'react';

import './keeps-item.scss'

class KeepsItem extends React.Component {


	state = {
		title: this.props.title,
		id: this.props.id
	}

	render() {
		return (
			<li className="keeps-item">
				<div className="keeps-item-body">
					<h6 className="keeps-item-title">{this.props.title}</h6>
				</div>
			</li>
		)
	}
}


export default KeepsItem;
