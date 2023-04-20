import React from 'react'
import { TextInput, PasswordInput, Button } from '@mantine/core';
import '../../index.scss';
import './Auth.scss';
import { useNavigate } from "react-router-dom";
import { notifications } from '@mantine/notifications';
import AuthService from '../../services/authService';

function Signup() {
  const [pseudo, setPseudo] = React.useState();
  const [password, setPassword] = React.useState();
  const [confirmPassword, setConfirmPassword] = React.useState();

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault()

    const isValidPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

    if (isValidPassword) {
      if (password !== confirmPassword) {
        notifications.show({
          withCloseButton: true,
          autoClose: 5000,
          title: "Eh gogole !",
          message: 'Les mots de passe ne correspondent pas !',
          color: 'red',
        });
      } else {

        AuthService.register(pseudo, password)
          .then(() => {
            navigate("/");
          })
          .catch(error => {
            notifications.show({
              withCloseButton: true,
              autoClose: 5000,
              title: "C'est à nouveau le gui",
              message: 'Pseudo ou mot de passe incorrect !',
              color: 'red',
            });
          })
      }
    } else {
      notifications.show({
        withCloseButton: true,
        autoClose: 4000,
        title: "Yo c'est le Gui qui parle",
        message: 'Le mot de passe doit contenir une lettre, un chiffre et faire minimum 8 caractères !',
        color: 'red',
      });
    }

  }
  return (
    <div id="Auth">
      <h1>S'inscrire</h1>
      <p>Vous avez déjà un compte ? <a href="/connexion">Se connecter</a></p>
      <div className='content'>
        <form method="post" onSubmit={handleSubmit}>
          <TextInput
            placeholder="Pseudonyme"
            label="Pseudonyme"
            onChange={e => setPseudo(e.target.value)}
            withAsterisk
            maxLength="15"
          />
          <PasswordInput
            required
            placeholder="Mot de passe"
            label="Mot de passe"
            className='password'
            onChange={e => setPassword(e.target.value)}
            withAsterisk
          />
          <span className='info-password'>Doit contenir une lettre, une chiffre et doit faire minimum 8 caractères</span>
          <PasswordInput
            required
            placeholder="Confirmation mot de passe"
            label="Confirmation mot de passe"
            onChange={e => setConfirmPassword(e.target.value)}
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