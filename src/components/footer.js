import React from 'react';

const Footer = () => {
  return (
    <footer className='page-footer m-3 p-2'>
      <div className='container container-fluid text-center'>
        <div className='col'>
          <div className='row'>
            <a className='text-primary' href='https://github.com/Cmoconnor0823/memory_test' target='_blank' rel="noopener noreferrer">Find me on Git Hub!</a>
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