import React from "react";

export const SearchData = ({ data, handleClick }) => {
  return (
    <ul>
      {data && data.length
        ? data.map((each, index) => (
            <li onClick={handleClick} key={index}>
              {each}
            </li>
          ))
        : null}
    </ul>
  );
};
