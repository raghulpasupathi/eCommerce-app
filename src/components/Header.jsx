import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className="header">
        <div className="header__logo">
            <StorefrontIcon className = "header__logoImage" fontSize='large'/>
            <h2 className='header__logoTitle'>eCoShop</h2>
        </div>
        
        <div className="header__search">
            <input className="header__searchInput" type="text" placeholder='search...' />
            <SearchIcon className='header__searchIcon'/>
        </div>

        <div className="header__nav">
            <div className="nav__item">
                <span className='nav__itemOne'>Hello Guest</span>
                <span className='nav__itemTwo'>SignIn</span>
            </div>
            <div className="nav__item">
                <span className='nav__itemOne'>Your</span>
                <span className='nav__itemTwo'>Shop</span>
            </div>
            <div className="nav__itemBasket">
                <ShoppingBasketIcon/>
                <span className='nav__itemTwo nav__itemCount'>0</span>
            </div>
        </div>
    </div>
  )
}

export default Header