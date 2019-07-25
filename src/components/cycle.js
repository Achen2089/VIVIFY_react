import React from 'react';
import '../design/cycle.scss';

export default class Cycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      checked: '',
    };
  }
  handleOptionChange = event => {
    this.setState({ selectedMethod: event.target.value, checked: true });
  };

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
            <div className="radioButton">
              <input
                type="radio"
                value="glint1SameColor"
                id="glint1SameColor"
                onChange={this.handleOptionChange}
                checked={this.state.selectedMethod === 'glint1SameColor'}
              />
              <label for="glint1SameColor" class="cycleLabel">
                Same Color
              </label>
            </div>
            <div className="radioButton">
              <input
                type="radio"
                value="glint1DifferentColor"
                id="glint1DifferentColor"
                onChange={this.handleOptionChange}
                checked={this.state.selectedMethod === 'glint1DifferentColor'}
              />
              <label for="glint1DifferentColor" class="cycleLabel">
                Different Color
              </label>
            </div>
          </div>

          <hr />

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
                type="radio"
                value="glint2SameColor"
                id="glint2SameColor"
                onChange={this.handleOptionChange}
                checked={this.state.selectedMethod === 'glint2SameColor'}
              />
              <label for="glint2SameColor" class="cycleLabel">
                Same Color
              </label>
            </div>
            <div className="radioButton">
              <input
                type="radio"
                value="glint2DifferentColor"
                id="glint2DifferentColor"
                onChange={this.handleOptionChange}
                checked={this.state.selectedMethod === 'glint2DifferentColor'}
              />
              <label for="glint2DifferentColor" class="cycleLabel">
                Different Color
              </label>
            </div>
          </div>

          <hr />

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
                type="radio"
                value="breathe1SameColor"
                id="breathe1SameColor"
                onChange={this.handleOptionChange}
                checked={this.state.selectedMethod === 'breathe1SameColor'}
              />
              <label for="breathe1SameColor" class="cycleLabel">
                Same Color
              </label>
            </div>
            <div className="radioButton">
              <input
                type="radio"
                value="breathe1DifferentColor"
                id="breathe1DifferentColor"
                onChange={this.handleOptionChange}
                checked={this.state.selectedMethod === 'breathe1DifferentColor'}
              />
              <label for="breathe1DifferentColor" class="cycleLabel">
                Different Color
              </label>
            </div>
          </div>

          <hr />

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
                type="radio"
                value="breathe2SameColor"
                id="breathe2SameColor"
                onChange={this.handleOptionChange}
                checked={this.state.selectedMethod === 'breathe2SameColor'}
              />
              <label for="breathe2SameColor" class="cycleLabel">
                Same Color
              </label>
            </div>
            <div className="radioButton">
              <input
                type="radio"
                value="breathe2DifferentColor"
                id="breathe2DifferentColor"
                onChange={this.handleOptionChange}
                checked={this.state.selectedMethod === 'breathe2DifferentColor'}
              />
              <label for="breathe2DifferentColor" class="cycleLabel">
                Different Color
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
