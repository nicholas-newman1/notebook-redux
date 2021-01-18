import plusSVG from '../../images/plus.svg';
import { Link } from 'react-router-dom';
import './newNoteBtn.scss';

const NewNoteBtn: React.FC = () => {
  return (
    <Link to='/new-note' className='new-note-btn'>
      <img className='new-note-btn__svg' src={plusSVG} alt='menu icon' />
    </Link>
  );
};

export default NewNoteBtn;
