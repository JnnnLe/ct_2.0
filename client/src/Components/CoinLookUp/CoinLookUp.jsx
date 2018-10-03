/*
Should be stateless? -Famous words, Max
*/

import React, { Component } from 'react';
import TradingViewWidget from 'react-tradingview-widget';

class CoinLookUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: this.props.coins,
      coinInput: 'DOGEUSD'
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    event.preventDefault();
    this.setState({coinInput: event.target.value.toUpperCase() + 'USD'});  
  }
  
  onSubmit(event) {
    event.preventDefault();
  };

  render() {
    return (
      <div>
      <h1>Hello World!</h1>
      <form onSubmit={this.onSubmit}>
      <input type="text" placeholder="Enter a coin" onChange={this.onChange} />
      </form>
        <TradingViewWidget symbol={this.state.coinInput} style="3" height="375" width="1000"/>
      </div>
    )
  }
}

export default CoinLookUp;