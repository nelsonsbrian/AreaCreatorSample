import React, { useContext } from 'react';
import { AreaContext } from '../contexts/AreaContext';

const Sidebar = () => {
  const { areas } = useContext(AreaContext);

  // Consider breadcrumbs
  return areas.length ? (
    <div>
      <h2>Created Areas:</h2>
      <p>Name:        Rooms</p>
      {areas.map(area => {
        return <div key={area.id}>{area.name}       {area.rooms.length}</div>
      })}
    </div>
  ) :
  (
    <div>No Areas</div>
  );
}

export default Sidebar;
