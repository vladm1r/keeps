import { ADD_NOTE } from "../constants"

export const addNote = (id, text) => ({
	type: ADD_NOTE,
	id,
	text,
});