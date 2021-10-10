import React from 'react';

import './note-color-changer.scss';

const NoteColorChanger = () => {
	return (
		<div className="note-color-changer">
			<input type="radio" name="note-color" className="input-color input-color-a" value="color-a" defaultChecked />
			<input type="radio" name="note-color" className="input-color input-color-b" value="color-b" />
			<input type="radio" name="note-color" className="input-color input-color-c" value="color-c" />
			<input type="radio" name="note-color" className="input-color input-color-d" value="color-d" />
		</div>
	)
};

export default NoteColorChanger;
