import {
  AddNoteAction,
  DeleteNoteAction,
  UpdateNoteAction,
} from '../types/actions';
import { Note } from '../types/Note';

export const addNote = (text: string): AddNoteAction => ({
  type: 'ADD_NOTE',
  payload: text,
});

export const deleteNote = (id: string): DeleteNoteAction => ({
  type: 'DELETE_NOTE',
  payload: id,
});

export const updateNote = (note: Note): UpdateNoteAction => ({
  type: 'UPDATE_NOTE',
  payload: note,
});
