import React, { useContext } from 'react';
import Toolbox from './Toolbox';
import Sidebar from './Sidebar';
import Editbox from './Editbox';
import { EditContext } from '../contexts/EditContext';

const Body = () => {
  const { showEditbox } = useContext(EditContext);

  return (
    <React.Fragment>
      <Toolbox />
      {showEditbox.currentlyEditing ? <Editbox /> : <div />}
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Sidebar />
          </div>
          <div className="col">
            details
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Body;