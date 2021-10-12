import { createStore, compose, combineReducers } from 'redux';
import rootReducer from './reducers/index';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
	process.env.NODE_ENV !== 'production' &&
		typeof window === 'object' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
/* eslint-enable */

const saveToLocalStorage = (state) => {
	try {
		localStorage.setItem('state', JSON.stringify(state));
	} catch (e) {
		console.error(e);
	}
};

const loadFromLocalStorage = () => {
	try {
		const stateStr = localStorage.getItem('state');
		return stateStr ? JSON.parse(stateStr) : undefined;
	} catch (e) {
		console.error(e);
		return undefined;
	}
};

const persistedStore = loadFromLocalStorage();

const configureStore = preloadedState => (
	createStore(
		rootReducer,
		preloadedState,
		composeEnhancers(),
	)
);

let store;

if (persistedStore) {
	const { notesReducer, themeReducer } = persistedStore;
	store = configureStore({ notesReducer, themeReducer });
} else {
	store = configureStore({});
}


store.subscribe(() => {
	saveToLocalStorage(store.getState());
});

export default store;