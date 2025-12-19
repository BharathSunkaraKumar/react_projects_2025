import React from "react";
import MenuList from "./MenuList";
import menus from "./data";
import "./Menu.css";
const MainMenu = ({ list }) => {
  return (
    <div className="mainmenu-conatiner">
      <MenuList list={(list = menus)} />
    </div>
  );
};

export default MainMenu;
