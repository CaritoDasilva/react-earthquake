import React from 'react';

 const Quake = ({quake}) => (
   <div className="quake">
    <h2>{quake.properties.place}</h2>
    <p>Magnitud: {quake.properties.mag} - Profundida: {quake.geometry.coordinates[2]} km</p>
  </div>
 );

 export default Quake;
