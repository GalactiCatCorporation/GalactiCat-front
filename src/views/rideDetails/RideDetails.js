import React from 'react'
import { Timeline, Text } from '@mantine/core';
import './RideDetails.scss';

function RideDetails() {
  return (
    <div id="RideDetails">
      <h1>Details du trajet</h1>
      <div className="content flex">
        <div className="block-timeline">
          <span className="h2">Vendredi 2 février</span>
          <Timeline active={3} bulletSize={10} lineWidth={2} color="orange">
            <Timeline.Item title="Tatooine" color="orange"/>

            <Timeline.Item title="Ikea de Blorgzurg" color="pink">
              <Text color="white" size="sm">15h26</Text>
            </Timeline.Item>

            <Timeline.Item title="Camaieu" color="orange">
              <Text color="white" size="sm">18h12</Text>
            </Timeline.Item>

            <Timeline.Item title="Cybertron" color="orange"/>
          </Timeline>
        </div>
        <div className="block-pilote">
        <div className='informations'>
          <div className='nameold'>
            <h2>Jean Zorglub</h2>
          </div>
          <img src="/img/profil.png" alt="" />
        </div>
        </div>
      </div>
    </div>

  )
}

export default RideDetails