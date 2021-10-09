import React from 'react';

import KeepsItem from '../../components/keeps-item/keeps-item';
import KeepsInput from '../../components/keep-input/keeps-input';

import './keeps.scss';

class Keeps extends React.Component {
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
		});
		console.log(item);
	}

	render() {
		const keepsArray = this.state.keeps.concat();

		return (
			<main className="keeps">
				<div className="keeps-head">
					<KeepsInput addKeep={this.addKeep} />
				</div>
				<ul className="keeps-list">
					{
						keepsArray.reverse().map(({ title, id }) => (
							<KeepsItem key={id} id={id} title={title} />
						))
					}
				</ul>
			</main>
		)
	}
}

export default Keeps;
