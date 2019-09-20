import React, { useContext, useState } from 'react';
import { AreaContext } from '../contexts/AreaContext';
import { EditContext } from '../contexts/EditContext';
import uuid from 'uuid/v1';

const AddArea = () => {

  const { addArea } = useContext(AreaContext);
  const { showBox, endEdit, showEditbox, startEdit } = useContext(EditContext);

  const [id, setId] = useState(uuid());
  const [name, setName] = useState(`Land of ${parseInt(parseInt(Math.random() * 1000) + "000").toLocaleString()} Wonders`);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id.length || name.length < 3) {
      console.log('Must have an ID and the Name of Area must be longer than 3 characters.');
      return;
    }
    addArea({ id, name, rooms:[] });
    // setId(uuid());
    // setName("My next big idea");
    endEdit();
  };

  return (
    <React.Fragment>
      <button className='btn btn-primary float-right mr-4' onClick={() => setId(uuid())}>Generate New ID</button>
      <form onSubmit={handleSubmit}>
        <h5>Add an Area:</h5>
        <label>Area Id: </label>
        <input type="text" value={id}
          onChange={(e) => setId(e.target.value)} required />
        <label>Name of Area:</label>
        <input type="text" value={name}
          onChange={(e) => setName(e.target.value)} required />
        <input className="form-control" type="submit" value="Save Area" />
      </form>
    </React.Fragment>
  );

}

export default AddArea;