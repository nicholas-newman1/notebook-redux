import { FormEvent, MouseEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { updateNote } from '../../actions/notes';
import { AppState } from '../../reducers';
import './editNoteForm.scss';

interface MatchProps {
  id: string;
}

interface Props extends RouteComponentProps<MatchProps> {}

const EditNoteForm: React.FC<Props> = ({ match }) => {
  const noteId = match.params.id;
  const notes = useSelector((state: AppState) => state.notes);
  const note = notes.find((note) => note.id === noteId);

  const [title, setTitle] = useState(note ? note.title : '');
  const [text, setText] = useState(note ? note.text : '');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      updateNote({ id: note!.id, title, timestamp: Date.now() / 1000, text })
    );
    history.push(`/notes/${noteId}`);
  };

  const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
    history.goBack();
  };

  useEffect(() => {
    if (!note) history.push('/');
    //eslint-disable-next-line
  }, []);

  return note ? (
    <form className='edit-note-form' onSubmit={handleSubmit}>
      <input
        className='edit-note-form__input edit-note-form__input--title'
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Title'
      />
      <textarea
        className='edit-note-form__input edit-note-form__input--text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className='edit-note-form__btns'>
        <button
          className='edit-note-form__btn edit-note-form__btn--cancel'
          type='button'
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className='edit-note-form__btn edit-note-form__btn--submit'
          type='submit'
        >
          Save
        </button>
      </div>
    </form>
  ) : (
    <h1 className='view-note__title'>Note not found</h1>
  );
};

export default EditNoteForm;
