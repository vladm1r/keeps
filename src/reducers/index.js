import { combineReducers } from "redux";
import notesReducer from "./notes-reducer";
import themeReducer from "./theme-reducer";

const rootReducer = combineReducers({ notesReducer, themeReducer });


export default rootReducer;