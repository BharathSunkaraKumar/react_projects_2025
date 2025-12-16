import React, { useState } from "react";
import MenuList from "./MenuList";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const [display, setDisplay] = useState({});
  //   console.log(item);
  const handleToggle = (getCurrentLabel) => {
    // console.log(getCurrentLabel);
    setDisplay({
      ...display,
      [getCurrentLabel]: !display[getCurrentLabel],
      //settings : if display have settings ? false : true
    });
  };
  //   console.log(display);
  return (
    <li className="menuitem-container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              handleToggle(item.label);
            }}
          >
            {display[item.label] ? (
              <FaMinus size={25} color="white" />
            ) : (
              <FaPlus size={25} color="white" />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      display[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
