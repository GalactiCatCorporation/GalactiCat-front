import React from 'react';
import './App.scss';
import Home from './views/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './views/auth/Signup';
import Signin from './views/auth/Signin';
import Header from './components/header/Header';
import Publish from './views/publish/Publish';
import Profil from './views/profil/Profil';
import Search from './views/search/Search';
import RideDetails from './views/rideDetails/RideDetails';
import MyRides from './views/my-rides/MyRides';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Meta from './components/meta/Meta';
import NotFound from './views/404';
import logo from './assets/img/logo-galacticat.png';
import { Link } from "react-router-dom";
import { Image } from '@mantine/core';

function App() {
  return (
    <div className='App'>
      <Router>
        <HelmetProvider>
          <Helmet>
            <title>GalactiCat - Le Cocovoyage spatial vers l'infini et au-delà.</title>
            <meta name="description" content="GalactiCat est une application qui permet à des catstronautes de proposer des places dans leur vaisseaux lors de
          leurs trajets interplanétaires."/>
          </Helmet>
        </HelmetProvider>
        <Header />
        <div className='header-logo-mobile'>
          <Link to='/'>
            <Image maw={240} mx="auto" radius="md" src={logo} alt="GalactiCat logo" />
          </Link>
        </div>
        <div className='container'>
          <Routes>
            <Route path='/'>
              <Route index element={[<Meta key="1"/>, <Home key="2"/>]} />
              <Route path='connexion' element={[<Meta key="1"/>, <Signin key="2"/>]} />
              <Route path='inscription' element={[<Meta key="1"/>, <Signup key="2"/>]} />
              <Route path='publier-trajet' element={[<Meta key="1"/>, <Publish key="2"/>]} />
              <Route path='rechercher-trajet' element={[<Meta key="1"/>, <Search key="2"/>]} />
              <Route path='mon-compte' element={[<Meta key="1"/>, <Profil key="2"/>]} />
              <Route path='mes-trajets' element={[<Meta key="1"/>, <MyRides key="2"/>]} />
              <Route path='trajet/:id' element={[<Meta key="1"/>, <RideDetails key="2"/>]} />
              <Route path='*' element={<NotFound />}/>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;