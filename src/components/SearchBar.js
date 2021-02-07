import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" name="sort" value="sort" checked={null} onChange={() => props.sortStocks('alpha')}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" name="sort" value="sort" checked={null} onChange={() => props.sortStocks('price')}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(event) =>props.filterStocks(event)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
