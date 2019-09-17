import React from 'react';

const Title = ({ score, topScore }) => {
  return (
    <div className= 'center-align'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h4 className='header col-lg-12 light text-secondary'>Try not to click on any villager more than once!</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Title;
