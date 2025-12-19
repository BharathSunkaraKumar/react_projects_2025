import React, { useContext } from "react";
import Tab from "../tabs/Tab";
import Accordion from "../accordion/Accordion";
import Theme from "../light-dark/Theme";
import TicTacToe from "../tictactoe/TicTacToe";
import GitProfile from "../gitProfile/GitProfile";
import Slider from "../image-slider/Slider";
import Qrcode from "../Qr-code/Qrcode";
import RandomColor from "../random_color/RandomColor";
import Rating from "../Rating_stars/Rating";
import { feureFlagContext } from "./context/FeatureFlagGlobalState";
import ScrollBar from "../scroll-bar/ScrollBar";
import MainMenu from "../tree-view/MainMenu";

const Features = () => {
  const { loading, enableFlags } = useContext(feureFlagContext);
  const renderComponents = [
    {
      key: "showscrollBar",
      component: <ScrollBar />,
    },
    {
      key: "showAccordion",
      component: <Accordion />,
    },
    {
      key: "showMainMenu",
      component: <MainMenu />,
    },
    {
      key: "showTabs",
      component: <Tab />,
    },
    {
      key: "showTheme",
      component: <Theme />,
    },
    {
      key: "showTicTacToe",
      component: <TicTacToe />,
    },
    {
      key: "showGitHub",
      component: <GitProfile />,
    },
    {
      key: "showImageSlider",
      component: <Slider />,
    },
    {
      key: "showQrCode",
      component: <Qrcode />,
    },
    {
      key: "showRandomColor",
      component: <RandomColor />,
    },
    {
      key: "showRiting",
      component: <Rating />,
    },
  ];

  const checkEnableFlagsKey = (getCurrentKey) => {
    return enableFlags[getCurrentKey];
  };
  return (
    <div>
      <h1>Features Flags</h1>
      <div>
        {loading && <p>Loading...</p>}
        {renderComponents.map((each) =>
          checkEnableFlagsKey(each.key) ? each.component : null
        )}
      </div>
    </div>
  );
};

export default Features;
