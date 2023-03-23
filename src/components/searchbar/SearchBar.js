import React, { useState } from 'react';
import { HiOutlineMapPin, HiOutlineCalendarDays } from "react-icons/hi2";
import { Select, Button } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import './SearchBar.scss';

function SearchBar() {
  const [startValue, setStartValue] = useState('');
  const [endValue, setEndValue] = useState('');

  return (
      <div className='search-bar'>
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
  )
}

export default SearchBar