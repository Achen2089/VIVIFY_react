import React from 'react';
import { ColorContext } from './context/color-context';
import '../design/color.scss';

export default class Color extends React.Component {
  static contextType = ColorContext;
  render() {
    return (
      <>
        <div className="colorChangeContainer">
          {/* <div
            className="hexCode"
            style={{ color: `${this.context.hexValue1}` }}
          >
            {this.context.hexValue1}{' '}
          </div> */}
          <div id="toggleOptions">
            <div id="txAndRx">
              <div id="normal" class="labelAndToggle">
                <h1 className="labelForToggle">Normal</h1>
                <input
                  type="checkbox"
                  id="toggleFlash1"
                  className="checkbox"
                  value="normal"
                  checked={this.context.selectedMethod === 'normal'}
                  onChange={this.context.handleNormal}
                  onClick={this.context.handleEffect}
                />
                <label for="toggleFlash1" class="switch" />
              </div>
              <div className="labelAndToggle">
                <h1 className="labelForToggle">Flash</h1>
                <input
                  type="checkbox"
                  id="toggleFlash2"
                  className="checkbox"
                  value="flash"
                  checked={this.context.selectedMethod === 'flash'}
                  onChange={this.context.handleFlash}
                  onClick={this.context.handleEffect}
                />
                <label for="toggleFlash2" class="switch" />
              </div>
              <div className="labelAndToggle">
                <h1 className="labelForToggle">Breeze</h1>
                <input
                  type="checkbox"
                  id="toggleFlash3"
                  className="checkbox"
                  value="breeze"
                  checked={this.context.selectedMethod === 'breeze'}
                  onChange={this.context.handleBreeze}
                  onClick={this.context.handleEffect}
                />
                <label for="toggleFlash3" class="switch" />
              </div>
            </div>
          </div>
          <div className="fieldSet">
            <div>
              <label className="sliderLabel">R</label>
            </div>
            <div>
              <input
                className="slider"
                type="range"
                min="0"
                max="7"
                step="1"
                value={this.context.rValue}
                onChange={this.context.handleSliderRChange}
              />
            </div>
            <div>
              <label className="sliderLabel">{`${this.context.rValue}`}</label>
            </div>
          </div>

          <div className="fieldSet">
            <div>
              <label className="sliderLabel">G</label>
            </div>
            <div>
              <input
                className="slider"
                type="range"
                min="0"
                max="7"
                step="1"
                value={this.context.gValue}
                onChange={this.context.handleSliderGChange}
              />
            </div>
            <div>
              <label className="sliderLabel">{`${this.context.gValue}`}</label>
            </div>
          </div>

          <div className="fieldSet" id="lastFieldset">
            <div>
              <label className="sliderLabel">B</label>
            </div>
            <div>
              <input
                className="slider"
                type="range"
                min="0"
                max="7"
                step="1"
                value={this.context.bValue}
                onChange={this.context.handleSliderBChange}
              />
            </div>
            <div>
              <label className="sliderLabel">{`${this.context.bValue}`}</label>
            </div>
          </div>
          <div id="toggleOptions">
            <div id="txAndRx">
              <div id="tx" class="labelAndToggle">
                <h1 className="labelForToggle">tx</h1>
                <input
                  type="checkbox"
                  id="toggle1"
                  className="checkbox"
                  value="tx"
                  onChange={this.context.handleSelectTx}
                />
                <label for="toggle1" class="switch" />
              </div>
              <div className="labelAndToggle">
                <h1 className="labelForToggle">rx</h1>
                <input
                  type="checkbox"
                  id="toggle2"
                  className="checkbox"
                  value="rx"
                  onChange={this.context.handleSelectRx}
                />
                <label for="toggle2" class="switch" />
              </div>
            </div>
          </div>
          {/* SUBMIT BUTTON*/}
          <button onClick={this.context.submit}>Submit</button>
        </div>
      </>
    );
  }
}
