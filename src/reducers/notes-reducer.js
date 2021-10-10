import { ADD_NOTE, REMOVE_NOTE } from "../constants"

const NOTES = [
	{
		id: '1',
		text: 'Первая заметка',
		colorId: 2,
	},
	{
		id: '2',
		text: 'Вторая заметка',
		colorId: 3,
	}
];



const notesReducer = (state = NOTES, { id, text, colorId, type }) => {
	switch (type) {
		case ADD_NOTE:
			return [
				...state, {
					id,
					text,
					colorId,
				}
			];
		case REMOVE_NOTE:
			return [...state].filter(note => note.id !== id);
		default:
			return state;
	}
}

export default notesReducer;