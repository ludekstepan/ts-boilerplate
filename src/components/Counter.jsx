import React from 'react';
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  counter: state,
});
const mapDispatchToProps = (dispatch) => ({
  increment() {
    dispatch({type: 'INCREMENT'});
  }
});

export class Counter extends React.Component {
  render() {
    return <span onClick={this.props.increment}>{this.props.counter}</span>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
