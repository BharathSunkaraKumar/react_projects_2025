import React, { useRef, useState } from "react";
import UseClickOutSideHook from "./UseClickOutSide";

const ShowContent = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  UseClickOutSideHook(ref, () => setShowContent(false));
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        {showContent ? (
          <div ref={ref}>
            <h1>ShowContent</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              repellat, nemo sit laboriosam perspiciatis veniam debitis non
              praesentium voluptate? Repudiandae.
            </p>
          </div>
        ) : (
          <button onClick={() => setShowContent(true)}>Show Content</button>
        )}
      </div>
    </div>
  );
};

export default ShowContent;
