import React from 'react';
import './Search.scss';
import SearchBar from '../../components/searchbar/SearchBar';

function Search() {
  return (
    <div id="Search">
      <h1>Rechercher un trajet</h1>
      <SearchBar/>
    </div>
  )
}

export default Search