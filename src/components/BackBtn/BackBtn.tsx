import { useHistory } from 'react-router-dom';
import backSVG from '../../images/back.svg';
import './backBtn.scss';

const BackBtn = () => {
  const history = useHistory();
  return (
    <button onClick={() => history.goBack()} className='back-btn'>
      <img className='back-btn__img' src={backSVG} alt='edit note' />
    </button>
  );
};

export default BackBtn;
