import { useDispatch, useSelector } from 'react-redux';
import { deleteNote } from '../../actions/notes';
import { AppState } from '../../reducers';

const NotesList = () => {
  const notes = useSelector((state: AppState) => state.notes);
  const dispatch = useDispatch();

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.target as HTMLButtonElement;
    dispatch(deleteNote(btn.parentElement!.id));
  };

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id} id={note.id}>
          <h1>{note.title}</h1>
          <button onClick={handleDelete}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default NotesList;
