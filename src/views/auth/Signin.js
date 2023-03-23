import React from 'react'
import { TextInput, PasswordInput, Button } from '@mantine/core';
import '../../index.scss';
import './Auth.scss';

function Signin() {
  return (
    <div id='Auth'>
      <h1>Se connecter</h1>
      <p>Vous n'avez pas encore de compte ? <a href="/inscription">Créer un compte</a></p>
      <div className='content'>
        <form>
          <TextInput
            placeholder="Pseudonyme"
            label="Pseudonyme"
            withAsterisk
          />
          <PasswordInput
            required
            placeholder="Mot de passe"
            label="Mot de passe"
            className='password'
            withAsterisk
          />
          <div className='submit-button'>
            <Button className='btn btn-primary' type='submit'>Connexion</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin