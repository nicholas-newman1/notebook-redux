import { Note } from '../../types/Note';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../../actions/notes';
import './noteListItem.scss';
import TrashCan from '../TrashCan/TrashCan';

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
    <li className='note-list-item' id={note.id}>
      <div className='note-list-item__meta'>
        <h2 className='note-list-item__title'>{note.title}</h2>
        <p className='note-list-item__date'>
          {new Date(note.timestamp * 1000).toLocaleDateString()}
        </p>
      </div>

      <button className='note-list-item__btn' onClick={handleDelete}>
        <TrashCan />
      </button>
    </li>
  );
};

export default NoteListItem;
