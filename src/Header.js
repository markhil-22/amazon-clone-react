import React from 'react';
import './Header.css';
import { BsShop } from 'react-icons/bs';
import { BsCart4 } from 'react-icons/bs';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='header'>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <div className='header__logo'>
          <BsShop className='header__logoImage' fontSize='large' />
          <h2 className='header__logoTitle'>primeShop</h2>
        </div>
      </Link>

      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        <Link to='/login' style={{ textDecoration: 'none' }}>
          <div className='nav__item'>
            <span className='nav__itemLineOne'>Hello Guest</span>
            <span className='nav__itemLineTwo'>Sign In</span>
          </div>
        </Link>
        <Link to='/checkout' style={{ textDecoration: 'none' }}>
          <div className='nav__item'>
            <span className='nav__itemLineOne'>Your</span>
            <span className='nav__itemLineTwo'>Shop</span>
          </div>
        </Link>
        <Link to='/checkout' style={{ textDecoration: 'none' }}>
          <div className='nav__itemBasket bump'>
            <BsCart4 />
            <span className='nav__itemLineTwo nav__basketCount bump'>
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
