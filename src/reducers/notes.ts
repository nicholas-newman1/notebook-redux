import { NoteActionTypes } from '../types/actions';
import { Note } from '../types/Note';

const initialState: Note[] = [];

const noteReducer = (state = initialState, action: NoteActionTypes) => {
  const newState = [...state];
  switch (action.type) {
    case 'ADD_NOTE':
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          text: action.payload.text,
        },
      ];
    case 'DELETE_NOTE':
      return newState.filter((note) => note.id === action.payload);
    case 'UPDATE_NOTE':
      return newState.map((note) => {
        if (note.id !== action.payload.id) return note;
        note.title = action.payload.title;
        note.text = action.payload.text;
        return note;
      });
    default:
      return state;
  }
};

export default noteReducer;
