import React, { Component } from 'react';
import axios from 'axios';
import CoinLookUp from './Components/CoinLookUp/CoinLookUp';

class App extends Component {
  constructor() {
    super()
    this.state = {
      coins: null
    }

    this.callAPI = this.callAPI.bind(this); 
  }

  componentDidMount() {
    this.callAPI();
  }

  callAPI() {
    axios.get('https://api.coinranking.com/v1/public/coins')
    .then(
      (response) => {
        this.setState({
          coins: response.data.data.coins
        })
    })
  }    

  render() {
    return (
      <div>
        <CoinLookUp
          coins={this.state.coins}
        />
      </div>
    );
  }
}
export default App;
