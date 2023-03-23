import React from 'react'
import './Profil.scss';
import '../../index.scss';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group, Textarea, TextInput, Menu } from '@mantine/core';

function Profil() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div id="Profil">
      <h1>Mon compte</h1>
      <div className='information'>
        <div className='nameold'>
          <h2>Jean Zorglub</h2>
        </div>
        <img src="/img/profil.png" alt="" />
      </div>
      <Modal opened={opened} onClose={close} title="Mes informations">
        <form>
          <TextInput
            placeholder="Pseudonyme"
            label="Pseudonyme"
          />
          <Textarea
            placeholder="Je m'appelle Jean Zorglub et j'ai 26 ans..."
            label="Bio"
          />
          <TextInput
            placeholder="Vaisseau"
            label="Vaisseau"
          />
          <div className='submit-button' style={{ textAlign: 'center', marginTop: '1rem' }}>
            <Button color="blue" type='submit'>Enregistrer</Button>
          </div>
        </form>
      </Modal>
      <Group position="center" >
        <Button onClick={open} color="orange">Modifier profil</Button>
        <Button color="orange" type='submit'>Mes trajets</Button>
      </Group>
      <div className='content'>
        <h2>Bio</h2>
        <p>Je suis habitué aux voyages spatiaux car mon père habite sur la planète Xénobule-2 ! Mon type de musique préféré est le néo-spatiométal x)</p>
        <h2>Vaisseau</h2>
        <p>Falcon Y752</p>
        <span>Membre depuis Juillet 2021</span>
      </div>
      <Menu className="others-options">
        <Menu.Target>
          <Button>Autres options</Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item>Supprimer mon compte</Menu.Item>
          <Menu.Item>Déconnexion</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  )
}

export default Profil