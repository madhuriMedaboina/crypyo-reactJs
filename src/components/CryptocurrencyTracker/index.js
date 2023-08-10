// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {currencyData: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrency()
  }

  getCryptocurrency = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updateData = data.map(each => ({
      id: each.id,
      currencyLogoUrl: each.currency_logo,
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
    }))
    console.log(updateData)

    this.setState({currencyData: updateData, isLoading: false})
  }

  renderCryptocurrencyView = () => {
    const {currencyData} = this.state

    return <CryptocurrenciesList currencyData={currencyData} />
  }

  renderLoading = () => {
    ;<div data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? this.renderLoading() : this.renderCryptocurrencyView()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
