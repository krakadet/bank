// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

import './nav-bar.css'

function NavBar() {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/table-block'}>Table</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
