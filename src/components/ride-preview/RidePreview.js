import React from 'react';
import './RidePreview.scss';
import { Avatar, Image } from '@mantine/core';
import ridefly from '../../assets/img/ride-fly.png';

function RidePreview() {

  return (
      <div className='ride-preview'>
        <div className='ride-pilote'>
            <Avatar size="lg" radius="xl"/>
            <div className='pilote-right'>
                <p className='date'>26/06/2023</p>
                <p className='pseudo'>JeanZorglub</p>
                <p className='title'>Pilote</p>
            </div>
        </div>
        <div className='sep'></div>
        <div className='ride-fly'>
            <div>
                <p>Saturne</p>
                <p>14h30</p>
            </div>
            <div className='nb-steps'>
                <Image maw={130} mx="auto" src={ridefly} alt="" />
                <p>2 étapes</p>
            </div>
            <div>
                <p>Vénus</p>
                <p>16h30</p>
            </div>
        </div>
        <div className='sep'></div>
        <div className='ride-seats'>
            <p>Places disponibles</p>
            <p>3</p>
        </div>
        <div className='sep'></div>
        <div className='ride-status'>
            <span className='status incoming'></span><span className='status-text'>A venir</span>
        </div>
        <div className='ride-link'>
            <a href="?">Voir le trajet {'>'}</a>
        </div>
      </div>
  )
}

export default RidePreview