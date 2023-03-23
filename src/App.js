import React from 'react';
import './App.scss';
import Home from './views/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './views/auth/Signup';
import Signin from './views/auth/Signin';
import Header from './components/header/Header';
import Publish from './views/publish/Publish';
import Profil from './views/profil/Profil';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Meta from './components/meta/Meta';

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
        <div className='container'>
          <Routes>
            <Route path='/'>
              <Route index element={[<Meta key="1"/>, <Home key="2"/>]} />
              <Route path='connexion' element={[<Meta key="1"/>, <Signin key="2"/>]} />
              <Route path='inscription' element={[<Meta key="1"/>, <Signup key="2"/>]} />
              <Route path='publier-trajet' element={[<Meta key="1"/>, <Publish key="2"/>]} />
              <Route path='mon-compte' element={[<Meta key="1"/>, <Profil key="2"/>]} />
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;