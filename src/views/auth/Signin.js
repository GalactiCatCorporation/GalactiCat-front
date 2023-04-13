import React from 'react'
import { TextInput, PasswordInput, Button } from '@mantine/core';
import '../../index.scss';
import './Auth.scss';
import axios from 'axios';
import { notifications } from '@mantine/notifications';
import { useNavigate } from "react-router-dom";

function Signin() {
  const [pseudo, setPseudo] = React.useState();
  const [password, setPassword] = React.useState();

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault()

    axios
      .post("http://localhost:8888/api/v1/auth/authenticate", { 'email': pseudo, password })
      .then(response => {
        localStorage.setItem('token', response.data.token);
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

  return (
    <div id='Auth'>
      <h1>Se connecter</h1>
      <p>Vous n'avez pas encore de compte ? <a href="/inscription">Créer un compte</a></p>
      <div className='content'>
        <form method="post" onSubmit={handleSubmit}>
          <TextInput
            placeholder="Pseudonyme"
            label="Pseudonyme"
            onChange={e => setPseudo(e.target.value)}
            withAsterisk
          />
          <PasswordInput
            required
            placeholder="Mot de passe"
            label="Mot de passe"
            className='password'
            onChange={e => setPassword(e.target.value)}
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