import { ADD_NOTE, REMOVE_NOTE, CHANGE_COLOR, PIN_NOTE, CHANGE_TEXT } from "../constants"

export const addNote = (id, text) => ({
	type: ADD_NOTE,
	id,
	text,
	isPinned: false,
	colorId: 1,
});

export const removeNote = id => ({
	type: REMOVE_NOTE,
	id,
});

export const changeColor = (id, colorId) => ({
	type: CHANGE_COLOR,
	id,
	colorId,
});

export const changeText = (id, text) => ({
	type: CHANGE_TEXT,
	id,
	text,
});


export const pinNote = (id) => ({
	type: PIN_NOTE,
	id,
});