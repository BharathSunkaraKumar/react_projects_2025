import React, { useEffect, useState } from "react";
import "./Scrollbar.css";
const ScrollBar = ({ url }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleApi = async () => {
    try {
      setLoading(true);
      const resp = await fetch(url);
      const data = await resp.json();
      if (data.products) {
        // console.log(data.products);
        setItems(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
      setErrorMsg(error.message);
    }
  };

  const handleScroll = () => {
    const howMuchScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScroll / height) * 100);

    // console.log(scrollPercentage);
    console
      .log
      //   document.body.scrollTop,
      //   document.documentElement.scrollTop,
      //   document.documentElement.scrollHeight,
      //   document.documentElement.clientHeight,
      //   scrollPercentage
      ();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // console.log(scrollPercentage);/
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  useEffect(() => {
    handleApi();
    // console.log(items);
  }, [url]);

  if (loading) {
    return <p>Loading... please wait</p>;
  }

  return (
    <div className="scollbar-container">
      <div className="top-container">
        <div
          style={{
            width: `${scrollPercentage}%`,
          }}
          className="currentBar"
        >
          {/* {scrollPercentage} */}
        </div>
        <p>Custom Scroll Indicator</p>
      </div>
      <div className="item-container">
        {items && items.length
          ? items.map((item) => <div key={item.id}>{item.title}</div>)
          : null}
      </div>
    </div>
  );
};

export default ScrollBar;
