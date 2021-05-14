import React from 'react';

function Header() {
  return (
    <nav className='navbar navbar-expand-lg fixed-top navbar-dark bg-primary'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          Homepage Test
        </a>
        <ul className="navbar-nav"></ul>
      </div>
    </nav>
  );
}

export default Header;
