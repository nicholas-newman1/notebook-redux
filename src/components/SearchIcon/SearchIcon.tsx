import searchSVG from '../../images/search.svg';
import './searchIcon.scss';

const SearchIcon: React.FC = () => {
  return <img className='search-icon' src={searchSVG} alt='search' />;
};

export default SearchIcon;
