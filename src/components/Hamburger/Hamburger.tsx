import hamburgerSVG from '../../images/hamburger.svg';
import './hamburger.scss';

const Hamburger: React.FC = () => {
  return <img className='hamburger' src={hamburgerSVG} alt='menu' />;
};

export default Hamburger;
