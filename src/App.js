import React from 'react';
import Background from './components/background';
import Nav from './components/nav';
import Color from './components/color';
import Cycle from './components/cycle';
import { Route } from 'react-router-dom';

import ColorContext from './components/context/color-context';

import './design/app.scss';

export default class App extends React.Component {
  static contextType = ColorContext;
  render() {
    return (
      <ColorContext>
        <Background />
        <div className="background">
          <Nav />
          <Route exact path="/" component={Color} />
          <Route exact path="/cycle" component={Cycle} />
        </div>
      </ColorContext>
    );
  }
}
