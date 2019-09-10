import React from 'react';

const Contact = () => {
  return (
    <div className='col-md-12 bg-white p-0'>
      <h1
        className='text-center bg-dark text-light py-3 border-bottom'
        id='contact'
      >
        Contact
      </h1>
      <h2 className='text-center py-3'>
        Email me:{' '}
        <a href='mailto:mrrwmix@gmail.com' rel='noopener noreferrer'>
          <i className='fas fa-mail-bulk'></i> Mrrwmix@gmail.com
        </a>
      </h2>
      <h2 className='text-center py-3'>
        Call me: <i className='fas fa-mobile-alt'></i> 520 977 9253
      </h2>
    </div>
  );
};

export default Contact;
