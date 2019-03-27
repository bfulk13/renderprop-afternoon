import React, { Component } from 'react';
import './App.css';
import Currency from './Components/CurrencyConverter';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Render Props</h2>
        <Currency render={ (currencyData, amount) => 
          <p>
            US Dollar ${amount.toFixed(2)} - {currencyData.name}{' '}
            { currencyData.symbol }
            { (amount * currencyData.rate).toFixed(2) }
          </p> 
        } />
      </div>
    );
  }
}

export default App;
