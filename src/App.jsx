import React from 'react';

import Keep from 'Components/Keep';
import NewKeepInput from 'Components/NewKeepInput';

import 'Styles/app.scss';

class App extends React.Component {
	state = {
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
	}

	addKeep = (item) => {
		this.setState(({ keeps }) => {
			return keeps.push(item);
		})
	}

	render() {
		const keepsArray = this.state.keeps.concat();

		return (
			<main className="keeps">
				<div className="keeps__head">
					<NewKeepInput addKeep={this.addKeep} />
				</div>
				<ul className="keeps__list">
					{
						keepsArray.reverse().map(({ title, id }) => (
							<li className="keeps__item" key={id}><Keep title={title} /></li>
						))
					}
				</ul>
			</main>
		)
	}
}

export default App;
