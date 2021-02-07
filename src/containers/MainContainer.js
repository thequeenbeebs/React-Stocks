import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    filteredStocks: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(stockData => this.setState({stocks: stockData}))
  }

  addToPortfolio = (stock) => {
    if (!this.state.portfolio.includes(stock)){
      this.setState({portfolio: [...this.state.portfolio, stock]})
    }
  }

  removeFromPortfolio = (deletedStock) => {
    this.setState({portfolio: this.state.portfolio.filter(stock => stock.id !== deletedStock.id)})
  }

  sortStocks = (order) => {
    if(order === "alpha") {
      if (this.state.filteredStocks.length > 0) {
        this.setState({filteredStocks: this.state.filteredStocks.sort((a, b) => a.name > b.name ? 1 : -1)})
      } else {
        this.setState({stocks: this.state.stocks.sort((a, b) => a.name > b.name ? 1 : -1)})
      }
    } else if (order === "price") {
      if (this.state.filteredStocks.length > 0) {
        this.setState({filteredStocks: this.state.filteredStocks.sort((a, b) => a.price > b.price ? 1 : -1)})
      } else {
        this.setState({stocks: this.state.stocks.sort((a, b) => a.price > b.price ? 1 : -1)})
      }
    }
  }

  filterStocks = (event) => {
    this.setState({filteredStocks: this.state.stocks.filter(stock => stock.type === event.target.value)})
  }

  render() {
    let stocksToShow = ""
    this.state.filteredStocks.length > 0 ? stocksToShow = this.state.filteredStocks : stocksToShow = this.state.stocks
    return (
      <div>
        <SearchBar sortStocks={this.sortStocks} filterStocks={this.filterStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={stocksToShow} addToPortfolio={this.addToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} removeFromPortfolio={this.removeFromPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
