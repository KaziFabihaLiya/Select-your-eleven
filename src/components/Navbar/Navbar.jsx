import React from 'react';
import navImg from '../../assets/logo.png'
import coin from '../../assets/currency.png';
const Navbar = ({availableBalance}) => {
    return (
      <div className="navbar bg-base-100 shadow-sm max-w-[1200px] mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img className='w-[60px] h-[60px]' src={navImg} alt="" />
          </a>
        </div>
        <div className="flex items-center gap-2 mr-4">
            <span className='mr-1'>{availableBalance}</span>
            <span className='mr-1'> Coin</span>
            <img className='mr-1' src={coin} alt="" />
        </div>
      </div>
    );
};

export default Navbar;