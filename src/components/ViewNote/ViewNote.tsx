import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { AppState } from '../../reducers';
import './viewNote.scss';

interface MatchProps {
  id: string;
}

interface Props extends RouteComponentProps<MatchProps> {}

const ViewNote: React.FC<Props> = ({ match }) => {
  const noteId = match.params.id;
  const notes = useSelector((state: AppState) => state.notes);
  const { title, text } = notes.find((note) => note.id === noteId)!;
  return (
    <div className='view-note'>
      <h1 className='view-note__title'>{title}</h1>
      {text.split('\n').map((p, i) => (
        <p key={i} className='view-note__p'>
          {p}
        </p>
      ))}
    </div>
  );
};

export default ViewNote;
