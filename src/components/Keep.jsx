import React from 'react';

import 'Styles/keep.scss'

class Keep extends React.Component {

	constructor(props) {
		super(props);
		this.state = { title: props.title };
	}

	render() {

		return (
			<div className="keep">
				<div className="keep__body">
					<h6 className="keep__title">{this.state.title}</h6>
				</div>
			</div>
		)
	}
}

export default Keep;
