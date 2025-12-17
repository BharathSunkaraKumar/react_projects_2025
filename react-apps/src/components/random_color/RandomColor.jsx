import React, { useEffect, useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState("#000000");
  const [generateColor, setGenerateColor] = useState("hex");

  const handleRandom = (length) => {
    return Math.floor(Math.random() * length);
  };
  const handleHexGenColor = () => {
    let hexColor = "#";
    let hex = [0, 1, 2, 3, 4, 5, 6, "A", "B", "c", "C", "E", "F"];
    for (let i = 0; i < 6; i++) {
      hexColor += hex[handleRandom(hex.length)];
    }
    setColor(`${hexColor}`);
  };
  console.log(color);

  const handleRgbGenColor = () => {
    console.log("rgb");
    let R = handleRandom(256);
    let G = handleRandom(256);
    let B = handleRandom(256);

    setColor(`rgb(${R},${G},${B})`);
  };
  useEffect(() => {
    generateColor == "hex" ? handleHexGenColor() : handleRgbGenColor();
  }, [generateColor]);
  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",

        margin: "0px",
        padding: "0px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => {
            setGenerateColor("hex");
          }}
        >
          Generate HEX Color
        </button>
        <button
          onClick={() => {
            setGenerateColor("rgb");
          }}
        >
          Generate RGB Color
        </button>
        <button
          onClick={
            generateColor == "hex" ? handleHexGenColor : handleRgbGenColor
          }
        >
          Generate Random Color
        </button>
      </div>
      <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          height: "100%",
          alignItems: "center",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        {generateColor == "hex" ? <p>HEX: {color}</p> : <p>RBG: {color}</p>}
      </div>
    </div>
  );
};

export default RandomColor;
