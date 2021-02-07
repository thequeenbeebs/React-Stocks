import React from 'react'

const Stock = (props) => (
  <div>

    <div className="card" onClick={() => props.portfolioChange(props.stockData)}>
      <div className="card-body">
        <h5 className="card-title">{props.stockData.name}</h5>
        <p className="card-text">{props.stockData.ticker + ': ' + props.stockData.price}</p>
      </div>
    </div>


  </div>
);

export default Stock
