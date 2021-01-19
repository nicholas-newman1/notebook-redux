import { NoteActionTypes } from '../types/actions';
import { Note } from '../types/Note';

const initialState: Note[] = [
  {
    id: '7f3d9597-9dff-4e90-a40f-28ccca85bbf1',
    title: 'Note 1',
    timestamp: 1610823442.041,
    text: 'wadwadwad',
  },

  {
    id: '626160c7-d97d-4a14-be70-83910af50657',
    title: 'Note 2',
    timestamp: 1610823446.986,
    text: 'wadwadwa',
  },

  {
    id: '9c953887-5850-4741-b7eb-7401394f0bf4',
    title: 'Note 3',
    timestamp: 1610823451.207,
    text: 'awdwadwa',
  },
];

const noteReducer = (state = initialState, action: NoteActionTypes) => {
  const newState = [...state];
  switch (action.type) {
    case 'ADD_NOTE':
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          timestamp: action.payload.timestamp,
          text: action.payload.text,
        },
      ];
    case 'DELETE_NOTE':
      return newState.filter((note) => note.id !== action.payload);
    case 'UPDATE_NOTE':
      return newState.map((note) => {
        if (note.id !== action.payload.id) return note;
        note.title = action.payload.title;
        note.text = action.payload.text;
        note.timestamp = action.payload.timestamp;
        return note;
      });
    default:
      return state;
  }
};

export default noteReducer;
