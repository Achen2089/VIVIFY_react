import React from 'react';
import { ColorContext } from './context/color-context';
import '../design/cycle.scss';

export default class Cycle extends React.Component {
  static contextType = ColorContext;
  render() {
    return (
      <div id="cycleContainer">
        <div className="cycle">
          <div className="cycleOptions">
            <div className="cycleDescription">
              <h2>GLINT 1</h2>
              <p className="cycleParagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div className="options">
              <div className="radioButton">
                <input
                  class="cycleInput"
                  type="radio"
                  value="Glint1SameColor"
                  id="Glint1SameColor"
                  onClick={this.context.handleLight}
                  onChange={this.context.handleGlint1SameColor}
                  checked={
                    this.context.selectedRunningLight === 'Glint1SameColor'
                  }
                />
                <label for="Glint1SameColor" class="cycleLabel">
                  Same Color
                </label>
              </div>
              <div className="radioButton">
                <input
                  class="cycleInput"
                  type="radio"
                  value="Glint1DifferentColor"
                  id="Glint1DifferentColor"
                  onClick={this.context.handleLight}
                  onChange={this.context.handleGlint1DifferentColor}
                  checked={
                    this.context.selectedRunningLight === 'Glint1DifferentColor'
                  }
                />
                <label for="Glint1DifferentColor" class="cycleLabel">
                  Different Color
                </label>
              </div>
            </div>
          </div>

          {/* <hr /> */}

          <div className="cycleOptions">
            <div className="cycleDescription">
              <h2>GLINT 2</h2>
              <p className="cycleParagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div className="radioButton">
              <input
                class="cycleInput"
                type="radio"
                value="Glint2SameColor"
                id="Glint2SameColor"
                onClick={this.context.handleLight}
                onChange={this.context.handleGlint2SameColor}
                checked={
                  this.context.selectedRunningLight === 'Glint2SameColor'
                }
              />
              <label for="Glint2SameColor" class="cycleLabel">
                Same Color
              </label>
            </div>
            <div className="radioButton">
              <input
                class="cycleInput"
                type="radio"
                value="Glint2DifferentColor"
                id="Glint2DifferentColor"
                onClick={this.context.handleLight}
                onChange={this.context.handleGlint2DifferentColor}
                checked={
                  this.context.selectedRunningLight === 'Glint2DifferentColor'
                }
              />
              <label for="Glint2DifferentColor" class="cycleLabel">
                Different Color
              </label>
            </div>
          </div>

          {/* <hr /> */}

          <div className="cycleOptions">
            <div className="cycleDescription">
              <h2>BREATHE 1</h2>
              <p className="cycleParagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div className="radioButton">
              <input
                class="cycleInput"
                type="radio"
                value="Breathe1SameColor"
                id="Breathe1SameColor"
                onClick={this.context.handleLight}
                onChange={this.context.handleBreathe1SameColor}
                checked={
                  this.context.selectedRunningLight === 'Breathe1SameColor'
                }
              />
              <label for="Breathe1SameColor" class="cycleLabel">
                Same Color
              </label>
            </div>
            <div className="radioButton">
              <input
                class="cycleInput"
                type="radio"
                value="Breathe1DifferentColor"
                id="Breathe1DifferentColor"
                onClick={this.context.handleLight}
                onChange={this.context.handleBreathe1DifferentColor}
                checked={
                  this.context.selectedRunningLight === 'Breathe1DifferentColor'
                }
              />
              <label for="Breathe1DifferentColor" class="cycleLabel">
                Different Color
              </label>
            </div>
          </div>

          {/* <hr /> */}

          <div className="cycleOptions">
            <div className="cycleDescription">
              <h2>BREATHE 2</h2>
              <p className="cycleParagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div className="radioButton">
              <input
                class="cycleInput"
                type="radio"
                value="Breathe2SameColor"
                id="Breathe2SameColor"
                onClick={this.context.handleLight}
                onChange={this.context.handleBreathe2SameColor}
                checked={
                  this.context.selectedRunningLight === 'Breathe2SameColor'
                }
              />
              <label for="Breathe2SameColor" class="cycleLabel">
                Same Color
              </label>
            </div>
            <div className="radioButton">
              <input
                class="cycleInput"
                type="radio"
                value="Breathe2DifferentColor"
                id="Breathe2DifferentColor"
                onClick={this.context.handleLight}
                onChange={this.context.handleBreathe2DifferentColor}
                checked={
                  this.context.selectedRunningLight === 'Breathe2DifferentColor'
                }
              />
              <label for="Breathe2DifferentColor" class="cycleLabel">
                Different Color
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
