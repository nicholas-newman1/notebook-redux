import { Note } from './Note';

export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';

export interface AddNoteAction {
  type: typeof ADD_NOTE;
  payload: Note;
}
export interface DeleteNoteAction {
  type: typeof DELETE_NOTE;
  payload: string;
}
export interface UpdateNoteAction {
  type: typeof UPDATE_NOTE;
  payload: Note;
}

export type NoteActionTypes =
  | AddNoteAction
  | DeleteNoteAction
  | UpdateNoteAction;

export type AppActions = NoteActionTypes;
