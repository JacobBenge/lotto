import React, { Component } from 'react';
import './Lottery.css';
import Ball from './Ball';

// stateful
class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40
  }
  constructor(props) {
    super(props);
    this.state = {
      // preload empty balls with an empty array
      nums: Array.from({ length: this.props.numBalls })
    };
    // bind method context
    this.handleClick = this.handleClick.bind(this);
  }

  generate() {
    // Safely update the state
    this.setState(curState => ({
      // build a new array from scratch then reset state with the new array
      nums: curState.nums.map(n =>
        // pick random number between 1 and 40
        Math.floor(Math.random() * this.props.maxNum) + 1
      )
    }));
  }

  // handleClick is a naming convention. Have it trigger the correct method.
  handleClick() {
    this.generate();
  }
  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(n => <Ball num={n} />)}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }
}

export default Lottery;