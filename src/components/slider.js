import React from 'react';
import '../design/slider.scss';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rValue: 0,
      gValue: 0,
      bValue: 0,
      hexValue: '#FFFFFF',
    };
  }

  handleSliderRChange = event => {
    this.setState({ rValue: event.target.value });
  };

  handleSliderGChange = event => {
    this.setState({ gValue: event.target.value });
  };

  handleSliderBChange = event => {
    this.setState({ bValue: event.target.value });
  };

  handleSetColor = event => {
    let R_convert;
    let G_convert;
    let B_convert;
    let sum =
      parseInt(this.state.rValue) +
      parseInt(this.state.gValue) +
      parseInt(this.state.bValue);
    console.log(sum);
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
      hex = '#' + pad(r_hex) + pad(g_hex) + pad(b_hex);
    hex = hex.toUpperCase();
    if (R_convert === G_convert && G_convert === B_convert) {
      hex = '#' + pad('FFFFFF');
    }
    this.setState({ hexValue: hex });
    document.body.style.backgroundColor = hex;
    function pad(n) {
      return n.length < 2 ? '0' + n : n;
    }
  };

  render() {
    return (
      <>
        <div className="colorChangeContainer">
          <div className="hexCode">{this.state.hexValue}</div>
          <fieldset>
            <label className="sliderLabel">R</label>
            <input
              className="slider"
              type="range"
              min="0"
              max="7"
              step="1"
              value={this.rValue}
              onChange={this.handleSliderRChange}
              onInput={this.handleSetColor}
            />
            <output className="sliderLabel">{`${this.state.rValue}`}</output>
          </fieldset>

          <fieldset>
            <label className="sliderLabel">G</label>
            <input
              className="slider"
              type="range"
              min="0"
              max="7"
              step="1"
              value={this.gValue}
              onChange={this.handleSliderGChange}
              onInput={this.handleSetColor}
            />
            <output className="sliderLabel">{`${this.state.gValue}`}</output>
          </fieldset>

          <fieldset>
            <label className="sliderLabel">B</label>
            <input
              className="slider"
              type="range"
              min="0"
              max="7"
              step="1"
              value={this.bValue}
              onChange={this.handleSliderBChange}
              onInput={this.handleSetColor}
            />
            <output className="sliderLabel">{`${this.state.bValue}`}</output>
          </fieldset>
          <button>Submit</button>
        </div>
      </>
    );
  }
}
