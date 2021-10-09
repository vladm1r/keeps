import { ADD_NOTE } from "../constants"

const NOTES = [
	{
		id: '1',
		text: 'Первая заметка',
	},
	{
		id: '2',
		text: 'Вторая заметка',
	}
];



const notesReducer = (state = NOTES, { id, text, type }) => {
	switch (type) {
		case ADD_NOTE:
			return [
				...state, {
					id,
					text
				}
			];
		default:
			return state;
	}
}

export default notesReducer;