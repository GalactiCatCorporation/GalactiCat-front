import React from 'react'
import { Stepper, Avatar, Button } from '@mantine/core';
import './RideDetails.scss';
import { BsRocketTakeoffFill } from "react-icons/bs";

function RideDetails() {
  const [active, setActive] = React.useState(1);
  return (
    <div id="RideDetails">
      <h1>Details du trajet</h1>
      <div className="content">
        <span className="h2">Vendredi 2 février</span>
        <div className="stepper">
          <Stepper breakpoint="sm" active={active} onStepClick={setActive} color='pink' progressIcon={<BsRocketTakeoffFill/>}>
            <Stepper.Step label="Terre" description="11h"></Stepper.Step>
            <Stepper.Step label="Mars" description="12H"></Stepper.Step>
            <Stepper.Step label="Jupiter" description="12h30"></Stepper.Step>
            <Stepper.Step label="Uranus" description="14h"></Stepper.Step>
            <Stepper.Step label="Soleil" description="16h60"></Stepper.Step>
          </Stepper>
        </div>
        <div className='flex informations'>
          <div className='ride-pilote'>
            <Avatar size="lg" radius="xl"/>
            <div className='pilote-right'>
                <p className='pseudo'>JeanZorglub</p>
                <p className='title'>Pilote</p>
            </div>
          </div>
          <div className='spaceship'>
            <p className='title'>Vaisseaux</p>
            <p className='name'>Apollo</p>
          </div>
        </div>
      </div>
      <Button color='pink'>Rejoindre le trajet</Button>
    </div>
  )
}

export default RideDetails