import React from 'react';
import './Home.scss';
import SearchBar from '../../components/searchbar/SearchBar';

function Home() {
  return (
    <div id="Home">
      <h1>Voyagez à travers la galaxie<br/>entre catstronautes</h1>
      <SearchBar/>
    </div>
  )
}

export default Home