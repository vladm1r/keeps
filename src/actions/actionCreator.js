import { ADD_NOTE, REMOVE_NOTE } from "../constants"

export const addNote = (id, text) => ({
	type: ADD_NOTE,
	id,
	text,
	colorId: 1,
});

export const removeNote = id => ({
	type: REMOVE_NOTE,
	id,
});