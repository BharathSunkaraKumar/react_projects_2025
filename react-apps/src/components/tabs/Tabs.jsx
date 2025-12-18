import React, { useState } from "react";

const Tabs = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(data[currentIndex].content);
  const handleClick = (getIndex) => {
    setCurrentIndex(getIndex);
  };
  return (
    <div className="tab-contaienr">
      <div className="tab-header">
        {data.map((each, index) => {
          return (
            <div
              onClick={() => {
                handleClick(index);
              }}
              key={index}
              className={`tab-box ${
                currentIndex == index ? "tab-box-active" : ""
              }`}
            >
              {each.label}
            </div>
          );
        })}
      </div>
      <div className="tab-content">
        {data ? data[currentIndex].content : null}
      </div>
    </div>
  );
};

export default Tabs;
