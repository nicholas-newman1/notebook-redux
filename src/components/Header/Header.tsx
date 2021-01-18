import { Link } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger';
import SearchIcon from '../SearchIcon/SearchIcon';
import './header.scss';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='header__container container'>
        <Hamburger />
        <Link to='/' className='header__link'>
          <h1 className='header__heading'>Notes</h1>
        </Link>
        <SearchIcon />
      </div>
    </header>
  );
};

export default Header;
