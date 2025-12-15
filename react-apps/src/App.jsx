import Accordion from "./components/accordion/Accordion";
import Slider from "./components/image-slider/Slider";
import RandomColor from "./components/random_color/RandomColor";
import Rating from "./components/Rating_stars/Rating";

function App() {
  return (
    <>
      {/* <Accordion/> */}
      {/* <RandomColor/> */}
      {/* <Rating /> */}
      <Slider url={"https://picsum.photos/v2"} limit={10} />
    </>
  );
}

export default App;
