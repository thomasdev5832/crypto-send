import React from 'react';
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
   <div className='navbar'>
        <nav>
            <div className='nav_logo_container'>
                <img src={logo} alt="logo" className='nav_logo' draggable="false" />

                <ul>
                    <li>
                        <a href="/">
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span>Transactions</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span>About us</span>
                        </a>
                    </li>
                    <button className='btn login-btn'>Login</button>
                </ul>
            </div>
        </nav>
   </div> 
  )
}

export default Navbar