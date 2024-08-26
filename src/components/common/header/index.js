import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div className='navbar'>
        <div className='part1'>
        <i className="fi-rr-menu-burger icon"></i>
        <i className="fi-rr-search icon"></i>
        
        </div>
        <div className='part2'>
            <img src='https://logos-world.net/wp-content/uploads/2022/01/BBC-Logo.png' alt='bbc logo'className='mainlogo'></img>
        </div>
        <div className='part3'>
            <button className='navbutton1'>Register</button>
            <button className='navbutton2'>Sign in</button>
        </div>
    </div>
  )
}

export default Header