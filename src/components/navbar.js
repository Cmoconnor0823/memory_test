import React from 'react';

const NavBar = ({ score, topScore, message }) => {
  return (
    <div className='container'>
      <nav>
        <div className='col'>
          <div className='row'>
            <a href='/'><b className='text-secondary'>React Memory-Clicky Game</b></a>
          </div>
          <div className='col'>
            <div className='row'>
              <span>{message}</span>
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