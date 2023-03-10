import React from 'react'
import { Input, PasswordInput, Button } from '@mantine/core';
import { useId } from '@mantine/hooks';
import { IMaskInput } from 'react-imask';
import '../../index.scss';
import './Auth.scss';

function Signin() {
  const id = useId();
  return (
    <>
      <h1>Se connecter</h1>
      <p>Vous n'avez pas encore de compte ? <a href="/inscription">Créer un compte</a></p>
      <div className='content'>
        <form>
          <Input.Wrapper id={id} label="Pseudonyme" required maw={320} mx="auto">
            <Input
              component={IMaskInput}
              id={id}
              placeholder="Pseudonyme"
            />
          </Input.Wrapper>
          <PasswordInput required maw={320} mx="auto"
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
    </>
  );
}

export default Signin