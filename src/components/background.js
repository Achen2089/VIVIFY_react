import React from 'react';
import '../design/background.scss';

import { ColorContext } from './context/color-context';

export default class Background extends React.Component {
  static contextType = ColorContext;
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <svg
          id="gx-logo"
          class="tronFilter"
          data-name="gx-logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1578.66 913.06"
          style={this.context.style}
        >
          <polygon
            class="cls-1"
            points="416.76 13 735.52 13 801.24 124.56 858.75 13 1200.51 13 1561.93 435.68 1205.44 900.06 416.76 900.06 17.49 456.53 416.76 13"
          />
          <path
            class="cls-1"
            d="M478.19,111.26"
            transform="translate(-151.27 -125.29)"
          />
          <polyline
            class="cls-2"
            points="416.76 13 454.82 90.52 113.2 454.1 352.42 715.48"
          />
          <polyline
            class="cls-2"
            points="1200.51 13 1156.33 88.74 1470.23 440.37 1263.37 700.01"
          />
          <polygon
            class="cls-3"
            points="743.87 98.49 803.67 230.35 858.62 94.21 803.67 175.81 743.87 98.49"
          />
        </svg>
      </>
    );
  }
}
