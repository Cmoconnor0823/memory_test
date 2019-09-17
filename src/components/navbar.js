import React from 'react';


const NavBar = ({ score, topScore, message }) => {
  return (
    <div className='container'>
      <nav className='navbar sticky-top navbar-lg navbar-light bg-light'>
        <div className='col'>
          <div className='row'>
            <a className="navbar-brand" href='/'><b className='text-secondary'>React Memory-Clicky Game</b></a>
          </div>
          <div className='col'>
            <div className='row'>
              <span className="navbar-text">{message}</span>
            </div>
          </div>
          <div className='col'>
            <div className='row'>
              <span className='text-secondary'> Your Top Score is: {topScore} | Your Current Score is: {score}</span>
            </div>
          </div>
        </div>
      </nav >
    </div >
  );
};

export default NavBar;