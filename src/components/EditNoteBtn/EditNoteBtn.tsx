import editSVG from '../../images/pencil.svg';
import { Link } from 'react-router-dom';
import './editNoteBtn.scss';

interface Props {
  id: string;
}

const EditNoteBtn: React.FC<Props> = ({ id }) => {
  return (
    <Link to={`/edit-note/${id}`} className='edit-note-btn'>
      <img className='edit-note-btn__img' src={editSVG} alt='edit note' />
    </Link>
  );
};

export default EditNoteBtn;
