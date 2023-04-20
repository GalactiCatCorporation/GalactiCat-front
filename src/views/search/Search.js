import React , { useState } from 'react';
import './Search.scss';
import SearchBar from '../../components/searchbar/SearchBar';
import RidePreview from '../../components/ride-preview/RidePreview';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Radio } from '@mantine/core';

function Search() {

  const [opened, { open, close }] = useDisclosure(false);
  const [hourValue, setHourValue] = useState(null);
  const [stepValue, setStepValue] = useState(null);
  const [seatsValue, setSeatsValue] = useState(null);

  function reset() {
    setHourValue(null);
    setStepValue(null);
    setSeatsValue(null);
  }

  return (
    <div id="Search">
      <h1>Rechercher un trajet</h1>
      <SearchBar/>
      <Drawer opened={opened} onClose={close} position="right" title="Filtrer">
        <Radio.Group
          value={hourValue}
          onChange={setHourValue}
          name="hour"
          label="Heure de départ"
        >
          <Radio value="1" label="5h00 - 13h00" />
          <Radio value="2" label="13h01 - 19h00" />
          <Radio value="3" label="Après 19h00" />
        </Radio.Group>
        <Radio.Group
          value={stepValue}
          onChange={setStepValue}
          name="steps"
          label="Étapes"
        >
          <Radio value="1" label="Peu importe" />
          <Radio value="2" label="Pas d'étape" />
        </Radio.Group>
        <Radio.Group
          value={seatsValue}
          onChange={setSeatsValue}
          name="seats"
          label="Places libres"
        >
          <Radio value="1" label="1 ou plus" />
          <Radio value="2" label="2 ou plus" />
        </Radio.Group>
        <Button onClick={close}>Voir les trajets</Button>
        <Button onClick={reset} className="btn-reset" color="blue">Réinitialiser</Button>
      </Drawer>

      <Button onClick={open} className="btn-filter" color="pink">Filtres</Button>

      <RidePreview/>
      <RidePreview/>
    </div>
  )
}

export default Search