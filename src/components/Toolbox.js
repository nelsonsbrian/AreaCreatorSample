import React, { useContext } from 'react';
import { EditContext } from '../contexts/EditContext';

const Toolbox = () => {

  const { showBox, hideBox, showEditbox, startEdit } = useContext(EditContext);

  const toggleBox = () => {
    (showEditbox.currentlyEditing) ? hideBox() : showBox();
  }

  return (
    <div>
      <button className='btn btn-info m-2' onClick={()=> startEdit('ADDAREA')}>Add Area</button>
      <button className='btn btn-info m-2'onClick={()=> startEdit('ADDROOM')}>Add Room</button>
      <button className='btn btn-info m-2'>Add Npc</button>
      <button className='btn btn-info m-2'>Add Item</button>
    </div>
  );
}

export default Toolbox;