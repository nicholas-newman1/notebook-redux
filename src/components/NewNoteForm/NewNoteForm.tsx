import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../actions/notes';
import { v4 as uuid } from 'uuid';
import './newNoteForm.scss';

const NewNoteForm = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addNote({ id: uuid(), title, text }));
    setText('');
    setTitle('');
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
      <button className='new-note-form__submit' type='submit'>
        Add Note
      </button>
    </form>
  );
};

export default NewNoteForm;
