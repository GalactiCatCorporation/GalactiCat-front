import React from 'react'
import './Profil.scss';
import '../../index.scss';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group, Textarea, TextInput, Menu, Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { Link } from "react-router-dom";
import AuthService from '../../services/authService';

function Profil() {
  const [opened, { open, close }] = useDisclosure(false);

  const openDeleteModal = () =>
  modals.openConfirmModal({
    title: 'Supprimer mon profil',
    centered: true,
    children: (
      <Text size="sm" color='white'>
        Êtes-vous sûr de vouloir supprimer votre profil ?
      </Text>
    ),
    labels: { confirm: 'Oui, je veux', cancel: "Non, je ne veux pas" },
    confirmProps: { color: 'red' },
  });

  return (
    <div id="Profil">
      <h1>Mon compte</h1>
      <div className='informations'>
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
      <div className='block-options'>
        <Group position="center" >
          <Button onClick={open} color="orange">Modifier profil</Button>
          <Button color="orange" type='button'><Link to='/mes-trajets' className='white'>Mes trajets</Link></Button>
        </Group>
        <Menu className="others-options">
          <Menu.Target>
            <Button>Autres options</Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item onClick={openDeleteModal}>Supprimer mon compte</Menu.Item>
            <Link to='/' onClick={() => AuthService.logout()}><Menu.Item>Déconnexion</Menu.Item></Link>
          </Menu.Dropdown>
        </Menu>
      </div>
      <div className='content'>
        <h2>Bio</h2>
        <p>Je suis habitué aux voyages spatiaux car mon père habite sur la planète Xénobule-2 ! Mon type de musique préféré est le néo-spatiométal x)</p>
        <h2>Vaisseau</h2>
        <p>Falcon Y752</p>
      </div>
    </div>
  )
}

export default Profil