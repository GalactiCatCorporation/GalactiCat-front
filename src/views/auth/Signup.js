import React from 'react'
import { Input, PasswordInput, Button } from '@mantine/core';
import { useId } from '@mantine/hooks';
import { IMaskInput } from 'react-imask';
import '../../index.scss';
import './Auth.scss';

function Signup() {
  const id = useId();
  return (
    <>
      <h1>S'inscrire</h1>
      <p>Vous avez déjà un compte ? <a href="/connexion">Se connecter</a></p>
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
          <PasswordInput required maw={320} mx="auto"
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
    </>
  );
}

export default Signup