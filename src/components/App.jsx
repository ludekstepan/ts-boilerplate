import React from 'react';
import Counter from './Counter';
import World from './World';

export default class App extends React.Component {
  render() {
    return <h1>Hello <World/>! <Counter/></h1>;
  }
}
