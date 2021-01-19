import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { AppState } from '../../reducers';
import EditNoteBtn from '../EditNoteBtn/EditNoteBtn';
import './viewNote.scss';

interface MatchProps {
  id: string;
}

interface Props extends RouteComponentProps<MatchProps> {}

const ViewNote: React.FC<Props> = ({ match }) => {
  const noteId = match.params.id;
  const notes = useSelector((state: AppState) => state.notes);
  const note = notes.find((note) => note.id === noteId);
  return note ? (
    <div className='view-note'>
      <h1 className='view-note__title'>{note.title}</h1>
      {note.text.split('\n').map((p, i) => (
        <p key={i} className='view-note__p'>
          {p}
        </p>
      ))}
      <EditNoteBtn id={noteId} />
    </div>
  ) : (
    <h1 className='view-note__title'>Note not found</h1>
  );
};

export default ViewNote;
