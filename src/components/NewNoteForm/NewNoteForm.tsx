import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../actions/notes';
import './newNoteForm.scss';

const NewNoteForm = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addNote(text));
    setText('');
  };

  return (
    <form className='new-note-form' onSubmit={handleSubmit}>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button type='submit'>Add Note</button>
    </form>
  );
};

export default NewNoteForm;
