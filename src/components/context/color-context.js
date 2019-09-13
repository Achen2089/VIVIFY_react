import React from 'react';
import injectStyle from '../utils/injectStyle';
import tinyColor from 'tinycolor2';
import { breatheKeyframe, colors } from '../utils/keyframesAndColor';
const { ipcRenderer } = window.require('electron');

export const ColorContext = React.createContext();

var first, second, third, fourth;
var matrix = [
  [1, 1, 1, 1, 0, 1, 0, 1],
  [1, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 1, 1, 1],
  [0, 0, 1, 1, 1, 1, 1, 1],
  [0, 1, 0, 0, 0, 1, 1, 0],
];
//var fin_hex = "cool"
export default class ContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    // this.loadPortListener = this.loadPortListener.bind(this);

    this.state.style = {
      color: `-webkit-filter: drop-shadow(-0.75px 0px 6px white)`,
      filter: `drop-shadow(-0.75px 0px 15px white)`,
      stroke: 'white',
    };

    this.state.logoStyle = {
      color: `-webkit-filter: drop-shadow(-0.75px 0px 6px white)`,
      filter: `drop-shadow(-0.75px 0px 15px white)`,
      fill: 'white',
    };

    //routes
    this.state.color = true;
    this.state.cycle = false;

    this.state.handleColorSelect = this.handleColorSelect;
    this.state.handleCycleSelect = this.handleCycleSelect;

    //rgb values
    this.state.rValue = 0;
    this.state.gValue = 0;
    this.state.bValue = 0;

    //different shades of hex code (hexValue1 is original hex value)
    this.state.hexValue1 = '#FFFFFF';
    this.state.hexValue2 = '#FFFFFF';
    this.state.hexValue3 = '#FFFFFF';
    this.state.hexValue4 = '#FFFFFF';
    this.state.hexValue5 = '#FFFFFF';

    //rx and tx values can either be true or false
    this.state.rx = '';
    this.state.tx = '';

    //comport 1-5
    this.state.comport = '';

    //selectedMethod is the value of selected running light method
    this.state.selectedMethod = 'normal';

    //flash methods can be breeze, flash, or normal
    this.state.selectedFlash = 'normal';

    //general function to set state to the correct effect (breeze, flash, or normal)
    this.state.handleEffect = this.handleEffect;

    this.state.handleNormal = this.handleNormal;
    this.state.handleFlash = this.handleFlash;
    this.state.handleBreeze = this.handleBreeze;

    //handle comport selection
    this.state.handleComport = this.handleComport;

    //handle change on slider
    this.state.handleSliderRChange = this.handleSliderRChange;
    this.state.handleSliderGChange = this.handleSliderGChange;
    this.state.handleSliderBChange = this.handleSliderBChange;
    this.state.handleSetColor = this.handleSetColor;

    //handle select rx or tx
    this.state.handleSelectRx = this.handleSelectRx;
    this.state.handleSelectTx = this.handleSelectTx;

    //general function to set state to the correct effect (breeze, flash, or normal)
    this.state.handleLight = this.handleLight;

    //selected lightPattern
    this.state.selectedRunningLight = 'Glint1SameColor';

    //handle change on RUNNING LIGHTS buttons
    this.state.handleGlint1SameColor = this.handleGlint1SameColor;
    this.state.handleGlint1DifferentColor = this.handleGlint1DifferentColor;
    this.state.handleGlint2SameColor = this.handleGlint2SameColor;
    this.state.handleGlint2DifferentColor = this.handleGlint2DifferentColor;
    this.state.handleBreathe1SameColor = this.handleBreathe1SameColor;
    this.state.handleBreathe1DifferentColor = this.handleBreathe1DifferentColor;
    this.state.handleBreathe2SameColor = this.handleBreathe2SameColor;
    this.state.handleBreathe2DifferentColor = this.handleBreathe2DifferentColor;

    //Anthony's stuff
    this.state.read_red = this.read_red;
    this.state.read_green = this.read_green;
    this.state.read_blue = this.read_blue;
    this.state.toggle_Rx = this.toggle_Rx;
    this.state.toggle_Tx = this.toggle_Tx;
    this.state.toggle_flash = this.toggle_flash;
    this.state.submit = this.submit;
  }

  // componentDidMount() {
  //   ipcRenderer.on('ports', this.loadPortListener);
  // }

  // componentWillUnmount() {
  //   ipcRenderer.removeListener('ports', this.loadPortListener);
  // }

  // loadPortListener = event => {
  //   console.log('thisis the event', event);
  // };

  handleColorSelect = event => {
    //return to original flash state when color tab clicked
    this.setState(
      {
        color: true,
        cycle: false,
        selectedMethod: this.state.selectedFlash,
      },
      () => {
        switch (this.state.selectedMethod) {
          case 'normal':
            this.handleNormal();
            break;
          case 'breeze':
            this.handleBreeze();
            break;
          case 'flash':
            this.handleFlash();
            break;
          default:
        }
      }
    );
  };

  handleCycleSelect = event => {
    //return to original cycle state when cycle tab clicked
    this.setState(
      {
        color: false,
        cycle: true,
        selectedMethod: this.state.selectedRunningLight,
      },
      () => {
        switch (this.state.selectedMethod) {
          case 'Glint1SameColor':
            this.handleGlint1SameColor();
            break;
          case 'Glint1DifferentColor':
            this.handleGlint1DifferentColor();
            break;
          case 'Glint2SameColor':
            this.handleGlint2SameColor();
            break;
          case 'Glint2DifferentColor':
            this.handleGlint2DifferentColor();
            break;
          case 'Breathe1SameColor':
            this.handleBreathe1SameColor();
            break;
          case 'Breathe1DifferentColor':
            this.handleBreathe1DifferentColor();
            break;
          case 'Breathe2SameColor':
            this.handleBreathe2SameColor();
            break;
          case 'Breathe2DifferentColor':
            this.handleBreathe2DifferentColor();
            break;
          default:
        }
      }
    );
  };

  handleEffect = event => {
    this.setState({
      selectedMethod: event.target.value,
      selectedFlash: event.target.value,
    });
  };

  handleNormal = event => {
    this.setState({
      style: {
        color: `-webkit-filter: drop-shadow(-0.75px 0px 6px ${
          this.state.hexValue1
        })`,
        filter: `drop-shadow(-0.75px 0px 15px ${this.state.hexValue1})`,
        stroke: this.state.hexValue1,
      },
      logoStyle: {
        color: `-webkit-filter: drop-shadow(-0.75px 0px 6px ${
          this.state.hexValue1
        })`,
        filter: `drop-shadow(-0.75px 0px 15px ${this.state.hexValue1})`,
        fill: this.state.hexValue1,
      },
    });
  };

  handleFlash = event => {
    const flashFilter = `@keyframes flashFilter {
      0% {
        -webkit-filter: drop-shadow(-0.75px 0px 6px ${this.state.hexValue1});
        filter: drop-shadow(-0.75px 0px 15px ${this.state.hexValue1});
        stroke: ${this.state.hexValue1};
      }
      50% {
        -webkit-filter: drop-shadow(-0.75px 0px 6px ${this.state.hexValue3});
        filter: drop-shadow(-0.75px 0px 15px ${this.state.hexValue3});
        stroke: ${this.state.hexValue3};
      } 
      100% {
        -webkit-filter: drop-shadow(-0.75px 0px 6px ${this.state.hexValue1});
        filter: drop-shadow(-0.75px 0px 15px ${this.state.hexValue1});
        stroke: ${this.state.hexValue1};
      }
    }`;

    const logoFlashFilter = `@keyframes logoFlashFilter {
      0% {
        -webkit-filter: drop-shadow(-0.75px 0px 6px ${this.state.hexValue1});
        filter: drop-shadow(-0.75px 0px 15px ${this.state.hexValue1});
        fill: ${this.state.hexValue1};
      }
      50% {
        -webkit-filter: drop-shadow(-0.75px 0px 6px ${this.state.hexValue3});
        filter: drop-shadow(-0.75px 0px 15px ${this.state.hexValue3});
        fill: ${this.state.hexValue3};
      } 
      100% {
        -webkit-filter: drop-shadow(-0.75px 0px 6px ${this.state.hexValue1});
        filter: drop-shadow(-0.75px 0px 15px ${this.state.hexValue1});
        fill: ${this.state.hexValue1};
      }
    }`;

    this.setState({
      style: {
        animation: 'flashFilter 1s infinite',
      },
      logoStyle: {
        animation: 'logoFlashFilter 1s infinite',
      },
    });
    injectStyle(flashFilter);
    injectStyle(logoFlashFilter);
  };

  handleBreeze = event => {
    const breezeFilter = `@keyframes breezeFilter {
      0% {
        -webkit-filter: drop-shadow(-0.75px 0px 6px ${this.state.hexValue1});
        filter: drop-shadow(-0.75px 0px 15px ${this.state.hexValue1});
        stroke: ${this.state.hexValue1};
      }
      50% {
        -webkit-filter: drop-shadow(-0.75px 0px 6px ${this.state.hexValue3});
        filter: drop-shadow(-0.75px 0px 15px ${this.state.hexValue3});
        stroke: ${this.state.hexValue3};
      } 
      100% {
        -webkit-filter: drop-shadow(-0.75px 0px 6px ${this.state.hexValue1});
        filter: drop-shadow(-0.75px 0px 15px ${this.state.hexValue1});
        stroke: ${this.state.hexValue1};
      }
    }`;

    const logoBreezeFilter = `@keyframes logoBreezeFilter {
      0% {
        -webkit-filter: drop-shadow(-0.75px 0px 6px ${this.state.hexValue1});
        filter: drop-shadow(-0.75px 0px 15px ${this.state.hexValue1});
        fill: ${this.state.hexValue1};
      }
      50% {
        -webkit-filter: drop-shadow(-0.75px 0px 6px ${this.state.hexValue3});
        filter: drop-shadow(-0.75px 0px 15px ${this.state.hexValue3});
        fill: ${this.state.hexValue3};
      } 
      100% {
        -webkit-filter: drop-shadow(-0.75px 0px 6px ${this.state.hexValue1});
        filter: drop-shadow(-0.75px 0px 15px ${this.state.hexValue1});
        fill: ${this.state.hexValue1};
      }
    }`;

    this.setState({
      style: {
        animation: 'breezeFilter 7s infinite',
      },
      logoStyle: {
        animation: 'logoBreezeFilter 7s infinite',
      },
    });
    injectStyle(breezeFilter);
    injectStyle(logoBreezeFilter);
  };

  handleSliderRChange = event => {
    this.setState(
      {
        rValue: event.target.value,
      },
      () => {
        this.handleSetColor(this.state.rValue);
      }
    );
  };

  handleSliderGChange = event => {
    this.setState(
      {
        gValue: event.target.value,
      },
      () => {
        this.handleSetColor(this.state.gValue);
      }
    );
  };

  handleSliderBChange = event => {
    this.setState(
      {
        bValue: event.target.value,
      },
      () => {
        this.handleSetColor(this.state.bValue);
      }
    );
  };

  handleComport = event => {
    this.setState({ comport: event.target.value }, () => {
      ipcRenderer.send('comport', this.state.comport);
    });
  };

  handleSetColor = event => {
    let R_convert;
    let G_convert;
    let B_convert;
    let sum =
      parseInt(this.state.rValue) +
      parseInt(this.state.gValue) +
      parseInt(this.state.bValue);
    if (sum !== 0) {
      R_convert = Math.round(255 * (this.state.rValue / sum));
      G_convert = Math.round(255 * (this.state.gValue / sum));
      B_convert = Math.round(255 * (this.state.bValue / sum));
      let ratio = 255 / Math.max(R_convert, G_convert, B_convert);
      R_convert *= ratio;
      G_convert *= ratio;
      B_convert *= ratio;
    } else {
      R_convert = 0;
      G_convert = 0;
      B_convert = 0;
    }

    let r_hex = parseInt(R_convert, 10).toString(16),
      g_hex = parseInt(G_convert, 10).toString(16),
      b_hex = parseInt(B_convert, 10).toString(16),
      hex = ('#' + pad(r_hex) + pad(g_hex) + pad(b_hex)).toUpperCase();

    if (R_convert === G_convert && G_convert === B_convert) {
      hex = '#' + pad('FFFFFF');
    }

    //set different shades of color
    this.setState({ hexValue1: hex });
    this.setState({
      hexValue2: tinyColor(hex)
        .darken(25)
        .toString(),
    });
    this.setState({
      hexValue3: tinyColor(hex)
        .darken(40)
        .toString(),
    });
    this.setState({
      hexValue4: tinyColor(hex)
        .darken(75)
        .toString(),
    });
    this.setState(
      {
        hexValue5: tinyColor(hex)
          .darken(100)
          .toString(),
      },
      () => {
        switch (this.state.selectedMethod) {
          case 'normal':
            this.handleNormal();
            break;
          case 'breeze':
            this.handleBreeze();
            break;
          case 'flash':
            this.handleFlash();
            break;
          default:
        }
      }
    );

    function pad(n) {
      return n.length < 2 ? '0' + n : n;
    }
  };

  handleSelectRx = event => {
    this.setState({ rx: !this.state.rx });
  };

  handleSelectTx = event => {
    this.setState({ tx: !this.state.tx });
  };

  handleLight = event => {
    this.setState({
      selectedRunningLight: event.target.value,
      selectedMethod: event.target.value,
    });
  };

  handleGlint1SameColor = event => {
    this.setState({
      style: {
        color: `-webkit-filter: drop-shadow(-0.75px 0px 6px blue)`,
        filter: `drop-shadow(-0.75px 0px 15px blue)`,
        stroke: 'blue',
      },
    });
    let counter = 0;

    let glint1Interval = setInterval(() => {
      if (this.state.selectedMethod !== 'Glint1SameColor') {
        clearInterval(glint1Interval);
      }
      if (this.state.selectedMethod === 'Glint1SameColor') {
        this.setState(
          {
            style: {
              color: `-webkit-filter: drop-shadow(-0.75px 0px 6px ${
                colors[counter]
              })`,
              filter: `drop-shadow(-0.75px 0px 15px ${colors[counter]})`,
              stroke: colors[counter],
            },
          },
          () => {
            counter++;
            if (counter > 5) {
              counter = 0;
            }
          }
        );
      }
    }, 1000);
    clearInterval(first);
    clearInterval(second);
    clearInterval(third);
    setTimeout(function() {
      ipcRenderer.send('user-data', 'F5C580472F46F5C580472F46');
    }, 10);
    setTimeout(function() {
      ipcRenderer.send('user-data', 'F5C580472F46F5C580472F46');
    }, 20);
    setTimeout(function() {
      ipcRenderer.send('user-data', 'F5C580472F46F5C580472F46');
    }, 1030);
    first = setInterval(function() {
      ipcRenderer.send('user-data', 'F5C580472F46F5C580472F46');
    }, 1030);
    second = setInterval(function() {
      ipcRenderer.send('user-data', 'F5C580472F46F5C580472F46');
    }, 1040);
    third = setInterval(function() {
      ipcRenderer.send('user-data', 'F5C580472F46F5C580472F46');
    }, 2040);
  };

  handleGlint1DifferentColor = event => {
    this.setState({
      style: {
        color: `-webkit-filter: drop-shadow(-0.75px 0px 6px blue)`,
        filter: `drop-shadow(-0.75px 0px 15px blue)`,
        stroke: 'blue',
      },
    });
    let counter = 0;

    let glint1Interval = setInterval(() => {
      if (this.state.selectedMethod !== 'Glint1DifferentColor') {
        clearInterval(glint1Interval);
      }
      if (this.state.selectedMethod === 'Glint1DifferentColor') {
        this.setState(
          {
            style: {
              color: `-webkit-filter: drop-shadow(-0.75px 0px 6px ${
                colors[counter]
              })`,
              filter: `drop-shadow(-0.75px 0px 15px ${colors[counter]})`,
              stroke: colors[counter],
            },
          },
          () => {
            counter++;
            if (counter > 5) {
              counter = 0;
            }
          }
        );
      }
    }, 1000);
    clearInterval(first);
    clearInterval(second);
    clearInterval(third);
    setTimeout(function() {
      ipcRenderer.send('user-data', '5C580472F46F5C580472F46');
    }, 10);
    setTimeout(function() {
      ipcRenderer.send('user-data', '5C580472F46F5C580472F46');
    }, 20);
    setTimeout(function() {
      ipcRenderer.send('user-data', 'F5CB80472F46F5CB80472F46');
    }, 70);
    first = setInterval(function() {
      ipcRenderer.send('user-data', 'F5CB80472F46F5CB80472F46');
    }, 1010);
    second = setInterval(function() {
      ipcRenderer.send('user-data', 'F5CB80472F46F5CB80472F46');
    }, 1020);
  };

  handleGlint2SameColor = event => {
    this.setState({
      style: {
        color: `-webkit-filter: drop-shadow(-0.75px 0px 6px blue)`,
        filter: `drop-shadow(-0.75px 0px 15px blue)`,
        stroke: 'blue',
      },
    });
    let counter = 0;

    let glint1Interval = setInterval(() => {
      if (this.state.selectedMethod !== 'Glint2SameColor') {
        clearInterval(glint1Interval);
      }
      if (this.state.selectedMethod === 'Glint2SameColor') {
        this.setState(
          {
            style: {
              color: `-webkit-filter: drop-shadow(-0.75px 0px 6px ${
                colors[counter]
              })`,
              filter: `drop-shadow(-0.75px 0px 15px ${colors[counter]})`,
              stroke: colors[counter],
            },
          },
          () => {
            counter++;
            if (counter > 5) {
              counter = 0;
            }
          }
        );
      }
    }, 2000);
    clearInterval(first);
    clearInterval(second);
    clearInterval(third);
    setTimeout(function() {
      ipcRenderer.send('user-data', 'F5D580472F46F5D580472F46');
    }, 10);
    setTimeout(function() {
      ipcRenderer.send('user-data', 'F5D580472F46F5D580472F46');
    }, 20);
    setTimeout(function() {
      ipcRenderer.send('user-data', 'FF5D580472F46F5D580472F46');
    }, 1030);
    first = setInterval(function() {
      ipcRenderer.send('user-data', 'F5D580472F46F5D580472F46');
    }, 1030);
    second = setInterval(function() {
      ipcRenderer.send('user-data', 'F5D580472F46F5D580472F46');
    }, 1040);
    third = setInterval(function() {
      ipcRenderer.send('user-data', 'F5D580472F46F5D580472F46');
    }, 2040);
  };

  handleGlint2DifferentColor = event => {
    this.setState({
      style: {
        color: `-webkit-filter: drop-shadow(-0.75px 0px 6px blue)`,
        filter: `drop-shadow(-0.75px 0px 15px blue)`,
        stroke: 'blue',
      },
    });
    let counter = 0;

    let glint1Interval = setInterval(() => {
      if (this.state.selectedMethod !== 'Glint2DifferentColor') {
        clearInterval(glint1Interval);
      }
      if (this.state.selectedMethod === 'Glint2DifferentColor') {
        this.setState(
          {
            style: {
              color: `-webkit-filter: drop-shadow(-0.75px 0px 6px ${
                colors[counter]
              })`,
              filter: `drop-shadow(-0.75px 0px 15px ${colors[counter]})`,
              stroke: colors[counter],
            },
          },
          () => {
            counter++;
            if (counter > 5) {
              counter = 0;
            }
          }
        );
      }
    }, 2000);
    clearInterval(first);
    clearInterval(second);
    clearInterval(third);
    setTimeout(function() {
      ipcRenderer.send('user-data', 'F5D580472F46F5D580472F46');
    }, 10);
    setTimeout(function() {
      ipcRenderer.send('user-data', 'F5D580472F46F5D580472F46');
    }, 20);
    setTimeout(function() {
      ipcRenderer.send('user-data', 'F5DB80472F46');
    }, 70);
    first = setInterval(function() {
      ipcRenderer.send('user-data', 'FF5DB80472F46');
    }, 1010);
    second = setInterval(function() {
      ipcRenderer.send('user-data', 'F5DB80472F46');
    }, 1020);
  };

  handleBreathe1SameColor = event => {
    this.setState({
      style: {
        animation: 'animate 7s infinite',
      },
    });
    injectStyle(breatheKeyframe);
    clearInterval(first);
    clearInterval(second);
    clearInterval(third);
    setTimeout(function() {
      ipcRenderer.send('user-data', 'F5E780472F46F5E780472F46');
    }, 10);
    setTimeout(function() {
      ipcRenderer.send('user-data', 'F5E780472F46F5E780472F46');
    }, 20);
    setTimeout(function() {
      ipcRenderer.send('user-data', 'F5E780472F46F5E780472F46');
    }, 1030);
    first = setInterval(function() {
      ipcRenderer.send('user-data', 'F5E780472F46F5E780472F46');
    }, 1030);
    second = setInterval(function() {
      ipcRenderer.send('user-data', 'F5E780472F46F5E780472F46');
    }, 1040);
    third = setInterval(function() {
      ipcRenderer.send('user-data', 'F5E780472F46F5E780472F46');
    }, 2040);
  };

  handleBreathe1DifferentColor = event => {
    this.setState({
      style: {
        animation: 'animate 7s infinite',
      },
    });
    injectStyle(breatheKeyframe);
    clearInterval(first);
    clearInterval(second);
    clearInterval(third);
    setTimeout(function() {
      ipcRenderer.send('user-data', 'F5E780472F46F5E780472F46');
    }, 10);
    setTimeout(function() {
      ipcRenderer.send('user-data', 'F5E780472F46F5E780472F46');
    }, 20);
    setTimeout(function() {
      ipcRenderer.send('user-data', 'F5EB80472F46F5EB80472F46');
    }, 70);
    first = setInterval(function() {
      ipcRenderer.send('user-data', 'F5EB80472F46F5EB80472F46');
    }, 1010);
    second = setInterval(function() {
      ipcRenderer.send('user-data', 'F5EB80472F46F5EB80472F46');
    }, 1020);
  };

  handleBreathe2SameColor = event => {
    this.setState({
      style: {
        animation: 'animate 17s infinite',
      },
    });
    injectStyle(breatheKeyframe);
    clearInterval(first);
    clearInterval(second);
    clearInterval(third);
    setTimeout(function() {
      ipcRenderer.send('user-data', 'F5F780472F46F5F780472F46');
    }, 10);
    setTimeout(function() {
      ipcRenderer.send('user-data', 'F5F780472F46F5F780472F46');
    }, 20);
    setTimeout(function() {
      ipcRenderer.send('user-data', 'F5F780472F46F5F780472F46');
    }, 1030);
    first = setInterval(function() {
      ipcRenderer.send('user-data', 'F5F780472F46F5F780472F46');
    }, 1030);
    second = setInterval(function() {
      ipcRenderer.send('user-data', 'F5F780472F46F5F780472F46');
    }, 1040);
    third = setInterval(function() {
      ipcRenderer.send('user-data', 'F5F780472F46F5F780472F46');
    }, 2040);
  };

  handleBreathe2DifferentColor = event => {
    this.setState({
      style: {
        animation: 'animate 17s infinite',
      },
    });
    injectStyle(breatheKeyframe);
    clearInterval(first);
    clearInterval(second);
    clearInterval(third);
    setTimeout(function() {
      ipcRenderer.send('user-data', 'F5F780472F46F5F780472F46');
    }, 10);
    setTimeout(function() {
      ipcRenderer.send('user-data', 'F5F780472F46F5F780472F46');
    }, 20);
    setTimeout(function() {
      ipcRenderer.send('user-data', 'F5FB80472F46');
    }, 70);
    first = setInterval(function() {
      ipcRenderer.send('user-data', 'F5FB80472F46');
    }, 1010);
    second = setInterval(function() {
      ipcRenderer.send('user-data', 'F5FB80472F46');
    }, 1020);
  };

  read_red = event => {
    switch (this.state.rValue) {
      case '0':
        matrix[2][2] = 0;
        matrix[2][3] = 0;
        matrix[2][4] = 0;
        break;
      case '1':
        matrix[2][2] = 0;
        matrix[2][3] = 0;
        matrix[2][3] = 1;
        break;
      case '2':
        matrix[2][2] = 0;
        matrix[2][3] = 1;
        matrix[2][3] = 0;
        break;
      case '3':
        matrix[2][2] = 0;
        matrix[2][3] = 1;
        matrix[2][3] = 1;
        break;
      case '4':
        matrix[2][2] = 1;
        matrix[2][3] = 0;
        matrix[2][3] = 0;
        break;
      case '5':
        matrix[2][2] = 1;
        matrix[2][3] = 0;
        matrix[2][3] = 1;
        break;
      case '6':
        matrix[2][2] = 1;
        matrix[2][3] = 1;
        matrix[2][3] = 0;
        break;
      case '7':
        matrix[2][2] = 1;
        matrix[2][3] = 1;
        matrix[2][3] = 1;
        break;
      default:
    }
  };

  read_green = even => {
    switch (this.state.gValue) {
      case '0':
        matrix[2][5] = 0;
        matrix[2][6] = 0;
        matrix[2][7] = 0;
        break;
      case '1':
        matrix[2][5] = 0;
        matrix[2][6] = 0;
        matrix[2][7] = 1;
        break;
      case '2':
        matrix[2][5] = 0;
        matrix[2][6] = 1;
        matrix[2][7] = 0;
        break;
      case '3':
        matrix[2][5] = 0;
        matrix[2][6] = 1;
        matrix[2][7] = 1;
        break;
      case '4':
        matrix[2][5] = 1;
        matrix[2][6] = 0;
        matrix[2][7] = 0;
        break;
      case '5':
        matrix[2][5] = 1;
        matrix[2][6] = 0;
        matrix[2][7] = 1;
        break;
      case '6':
        matrix[2][5] = 1;
        matrix[2][6] = 1;
        matrix[2][7] = 0;
        break;
      case '7':
        matrix[2][5] = 1;
        matrix[2][6] = 1;
        matrix[2][7] = 1;
        break;
      default:
    }
  };
  read_blue = even => {
    switch (this.state.bValue) {
      case '0':
        // console.log('case: ' + blue )
        matrix[3][2] = 0;
        matrix[3][3] = 0;
        matrix[3][4] = 0;
        break;
      case '1':
        // console.log('case: ' + blue )
        matrix[3][2] = 0;
        matrix[3][3] = 0;
        matrix[3][4] = 1;
        break;
      case '2':
        //  console.log('case: ' + blue )
        matrix[3][2] = 0;
        matrix[3][3] = 1;
        matrix[3][4] = 0;
        break;
      case '3':
        //   console.log('case: ' + blue )
        matrix[3][2] = 0;
        matrix[3][3] = 1;
        matrix[3][4] = 1;
        break;
      case '4':
        //  console.log('case: ' + blue )
        matrix[3][2] = 1;
        matrix[3][3] = 0;
        matrix[3][4] = 0;
        break;
      case '5':
        //  console.log('case: ' + blue )
        matrix[3][2] = 1;
        matrix[3][3] = 0;
        matrix[3][4] = 1;
        break;
      case '6':
        // console.log('case: ' + blue )
        matrix[3][2] = 1;
        matrix[3][3] = 1;
        matrix[3][4] = 0;
        break;
      case '7':
        // console.log('case: ' + blue )
        matrix[3][2] = 1;
        matrix[3][3] = 1;
        matrix[3][4] = 1;
        break;
      default:
    }
  };
  toggle_flash = even => {
    if (this.state.selectedFlash === 'normal') {
      matrix[4][2] = 1;
      matrix[4][3] = 1;
    }
    if (this.state.selectedFlash === 'breeze') {
      matrix[4][2] = 0;
      matrix[4][3] = 1;
    }
    if (this.state.selectedFlash === 'flash') {
      matrix[4][2] = 0;
      matrix[4][3] = 0;
    }
  };

  toggle_Rx = even => {
    if (this.state.rx === true) {
      matrix[1][6] = 1;
    }
    if (this.state.rx === false) {
      matrix[1][6] = 0;
    }
  };

  toggle_Tx = even => {
    if (this.state.tx === true) {
      matrix[1][5] = 1;
    }
    if (this.state.tx === false) {
      matrix[1][5] = 0;
    }
  };

  sendData(input) {
    clearInterval(first);
    clearInterval(second);
    clearInterval(third);
    clearInterval(fourth);
    setTimeout(function() {
      ipcRenderer.send('user-data', input);
    }, 10);
    setTimeout(function() {
      ipcRenderer.send('user-data', input);
    }, 20);
    setTimeout(function() {
      ipcRenderer.send('user-data', input);
    }, 1030);
    first = setInterval(function() {
      ipcRenderer.send('user-data', input);
    }, 1030);
    second = setInterval(function() {
      ipcRenderer.send('user-data', input);
    }, 1040);
    third = setInterval(function() {
      ipcRenderer.send('user-data', input);
    }, 2040);
  }

  Matrix_to_Hex = even => {
    var fin_hex = '';
    for (var i = 0; i < matrix.length; i++) {
      var dec_val = 0;
      var k = 0;
      for (var j = 7; j >= 0; j--) {
        //console.log(matrix[i][k] +' -( ' + i +', '+ k + ')')
        dec_val += Math.pow(2, j) * matrix[i][k];
        k++;
      }
      //console.log(dec_val.toString(16).toUpperCase())
      fin_hex += dec_val.toString(16).toUpperCase();
    }
    console.log(fin_hex);
    this.sendData(fin_hex);
  };

  submit = even => {
    this.read_red();
    this.read_green();
    this.read_blue();
    this.toggle_Rx();
    this.toggle_Tx();
    this.Matrix_to_Hex();
    this.toggle_flash();
  };

  render() {
    return (
      <ColorContext.Provider value={this.state}>
        {this.props.children}
      </ColorContext.Provider>
    );
  }
}
