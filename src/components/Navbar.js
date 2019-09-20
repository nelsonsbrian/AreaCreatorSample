import React, { useContext } from 'react';
import { AreaContext } from '../contexts/AreaContext';

const Navbar = () => {
  const { areas } = useContext(AreaContext);
  return (
    <div className='navbar'>
      <h1>Area Creator</h1>
      <p>You currently have {areas.length} areas created.</p>
    </div>
  );
}

export default Navbar;