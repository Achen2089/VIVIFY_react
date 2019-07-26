import React from 'react';
import Nav from './components/nav';
import Color from './components/color';
import Cycle from './components/cycle';
import { Route } from 'react-router-dom';
import background from './images/color.png';

import './design/app.scss';

export default class App extends React.Component {
  render() {
    return (
      <>
        <img src={background} alt="background" />
        <Nav />
        <Route exact path="/color" component={Color} />
        <Route exact path="/cycle" component={Cycle} />
      </>
    );
  }
}
