import React from "react";
import Tabs from "./Tabs";
import "./Tab.css";

const Tab = () => {
  const tabs = [
    {
      label: "tab1",
      content: "This is tab 1",
    },
    {
      label: "tab2",
      content: "This is tab 2",
    },
    {
      label: "tab3",
      content: <RandomContent />,
    },
  ];
  return (
    <div>
      <Tabs data={tabs} />
    </div>
  );
};

const RandomContent = () => {
  return <p>This is random content for tab 3</p>;
};

export default Tab;
