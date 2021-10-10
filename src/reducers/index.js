import { combineReducers } from "redux";
import notesReducer from "./notes-reducer";

const rootReducer = combineReducers({ notesReducer });


export default rootReducer;