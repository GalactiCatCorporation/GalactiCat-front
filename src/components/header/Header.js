import React from 'react';
import './Header.scss';
import { Link } from "react-router-dom";
import { Menu, Button, Avatar, Image  } from '@mantine/core';
import { BiSearch, BiArrowToTop, BiLogOut, BiPlanet, BiRocket } from "react-icons/bi";
import avatar from '../../assets/img/avatar.png';
import logo from '../../assets/img/logo-galacticat.png';

function Header() {
  return (
    <>
      <div className='header'>
        <div className='header-logo'>
          <Link to='/'>
            <Image maw={240} mx="auto" radius="md" src={logo} alt="GalactiCat Home " />
          </Link>
        </div>
        <div className='header-nav'>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Button className='button-pink'>Nouveau trajet</Button>
            </Menu.Target>

            <Menu.Dropdown className='nav-dropdown-trajet'>
              <Menu.Item icon={<BiArrowToTop size={14} />}>Publier un trajet</Menu.Item>
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
              <Menu.Item icon={<BiPlanet size={14} />}>Profil</Menu.Item>
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