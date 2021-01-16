import Hamburger from '../Hamburger/Hamburger';
import SearchIcon from '../SearchIcon/SearchIcon';
import './header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__container container'>
        <Hamburger />
        <h1 className='header__heading'>Notes</h1>
        <SearchIcon />
      </div>
    </header>
  );
};

export default Header;
