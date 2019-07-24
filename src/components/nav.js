import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/color">Color</Link>
        </li>
        <li>
          <Link to="/cycle">Cycle</Link>
        </li>
      </ul>
    );
  }
}
