import { useSelector } from 'react-redux';
import { AppState } from '../../reducers';
import { sortArrayOfObjects } from '../../utils';
import NoteListItem from '../NoteListItem/NoteListItem';
import './noteList.scss';

const NoteList: React.FC = () => {
  const notes = useSelector((state: AppState) => state.notes);
  const sortedNotes = sortArrayOfObjects(notes, 'timestamp', true);

  return (
    <ul className='note-list'>
      {sortedNotes.map((note) => (
        <NoteListItem key={note.id} note={note} />
      ))}
    </ul>
  );
};

export default NoteList;
