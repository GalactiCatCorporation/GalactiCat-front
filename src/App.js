import React from 'react';
import './App.scss';
import Home from './views/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './views/auth/Signup';
import Signin from './views/auth/Signin';
import Header from './components/header/Header';
import Publish from './views/publish/Publish';
import Profil from './views/profil/Profil';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/'>
              <Route index element={<Home />} />
              <Route path='connexion' element={<Signin />} />
              <Route path='inscription' element={<Signup />} />
              <Route path='publier-trajet' element={<Publish />} />
              <Route path='mon-compte' element={<Profil />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;