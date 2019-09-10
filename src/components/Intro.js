import React, { Fragment } from 'react';

const Intro = () => {
  return (
    <Fragment>
      <div className='invisible' id='welcome'></div>
      <div className='row bg-white'>
        <div
          id='carouselExampleSlidesOnly'
          className='carousel slide'
          data-ride='carousel'
        >
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img
                className='img-fluid mw-100 d-block w-100'
                src='./images/caminho.JPG'
                alt='caminho'
              />
              <div className='container'>
                <div className='carousel-caption text-center welcomeMessage rounded-pill bg-dark'>
                  <h1 className='p-3'>
                    Welcome to Matthew Winemiller's Digital Portfolio!
                  </h1>
                </div>
              </div>
            </div>
            <div className='carousel-item'>
              <img
                className='img-fluid mw-100 d-block w-100'
                src='./images/mountain.JPG'
                alt='mountain'
              />
              <div className='container'>
                <div className='carousel-caption text-center welcomeMessage rounded-pill bg-dark'>
                  <h1 className='p-3'>
                    Welcome to Matthew Winemiller's Digital Portfolio!
                  </h1>
                </div>
              </div>
            </div>
            <div className='carousel-item'>
              <img
                className='img-fluid mw-100 d-block w-100'
                src='./images/ocean.JPG'
                alt='ocean'
              />
              <div className='container'>
                <div className='carousel-caption text-center welcomeMessage rounded-pill bg-dark'>
                  <h1 className='p-3'>
                    Welcome to Matthew Winemiller's Digital Portfolio!
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Intro;
