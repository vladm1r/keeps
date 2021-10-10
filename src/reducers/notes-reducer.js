import { ADD_NOTE, REMOVE_NOTE, CHANGE_COLOR, PIN_NOTE } from "../constants"

const NOTES = [
	{
		id: '1',
		text: 'Первая заметка',
		colorId: 2,
		isPinned: false,
	},
	{
		id: '2',
		text: 'Вторая заметка',
		colorId: 3,
		isPinned: false,
	}
];



const notesReducer = (state = NOTES, { id, text, colorId, type, isPinned }) => {
	switch (type) {
		case ADD_NOTE:
			return [
				...state, {
					id,
					text,
					colorId,
					isPinned,
				}
			];
		case CHANGE_COLOR:
			return [...state].map(note => {
				if (note.id === id) {
					note.colorId = colorId;
				}
				return note;
			});
		case PIN_NOTE:
			return [...state].map(note => {
				if (note.id === id) {
					note.isPinned = !note.isPinned;
				}
				return note;
			});
		case REMOVE_NOTE:
			return [...state].filter(note => note.id !== id);
		default:
			return state;
	}
}

export default notesReducer;