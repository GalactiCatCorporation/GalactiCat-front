import React from 'react'
import './Profil.scss';
import '../../index.scss';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group, Textarea, TextInput, Menu, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

function Profil() {
  const [opened, { open, close }] = useDisclosure(false);

  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: 'Delete your profile',
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete your profile? This action is destructive and you will have
          to contact support to restore your data.
        </Text>
      ),
      labels: { confirm: 'Delete account', cancel: "No don't delete it" },
      confirmProps: { color: 'red' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirmed'),
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
          <Button color="orange" type='submit'>Mes trajets</Button>
        </Group>
        <Menu className="others-options">
          <Menu.Target>
            <Button>Autres options</Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item onClick={openDeleteModal}>Supprimer mon compte</Menu.Item>
            <Menu.Item>Déconnexion</Menu.Item>
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