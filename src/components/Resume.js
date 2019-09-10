import React from 'react';

const Resume = () => {
  return (
    <div className='col-md-12 bg-white p-0'>
      <h1
        className='text-center bg-dark text-light py-3 border-bottom'
        id='resume'
      >
        Resume
      </h1>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe
          className='embed-responsive-item'
          src='./images/MRRW_Resume.pdf'
          title='resume'
          data-aos='flip-up'
        ></iframe>
      </div>
      <h2 className='text-center py-3 resume'>
        Download Resume:{' '}
        <a
          href='https://drive.google.com/open?id=1hTwKkxL0SqRitYTcH5ICJHIVp_xZ5NVH'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fas fa-download'></i>
        </a>
      </h2>
    </div>
  );
};

export default Resume;
