import React, { Fragment } from 'react';

import Header from './containers/header/header';
import NotesManager from './containers/notes-manager/notes-manager';

class App extends React.Component {

	render() {
		return (
			<>
				<Header />
				<NotesManager />
			</>
		)
	}
}

export default App;
