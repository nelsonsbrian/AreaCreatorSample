import React, { createContext, useState } from 'react';

export const EditContext = createContext();

const EditContextProvider = (props) => {

  const [showEditbox, setEditbox] = useState({
    currentlyEditing: false,
    editing: ''
  });

  const showBox = () => {
    setEditbox({ currentlyEditing: true });
  };

  const hideBox = () => {
    setEditbox({ currentlyEditing: false });
  }

  const startEdit = (componentName) => {
    console.log('start editing', componentName);
    setEditbox({ ...showEditbox, currentlyEditing: true, editing: componentName });
  };

  const endEdit = () => {
    console.log('end editing', showEditbox.editing);
    setEditbox({ ...showEditbox, currentlyEditing: false, editing: '' });
  };

  return (
    <EditContext.Provider value={{ showBox, hideBox, showEditbox, startEdit, endEdit }}>
      {props.children}
    </EditContext.Provider>
  );
}

export default EditContextProvider;
