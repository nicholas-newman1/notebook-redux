import { FormEvent, MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../actions/notes';
import { v4 as uuid } from 'uuid';
import './newNoteForm.scss';
import { useHistory } from 'react-router-dom';

const NewNoteForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addNote({ id: uuid(), title, timestamp: Date.now() / 1000, text })
    );
    history.push('/');
  };

  const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
    history.push('/');
  };

  return (
    <form className='new-note-form' onSubmit={handleSubmit}>
      <input
        className='new-note-form__input new-note-form__input--title'
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Title'
      />
      <textarea
        className='new-note-form__input new-note-form__input--text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className='new-note-form__btns'>
        <button
          className='new-note-form__btn new-note-form__btn--cancel'
          type='button'
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className='new-note-form__btn new-note-form__btn--submit'
          type='submit'
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default NewNoteForm;
