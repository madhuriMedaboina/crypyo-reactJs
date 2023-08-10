// Write your JS code here

import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderHeader = () => {
    ;<nav className="list-header">
      <p className="list-heading">Coin Type</p>
      <div className="list-type">
        <li className="usd-heading">USD</li>
        <li className="usd-heading">EURO</li>
      </div>
    </nav>
  }

  renderCryptocurrenceisView = () => {
    const {currencyData} = this.props
    return (
      <div className="crypto-list-container">
        {this.renderHeader()}
        <ul className="cryptocurrencies-list">
          {currencyData.map(eachItem => (
            <CryptocurrencyItem
              key={eachItem.id}
              cryptocurrenciesDetails={eachItem}
            />
          ))}
        </ul>
        {this.renderCryptocurrenceisView()}
      </div>
    )
  }

  render() {
    return (
      <div className="cryptocurrency-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="img"
        />
      </div>
    )
  }
}
export default CryptocurrenciesList
