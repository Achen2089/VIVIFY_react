import React from 'react';
import { Link } from 'react-router-dom';
import '../design/nav.scss';
import colorBackground from '../images/color.png';
import cycleBackground from '../images/cycle.png';

import logo from '../images/vivify-logo.png';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: '',
    };
  }

  handleToColorBackgroundChange = event => {
    this.setState({ route: 'color' });
  };

  handleToCycleBackgroundChange = event => {
    this.setState({ route: 'cycle' });
  };

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
              onClick={this.handleToColorBackgroundChange}
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
              onClick={this.handleToCycleBackgroundChange}
            >
              Cycle
            </Link>
          </li>
        </ul>
      </>
    );
  }
}
