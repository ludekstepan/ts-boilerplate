import * as React from 'react';
import Hello from './Hello';

export default class World extends React.PureComponent<{}, {}> {
  render() {
    return <span><Hello/>World</span>;
  }
}
