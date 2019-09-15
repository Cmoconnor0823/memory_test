import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='col'>
          <div className='row'>
            <a className='text-danger' href='https://github.com/Cmoconnor0823/memory_test' target='_blank'>Find me on Git Hub!</a>
            <div className='col'>
              <div className='row'>
                <span className='text-danger'>© 2019 Caitlin O'Connor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;