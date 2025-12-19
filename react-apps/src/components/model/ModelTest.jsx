import React, { useState } from "react";
import Model from "./Model";
import "./Model.css";

const ModelTest = () => {
  const [showModel, setShowModel] = useState(false);
  const handleShow = () => {
    setShowModel(!showModel);
  };
  const handleClose = () => {
    setShowModel(false);
  };
  return (
    <div className="mode-container">
      <div className="show-btn-model">
        <button onClick={handleShow}>
          {showModel ? "Hide Model" : "Show Model"}
        </button>
      </div>
      <div>
        {showModel && (
          <Model
            header={<div>Custom Header</div>}
            body={<h3>Custom Body</h3>}
            footer={<h3>Custom Footer</h3>}
            close={handleClose}
          />
        )}
      </div>
    </div>
  );
};

export default ModelTest;
