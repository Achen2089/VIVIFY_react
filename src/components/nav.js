import React from 'react';
import { Link } from 'react-router-dom';
import '../design/nav.scss';
// import logo from '../images/vivify-logo.png';

import { ColorContext } from './context/color-context';

export default class Nav extends React.Component {
  static contextType = ColorContext;
  constructor(props) {
    super(props);
    this.state = {
      colorRouteColor: 'white',
      cycleRouteColor: 'gray',
    };
  }

  handleColorChange = event => {
    this.setState({ colorRouteColor: 'white' });
    this.setState({ cycleRouteColor: 'gray' });
    this.context.handleColorSelect();
  };

  handleCycleChange = event => {
    this.setState({ cycleRouteColor: 'white' });
    this.setState({ colorRouteColor: 'gray' });
    this.context.handleCycleSelect();
  };

  render() {
    return (
      <>
        <svg
          id="logo"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 245.17 96.14"
          style={this.context.logoStyle}
        >
          <circle class="cls-1" cx="4" cy="4" r="4" />
          <circle class="cls-1" cx="4" cy="28" r="4" />
          <circle class="cls-1" cx="4" cy="50" r="4" />
          <circle class="cls-1" cx="21" cy="4" r="4" />
          <circle class="cls-1" cx="21" cy="28" r="4" />
          <circle class="cls-1" cx="30" cy="16" r="4" />
          <circle class="cls-1" cx="48" cy="16" r="4" />
          <circle class="cls-1" cx="30" cy="39" r="4" />
          <circle class="cls-1" cx="56" cy="51" r="4" />
          <circle class="cls-1" cx="21" cy="62" r="4" />
          <circle class="cls-1" cx="39" cy="4" r="4" />
          <circle class="cls-1" cx="39" cy="28" r="4" />
          <circle class="cls-1" cx="20.9" cy="50.09" r="4" />
          <rect class="cls-1" y="58" width="14" height="9" rx="4.5" />
          <circle class="cls-1" cx="49" cy="39" r="4" />
          <rect class="cls-1" x="47" y="24" width="13" height="8" rx="4" />
          <rect class="cls-1" x="28" y="46" width="16" height="8" rx="4" />
          <rect class="cls-1" x="28" y="58" width="16" height="8" rx="4" />
          <rect class="cls-1" x="46" y="58" width="14" height="8" rx="4" />
          <rect class="cls-1" x="47" width="13" height="8" rx="4" />
          <text x="-210" y="-111" />
        </svg>
        <h2 id="vivify">VIVIFY</h2>
        {/* <svg
          id="logoPart2"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 225.92 81.31"
        >
          <path
            class="cls-1"
            d="M309.22,174.1l-17-48.27H303.4l7.18,22.3c2.18,6.74,3.84,12.46,4.95,17.4h.14c1-4.51,2.87-10.41,5.17-17.25l7.53-22.45H339L321.53,174.1Z"
            transform="translate(-292.19 -125.83)"
          />
          <path
            class="cls-1"
            d="M355.29,125.83V174.1H344.86V125.83Z"
            transform="translate(-292.19 -125.83)"
          />
          <path
            class="cls-1"
            d="M378.38,174.1l-17-48.27h11.21l7.18,22.3c2.17,6.74,3.84,12.46,4.95,17.4h.14c1-4.51,2.87-10.41,5.17-17.25l7.53-22.45h10.64L390.69,174.1Z"
            transform="translate(-292.19 -125.83)"
          />
          <path
            class="cls-1"
            d="M424.45,125.83V174.1H414V125.83Z"
            transform="translate(-292.19 -125.83)"
          />
          <path
            class="cls-1"
            d="M436,125.83h33.69v8.56h-23.5v11.82h22v8.56h-22V174.1H436Z"
            transform="translate(-292.19 -125.83)"
          />
          <path
            class="cls-1"
            d="M490.42,174.1V157a2.7,2.7,0,0,0-.41-1.55l-16.63-29.66h11.8c3.73,7.28,8.57,17,11,22.21,2.1-5.06,7.39-15.22,11-22.21h10.92l-16.85,29.51a2.29,2.29,0,0,0-.4,1.54V174.1Z"
            transform="translate(-292.19 -125.83)"
          />
          <text x="-292.19" y="-125.83" />
        </svg> */}
        <ul>
          <label for="select">
            <select
              id="select"
              name="select"
              onChange={this.context.handleComport}
            >
              <option value="" selected disabled hidden>
                COM Port
              </option>
              <option value="comport1">COM 1</option>
              <option value="comport2">COM 2</option>
              <option value="comport3">COM 3</option>
              <option value="comport4">COM 4</option>
              <option value="comport5">COM 5</option>
            </select>
          </label>
          <li className="route">
            <Link
              to="/"
              style={{
                display: 'block',
                textDecoration: 'none',
                letterSpacing: '4px',
                color: `${this.state.colorRouteColor}`,
              }}
              activeStyle={{ color: 'red' }}
              onClick={this.handleColorChange}
            >
              Color
            </Link>
          </li>
          <li className="route">
            <Link
              to="/cycle"
              style={{
                display: 'block',
                textDecoration: 'none',
                letterSpacing: '2px',
                color: `${this.state.cycleRouteColor}`,
              }}
              onClick={this.handleCycleChange}
            >
              Cycle
            </Link>
          </li>
        </ul>
      </>
    );
  }
}
