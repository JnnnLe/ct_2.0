/*
Should be stateless? -Famous words, Max
*/

import React, { Component } from 'react';

class CoinLookUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: this.props.coins
    }
  }

  render() {
    return (
      <div>
      <p>Hi There!</p>
      </div>
    )
  }
}

export default CoinLookUp;