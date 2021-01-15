import { NoteActionTypes } from '../types/actions';
import { v4 as uuid } from 'uuid';
import { Note } from '../types/Note';

const initialState: Note[] = [];

const noteReducer = (state = initialState, action: NoteActionTypes) => {
  const newState = [...state];
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, { id: uuid(), text: action.payload }];
    case 'DELETE_NOTE':
      return newState.filter((note) => note.id === action.payload);
    case 'UPDATE_NOTE':
      return newState.map((note) => {
        if (note.id !== action.payload.id) return note;
        note.text = action.payload.text;
        return note;
      });
    default:
      return state;
  }
};

export default noteReducer;
