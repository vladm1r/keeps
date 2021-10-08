import React from 'react';

import Keep from 'Components/Keep';
import NewKeepInput from 'Components/NewKeepInput';

import 'Styles/app.scss';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			keeps: [
				{
					title: 'Первая заметка',
					id: '1'
				},
				{
					title: 'Вторая заметка',
					id: '2'
				}
			],
		};
		this.addKeep = this.addKeep.bind(this);
	}

	addKeep(item) {
		let mutableState = Object.assign({}, this.state);
		mutableState.keeps.push(item);
		this.setState(mutableState);
	}

	render() {
		return (
			<main className="keeps">
				<div className="keeps__head">
					<NewKeepInput addKeep={this.addKeep} />
				</div>
				<ul className="keeps__list">
					{
						this.state.keeps.reverse().map(({ title, id }) => (
							<li className="keeps__item" key={id}><Keep title={title} /></li>
						))
					}
				</ul>
			</main>
		)
	}
}

export default App;
