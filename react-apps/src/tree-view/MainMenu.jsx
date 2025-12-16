import React from "react";
import MenuList from "./MenuList";
import "./Menu.css";
const MainMenu = ({ list }) => {
  return (
    <div className="mainmenu-conatiner">
      <MenuList list={list} />
    </div>
  );
};

export default MainMenu;
