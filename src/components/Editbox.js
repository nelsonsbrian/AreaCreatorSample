import React, { useContext, setState } from 'react';
import AddArea from './AddArea';
import { EditContext } from '../contexts/EditContext';

const Editbox = () => {

  const { showEditbox } = useContext(EditContext);

  const selectComponentToEdit = () => {
    switch(showEditbox.editing) {
      case 'ADDAREA':
        return <AddArea/>
      default:
        return <div>Nothing Selected</div>
    }
  }

  return (
    <div>
      <h5>{showEditbox.editing}</h5>
      {selectComponentToEdit()}
    </div>
  );
}

export default Editbox;