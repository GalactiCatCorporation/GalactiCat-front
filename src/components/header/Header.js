import React from 'react';
import './Header.scss';
import variables from '../../variables.scss';
import { Link } from "react-router-dom";
import { Menu, Button, Avatar, Image, MantineProvider  } from '@mantine/core';
import { BiSearch, BiArrowToTop, BiLogOut, BiPlanet, BiRocket } from "react-icons/bi";
import avatar from '../../assets/img/avatar.png';
import logo from '../../assets/img/logo-galacticat.png';

function Header() {
  return (
    <>
    <MantineProvider
      theme={{
        colors: {
          'pink': [variables.pink],
        },
      }}
    ></MantineProvider>

      <div className='header'>
        <div className='header-logo'>
          <Link to='/'>
            <Image maw={240} mx="auto" radius="md" src={logo} alt="GalactiCat Home " />
          </Link>
        </div>
        <div className='header-nav'>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Button color="pink">Nouveau trajet</Button>
            </Menu.Target>

            <Menu.Dropdown className='nav-dropdown-trajet'>
            <Link to='/publier-trajet'><Menu.Item icon={<BiArrowToTop size={14} />}>Publier un trajet</Menu.Item></Link>
              <Menu.Item icon={<BiSearch size={14} />}>Rechercher un trajet</Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Menu shadow="md" width={200}>
            <Menu.Target>
                <Avatar src={avatar} />
            </Menu.Target>

            <Menu.Dropdown className='nav-dropdown-profil'>
              <Link to='/connexion'><Menu.Item icon={<BiPlanet size={14} />}>Connexion</Menu.Item></Link>
              <Link to='/inscription'><Menu.Item icon={<BiPlanet size={14} />}>Inscription</Menu.Item></Link>
              <Link to='/mon-compte'><Menu.Item icon={<BiPlanet size={14} />}>Profil</Menu.Item></Link>
              <Menu.Item icon={<BiRocket size={14} />}>Mes trajets</Menu.Item>
              <Menu.Item icon={<BiLogOut size={14} />}>Déconnexion</Menu.Item>
            </Menu.Dropdown>
          </Menu>
          
          
        </div>
      </div>
    </>
  )
}

export default Header