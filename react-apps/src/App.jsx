import Accordion from "./components/accordion/Accordion";
import Slider from "./components/image-slider/Slider";
import LoadMore from "./components/load_more/LoadMore";
import Qrcode from "./components/Qr-code/Qrcode";
import RandomColor from "./components/random_color/RandomColor";
import Rating from "./components/Rating_stars/Rating";
import menus from "./tree-view/data";
import MainMenu from "./tree-view/MainMenu";

function App() {
  return (
    <>
      {/* <Accordion/> */}
      {/* <RandomColor/> */}
      {/* <Rating /> */}
      {/* <Slider url={"https://picsum.photos/v2"} limit={10} /> */}
      {/* <LoadMore /> */}
      {/* <MainMenu list={menus} /> */}
      <Qrcode />
    </>
  );
}

export default App;
