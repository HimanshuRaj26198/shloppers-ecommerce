import  { useContext } from 'react';

import { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = ()=>{

    const [menu ,setMenu] = useState('shop');
    const {cartItems} = useContext(ShopContext);

    
    return <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} />
        <p>Shopper</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu('shop')}}><Link  to={'/'} >Shop { menu==='shop'?<hr/>:<></>} </Link></li>
        <li onClick={()=>{setMenu('mens')}}><Link  to={'/mens'}>Men{menu==='mens'?<hr/>:<></>}</Link></li>
        <li onClick={()=>{setMenu('womens')}}><Link  to={'/womens'}>Women {menu==='womens'?<hr/>:<></>}</Link></li>
        <li onClick={()=>{setMenu('kids')}}><Link  to={'/kids'}>Kids{menu==='kids'?<hr/>:<></>}</Link></li>
      </ul>
      <div className='nav-login-cart'>
        {localStorage.getItem("auth-token")?<button onClick={()=>{localStorage.removeItem("auth-token");window.location.replace("/")}}>Logout</button>:  <Link to={'/login'} ><button>Login</button></Link>}
    
        <Link to={'/cart'}><img src={cart_icon} /></Link>
        <div className='nav-cart-count'>{Object.values(cartItems).reduce((a, b)=> a + b)}</div>
        </div>

    </div>
}

export default Navbar;