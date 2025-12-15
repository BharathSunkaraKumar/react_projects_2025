import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Style.css";

const Rating = () => {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);
  const handleClick = (i) => {
    setRating(i);
  };
  const handleHoverOn = (i) => {
    setHover(i);
  };
  const handleHoveOff = () => {
    setHover(rating);
  };
  return (
    <div className="container">
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            size={35}
            className={index <= (hover || rating) ? "active" : "inActive"}
            key={index}
            onClick={() => {
              handleClick(index);
            }}
            onMouseMove={() => {
              handleHoverOn(index);
            }}
            onMouseLeave={() => {
              handleHoveOff();
            }}
          />
        );
      })}
    </div>
  );
};

export default Rating;
