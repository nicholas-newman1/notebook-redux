import plusSVG from '../../images/pencil.svg';
import { Link } from 'react-router-dom';
import './editNoteBtn.scss';

interface Props {
  id: string;
}

const EditNoteBtn: React.FC<Props> = ({ id }) => {
  return (
    <Link to={`/new-note/${id}`} className='edit-note-btn'>
      <img className='edit-note-btn__svg' src={plusSVG} alt='menu icon' />
    </Link>
  );
};

export default EditNoteBtn;
