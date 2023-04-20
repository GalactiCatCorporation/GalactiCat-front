import React, { useState } from 'react';
import { HiOutlineMapPin, HiOutlineCalendarDays } from "react-icons/hi2";
import { Select, Button } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import 'dayjs/locale/fr';
import './SearchBar.scss';

function SearchBar() {
  const [startValue, setStartValue] = useState('');
  const [endValue, setEndValue] = useState('');
  const [dateValue, setDateValue] = useState(null);

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
            <DatePickerInput
                icon={<HiOutlineCalendarDays size={20} />}
                placeholder="Date"
                maw={400}
                value={dateValue}
                onChange={setDateValue}
                mx="auto"
                required
                className="input"
                locale="fr"
                minDate={new Date()}
            />
            <div className='submit-button'>
                <Button className='btn btn-primary' type='submit'>Rechercher</Button>
            </div>
        </form>
      </div>
  )
}

export default SearchBar