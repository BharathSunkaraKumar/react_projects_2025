import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Slider.css";

const Slider = ({ url = "https://picsum.photos/v2", limit = 10 }) => {
  const [images, setImages] = useState([]);
  const [currentSlider, setCurrentSlider] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //https://picsum.photos/v2/list?page=1&limit=10

  const handlePrev = () => {
    setCurrentSlider(
      currentSlider === 0 ? images.length - 1 : currentSlider - 1
    );
  };

  const handleNext = () => {
    setCurrentSlider(
      currentSlider === images.length - 1 ? 0 : currentSlider + 1
    );
  };

  const fetchUrl = async (getUrl) => {
    try {
      setLoading(true);
      const resp = await fetch(`${getUrl}/list?page=1&limit=${limit}`);
      const data = await resp.json();
      if (data) {
        setImages(data);
        console.log(data);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (url !== "") {
      fetchUrl(url);
    }
  }, [url]);
  if (loading) {
    return <div>Loding... Please Wait</div>;
  }
  if (error !== null) {
    return <div>Error ! {error}</div>;
  }
  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrev}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((each, index) => {
            return (
              <img
                key={each.id}
                className={
                  currentSlider === index ? "image" : "image hide-image"
                }
                alt={each.author}
                src={each.download_url}
              />
            );
          })
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => {
              return (
                <button
                  onClick={() => setCurrentSlider(index)}
                  className={
                    currentSlider === index
                      ? "current-indicator"
                      : "current-indicator hide-indicator"
                  }
                  key={index}
                ></button>
              );
            })
          : null}
      </span>
    </div>
  );
};

export default Slider;
