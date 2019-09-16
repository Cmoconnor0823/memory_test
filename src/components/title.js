import React from 'react';

const Title = ({ score, topScore }) => {
  return (
    <div className= 'center-align'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h3 className='header col-lg-12 light'>Don't click on any picture more than once!</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Title;
