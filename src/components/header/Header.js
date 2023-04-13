import React from 'react';
import './Header.scss';
import { Link } from "react-router-dom";
import { Menu, Button, Avatar, Image, ActionIcon } from '@mantine/core';
import { BiSearch, BiArrowToTop, BiLogOutCircle, BiPlanet, BiRocket, BiMessageRounded, BiLogInCircle, BiPlus } from "react-icons/bi";
import avatar from '../../assets/img/avatar.png';
import logo from '../../assets/img/logo-galacticat.png';
import { notifications } from '@mantine/notifications';

function Header() {
  function logout() {
    localStorage.clear();
    notifications.show({
      title: 'Déconnexion',
      message: 'Vous êtes bien déconnecté.',
    })
  }

  function isLoggedIn() {
    return localStorage.getItem('token') ? true : false;
  }
  
  return (
    <>
      <div className='header'>
        <div className='header-logo'>
          <Link to='/'>
            <Image maw={240} mx="auto" radius="md" src={logo} alt="GalactiCat logo" />
          </Link>
        </div>
        <div className='header-nav'>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Button color="pink">Nouveau trajet</Button>
            </Menu.Target>

            <Menu.Dropdown className='nav-dropdown-trajet'>
              <Link to='/publier-trajet'><Menu.Item icon={<BiArrowToTop size={14} />}>Publier un trajet</Menu.Item></Link>
              <Link to='/rechercher-trajet'><Menu.Item icon={<BiSearch size={14} />}>Rechercher un trajet</Menu.Item></Link>
            </Menu.Dropdown>
          </Menu>
          <ActionIcon size="lg" className='nav-messagerie'>
            <Link to=''>
              <BiMessageRounded size={36} fill="#fff" />
            </Link>
          </ActionIcon>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <ActionIcon size="lg" className='nav-avatar'>
                <Avatar src={avatar} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown className='nav-dropdown-profil'>
              { !isLoggedIn() ?
              <>
              <Link to='/connexion'><Menu.Item icon={<BiLogInCircle size={14} />}>Connexion</Menu.Item></Link>
              <Link to='/inscription'><Menu.Item icon={<BiLogInCircle size={14} />}>Inscription</Menu.Item></Link>
              </>
              :
              <>
              <Link to='/mon-compte'><Menu.Item icon={<BiPlanet size={14} />}>Profil</Menu.Item></Link>
              <Link to='/mes-trajets'><Menu.Item icon={<BiRocket size={14} />}>Mes trajets</Menu.Item></Link>
              <Link to='/' onClick={logout}><Menu.Item icon={<BiLogOutCircle size={14} />}>Déconnexion</Menu.Item></Link>
              </>
              }
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
      <div className='header-mobile'>
        <div className='header-nav'>
          <ActionIcon size="lg" className='nav-messagerie'>
            <Link to=''>
              <BiMessageRounded size={36} fill="#fff" />
            </Link>
          </ActionIcon>

          <Menu shadow="md" width={200}>
            <Menu.Target>
              <ActionIcon size="lg" radius="xl" color="orange" variant="filled" className='nav-new-trajet'>
                <BiPlus size={42} fill="#fff" />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown className='nav-dropdown-trajet'>
              <Link to='/publier-trajet'><Menu.Item icon={<BiArrowToTop size={14} />}>Publier un trajet</Menu.Item></Link>
              <Link to='/rechercher-trajet'><Menu.Item icon={<BiSearch size={14} />}>Rechercher un trajet</Menu.Item></Link>
            </Menu.Dropdown>
          </Menu>

          <Menu shadow="md" width={200}>
            <Menu.Target>
              <ActionIcon size="lg" className='nav-avatar'>
                <Avatar src={avatar} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown className='nav-dropdown-profil'>
              <Link to='/connexion'><Menu.Item icon={<BiLogInCircle size={14} />}>Connexion</Menu.Item></Link>
              <Link to='/inscription'><Menu.Item icon={<BiLogInCircle size={14} />}>Inscription</Menu.Item></Link>
              <Link to='/mon-compte'><Menu.Item icon={<BiPlanet size={14} />}>Profil</Menu.Item></Link>
              <Link to=''><Menu.Item icon={<BiRocket size={14} />}>Mes trajets</Menu.Item></Link>
              <Link to=''><Menu.Item icon={<BiLogOutCircle size={14} />}>Déconnexion</Menu.Item></Link>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
    </>
  )
}

export default Header