import React, { useEffect, useState } from "react";
import "./TicTacToe.css";
const TicTacToe = () => {
  const [squareValue, setSquareValue] = useState(Array(9).fill(""));
  console.log(squareValue);
  const [isX, setIsX] = useState(true);
  const [status, setStatus] = useState("");

  const Square = ({ value, click }) => {
    return (
      <button onClick={click} className="square">
        {value}
      </button>
    );
  };

  const handleClick = (getValue) => {
    console.log(getValue);
    const copySqrs = [...squareValue];
    if (getWinner(copySqrs) || copySqrs[getValue]) return;
    copySqrs[getValue] = isX ? "X" : "O";
    setIsX(!isX);
    // console.log(copySqrs);
    setSquareValue(copySqrs);
    console.log("squareValue: " + squareValue);
    console.log("copySqrs: " + copySqrs);
  };

  const getWinner = (squareValue) => {
    const winnerPattern = [
      // 0,1,2
      // 3,4,5
      // 6,7,8

      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winnerPattern.length; i++) {
      const [x, y, z] = winnerPattern[i];
      if (
        squareValue[x] &&
        squareValue[x] == squareValue[y] &&
        squareValue[x] == squareValue[z]
      ) {
        return squareValue[x];
      }
    }
    return null;
  };

  const handleRestart = () => {
    setIsX(true);
    setSquareValue(Array(9).fill(""));
  };

  useEffect(() => {
    if (!getWinner(squareValue) && squareValue.every((item) => item != "")) {
      setStatus("This match is draw play again");
    } else if (getWinner(squareValue)) {
      setStatus(`Winner is ${getWinner(squareValue)}`);
    } else {
      setStatus(`Next player is ${isX ? "X" : "O"}`);
    }
  }, [squareValue, isX]);

  return (
    <div>
      <div className="ttt-container">
        <div className="row">
          <Square
            value={squareValue[0]}
            click={() => {
              handleClick(0);
            }}
          />
          <Square
            value={squareValue[1]}
            click={() => {
              handleClick(1);
            }}
          />
          <Square
            value={squareValue[2]}
            click={() => {
              handleClick(2);
            }}
          />
        </div>
        <div className="row">
          <Square
            value={squareValue[3]}
            click={() => {
              handleClick(3);
            }}
          />
          <Square
            value={squareValue[4]}
            click={() => {
              handleClick(4);
            }}
          />
          <Square
            value={squareValue[5]}
            click={() => {
              handleClick(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            value={squareValue[6]}
            click={() => {
              handleClick(6);
            }}
          />
          <Square
            value={squareValue[7]}
            click={() => {
              handleClick(7);
            }}
          />
          <Square
            value={squareValue[8]}
            click={() => {
              handleClick(8);
            }}
          />
        </div>
        <div
          style={{
            margin: "5px",
            fontWeight: "bold",
          }}
        >
          {status}
        </div>
        <div>
          <button
            style={{
              padding: "10px 30px",
              marginTop: "10px",
              backgroundColor: "dodgerblue",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              color: "AppWorkspace",
            }}
            onClick={handleRestart}
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
