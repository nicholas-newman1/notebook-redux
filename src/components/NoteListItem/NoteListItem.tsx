import { Note } from '../../types/Note';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../../actions/notes';
import './noteListItem.scss';
import TrashCan from '../TrashCan/TrashCan';
import { useHistory } from 'react-router-dom';
import { useRef } from 'react';

interface Props {
  note: Note;
}

const NoteListItem: React.FC<Props> = ({ note }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const deleteBtn = useRef<HTMLButtonElement>(null);

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget as HTMLButtonElement;
    dispatch(deleteNote(btn.parentElement!.id));
  };

  const viewNote = (e: React.MouseEvent<HTMLLIElement>, id: string) => {
    const deleteBtnElements = [
      deleteBtn.current,
      deleteBtn.current!.firstElementChild,
    ];

    const isTargetDeleteBtn =
      deleteBtnElements.findIndex((el) => (e.target as HTMLElement) === el) !==
      -1;

    !isTargetDeleteBtn && history.push(`notes/${id}`);
  };

  return (
    <li
      className='note-list-item'
      id={note.id}
      onClick={(e) => viewNote(e, note.id)}
    >
      <div className='note-list-item__meta'>
        <h2 className='note-list-item__title'>{note.title}</h2>
        <p className='note-list-item__date'>
          {new Date(note.timestamp * 1000).toLocaleDateString()}
        </p>
      </div>

      <button
        ref={deleteBtn}
        className='note-list-item__btn'
        onClick={handleDelete}
      >
        <TrashCan />
      </button>
    </li>
  );
};

export default NoteListItem;
