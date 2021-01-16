import { useSelector } from 'react-redux';
import { AppState } from '../../reducers';
import NoteListItem from '../NoteListItem/NoteListItem';

const NoteList: React.FC = () => {
  const notes = useSelector((state: AppState) => state.notes);

  return (
    <ul>
      {notes.map((note) => (
        <NoteListItem key={note.id} note={note} />
      ))}
    </ul>
  );
};

export default NoteList;
