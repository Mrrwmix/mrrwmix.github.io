import React from 'react';

const Navbar = () => {
  return (
    <aside className='col-12 col-md-1 p-0 bg-dark' id='sidebar'>
      <nav className='navbar navbar-expand navbar-dark bg-dark flex-md-column flex-row align-items-center'>
        <div className='collapse navbar-collapse position-fixed'>
          <ul className='flex-md-column flex-row navbar-nav w-100 justify-content-around mw-100'>
            <li className='nav-item'>
              <a className='nav-link' href='#welcome'>
                Welcome
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#aboutMe'>
                About Me
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#portfolio'>
                Portfolio
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#resume'>
                Resume
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Navbar;
