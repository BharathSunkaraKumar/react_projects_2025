import React from "react";
import useLoaclStorageHook from "./useLoaclStorageHook";
import "./Theme.css";

const Theme = () => {
  const [theme, setTheme] = useLoaclStorageHook("theme", "dark");

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  console.log(theme);
  return (
    <div className="light-dark-mode" dark-theme={theme}>
      <div className="container">
        <div>{theme == "dark" ? <p>dark: </p> : <p>light: </p>}</div>
        <p>Hello Bharath 👋</p>
        <button onClick={handleToggle}>Change Theme</button>
      </div>
    </div>
  );
};

export default Theme;
