import * as React from 'react';
import Hello from './Hello';

export default class World extends React.Component<{}, {}> {
  render() {
    return <span><Hello/>World</span>;
  }
}
