import React from "react";

const Model = ({ header, body, footer, close }) => {
  return (
    <div className="mode-container">
      <div className="model">
        <div className="header">
          <button className="btn" onClick={close}>
            X
          </button>

          <h3>{header ? header : "header"}</h3>
        </div>
        <div className="body">{body ? body : <h3>body</h3>}</div>
        <div className="footer">{footer ? footer : <h3>footer</h3>}</div>
      </div>
    </div>
  );
};

export default Model;
