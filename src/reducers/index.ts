import notes from './notes';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ notes });

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
