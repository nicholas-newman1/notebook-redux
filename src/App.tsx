import { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from './actions/notes';
import { AppState } from './reducers';

function App() {
  const [text, setText] = useState('');
  const notes = useSelector((state: AppState) => state.notes);
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addNote(text));
    setText('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
        <button type='submit'>Add Note</button>
      </form>

      {notes.map((note) => (
        <div>
          <h1>Note:</h1>
          <p>{note.text}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
