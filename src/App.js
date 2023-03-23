import React from 'react';
import './App.scss';
import Home from './views/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './views/auth/Signup';
import Signin from './views/auth/Signin';
import Header from './components/header/Header';
import Publish from './views/publish/Publish';
import Profil from './views/profil/Profil';
import { Helmet } from "react-helmet";
import Meta from './components/meta/Meta';

function App() {
  return (
    <div className='App'>
      <Router>
        <Helmet>
          <title>GalactiCat - Le Covovoyage spatial vers l'infini et au-delà.</title>
          <meta name="description" content="GalactiCat est une application qui permet à des catstronautes de proposer des places dans leur vaisseaux lors de
          leurs trajets interplanétaires."/>
        </Helmet>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/'>
              <Route index element={[<Meta />, <Home />]} />
              <Route path='connexion' element={[<Meta />, <Signin />]} />
              <Route path='inscription' element={[<Meta />, <Signup />]} />
              <Route path='publier-trajet' element={[<Meta />, <Publish />]} />
              <Route path='mon-compte' element={[<Meta />, <Profil />]} />
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;