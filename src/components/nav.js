import React from 'react';
import { Link } from 'react-router-dom';
import '../design/nav.scss';
import logo from '../images/logo.png';

export default class Nav extends React.Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <Link
              to="/color"
              style={{
                display: 'block',
                textDecoration: 'none',
                color: 'white',
                letterSpacing: '2px',
              }}
            >
              Color
            </Link>
          </li>
          <li>
            <Link
              to="/cycle"
              style={{
                display: 'block',
                textDecoration: 'none',
                color: 'white',
                letterSpacing: '2px',
              }}
            >
              Cycle
            </Link>
          </li>
        </ul>
      </>
    );
  }
}
