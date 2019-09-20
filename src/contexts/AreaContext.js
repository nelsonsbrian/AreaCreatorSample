import React, { createContext, useState } from "react";

export const AreaContext = createContext();

const AreaContextProvider = props => {

  const [areas, setAreas] = useState([
    { id: 'caymus_harbor', name: 'Caymus Harbor', rooms: [] },
    { id: 'kaluak', name: 'Kaluak', rooms: [] }
  ]);

  const addArea = (area) => {
    console.log('added area:', area)
    setAreas([...areas, area]);
  };

  const removeArea = (id) => {
    setAreas([...areas].filter(area => area.id !== id));
  }

  return (
    <AreaContext.Provider value={{ areas, addArea, removeArea }}>
      {props.children}
    </AreaContext.Provider>
  );
};

export default AreaContextProvider;
