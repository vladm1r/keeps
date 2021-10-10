import { ADD_NOTE, REMOVE_NOTE, CHANGE_COLOR, PIN_NOTE } from "../constants"

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

export const pinNote = (id) => ({
	type: PIN_NOTE,
	id,
});