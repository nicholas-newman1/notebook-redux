import { Note } from '../../types/Note';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../../actions/notes';
import './noteListItem.scss';

interface Props {
  note: Note;
}

const NoteListItem: React.FC<Props> = ({ note }) => {
  const dispatch = useDispatch();

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.target as HTMLButtonElement;
    dispatch(deleteNote(btn.parentElement!.id));
  };

  return (
    <li key={note.id} id={note.id}>
      <h2>{note.title}</h2>
      <p>
        {new Date(note.timestamp * 1000).toLocaleDateString()}{' '}
        {new Date(note.timestamp * 1000).toLocaleTimeString([], {
          hour: 'numeric',
          minute: 'numeric',
        })}
      </p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default NoteListItem;
