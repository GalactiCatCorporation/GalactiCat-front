import React, { useState } from 'react';
import { HiOutlineMapPin, HiOutlineCalendarDays } from "react-icons/hi2";
import { Select, Button } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import './Home.scss';

function Home() {
  const [startValue, setStartValue] = useState('');
  const [endValue, setEndValue] = useState('');

  return (
    <div id="Home">
      <h1>Voyagez à travers la galaxie entre catstronautes</h1>
      <div className='content'>
        <form>
            <Select
                data={['Terre', 'Venus', 'Mars', 'Jupiter', 'Saturne', 'Neptune', 'Mercure', 'Uranus']}
                icon={<HiOutlineMapPin size={20} />}
                searchable
                searchValue={startValue}
                onSearchChange={setStartValue}
                nothingFound="Inconnu"
                required
                className="input"
                placeholder="Départ"
            />
            <Select
                data={['Terre', 'Venus', 'Mars', 'Jupiter', 'Saturne', 'Neptune', 'Mercure', 'Uranus']}
                icon={<HiOutlineMapPin size={20} />}
              
                searchable
                searchValue={endValue}
                onSearchChange={setEndValue}
                nothingFound="Inconnu"
                required
                className="input"
                placeholder="Destination"
      
            />
            <DateTimePicker
                icon={<HiOutlineCalendarDays size={20} />}
                placeholder="Date et heure"
                maw={400}
                mx="auto"
                required
                className="input"
            />
            <div className='submit-button'>
                <Button className='btn btn-primary' type='submit'>Rechercher</Button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Home