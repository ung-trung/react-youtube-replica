import React, { useState } from 'react';

const SearchBar = props => {
  const [searchText, setSearchText] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    props.onTermSubmit(searchText);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label htmlFor="searchBar">Youtube Search</label>
          <input
            type="text"
            placeholder="Seach something..."
            value={searchText}
            onChange={e => {
              setSearchText(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
