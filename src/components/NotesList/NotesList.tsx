import { useSelector } from 'react-redux';
import { AppState } from '../../reducers';

const NotesList = () => {
  const notes = useSelector((state: AppState) => state.notes);

  return (
    <ul>
      {notes.map((note) => (
        <li>
          <h1>Note:</h1>
          <p>{note.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default NotesList;
