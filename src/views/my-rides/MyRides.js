import React from 'react';
import './MyRides.scss';
import RidePreview from '../../components/ride-preview/RidePreview';

function MyRides() {

  return (
    <div id="MyRides">
      <h1>Mes trajets</h1>
      <div className='a-venir'>
        <h2>À venir</h2>
        <RidePreview/>
        <RidePreview/>
      </div>
      <div className='passes'>
        <h2>Passés</h2>
        <RidePreview/>
        <RidePreview/>
      </div>  
    </div>
  )
}

export default MyRides