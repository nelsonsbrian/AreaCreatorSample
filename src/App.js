import React from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';

import AreaContextProvider from './contexts/AreaContext';
import EditContextProvider from './contexts/EditContext';

function App() {

  return (
    <div className="App">
      <AreaContextProvider>
        <EditContextProvider>
          <Navbar />
          <Body/>
        </EditContextProvider>
      </AreaContextProvider>
    </div>
  );
}

export default App;
