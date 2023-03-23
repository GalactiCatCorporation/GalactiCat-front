import React from 'react'
import { Input, PasswordInput, Button } from '@mantine/core';
import '../../index.scss';
import './Auth.scss';

function Signup() {
  return (
    <div id="Auth">
      <h1>S'inscrire</h1>
      <p>Vous avez déjà un compte ? <a href="/connexion">Se connecter</a></p>
      <div className='content'>
        <form>
          <Input.Wrapper
            label="Pseudonyme"
            required
          >
            <Input
              placeholder="Pseudonyme"
            />
          </Input.Wrapper>
          <PasswordInput
            required
            placeholder="Mot de passe"
            label="Mot de passe"
            className='password'
            withAsterisk
          />
          <PasswordInput
            required
            placeholder="Confirmation mot de passe"
            label="Confirmation mot de passe"
            className='password'
            withAsterisk
          />
          <div className='submit-button'>
            <Button className='btn btn-primary' type='submit'>Inscription</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup