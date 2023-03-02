import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
        <Link to='/'>Accueil</Link>
        <Link to='/connexion'>Connexion</Link>
        <Link to='/inscription'>Inscription</Link>
    </>
  )
}

export default Header