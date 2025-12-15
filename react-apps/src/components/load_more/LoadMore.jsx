import React, { useEffect, useState } from "react";
import "./LodeMore.css";
const LoadMore = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [disableBtn, setDisableBtn] = useState(false);
  const [loading, setLoading] = useState(false);
  const url = `https://dummyjson.com/products?limit=20&skip=${
    count == 0 ? 0 : count * 20
  }`;
  const fetchApi = async (url) => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setLoading(true);
      if (data) {
        setProducts((prev) => [...prev, ...data.products]);
        console.log(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchApi(url);
  }, [count]);
  useEffect(() => {
    if (products && products.length === 100) setDisableBtn(true);
  });
  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <div className="load-container">
      <div className="product-container">
        {products.length &&
          products.map((product, index) => {
            return (
              <div key={index} className="product">
                <img src={product.images[0]} alt={product.title} />
                <p>{product.title}</p>
              </div>
            );
          })}
      </div>
      <div className="btn">
        <button
          disabled={disableBtn}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          load more
        </button>
      </div>
      <div
        style={{
          textAlign: "center",
          fontWeight: "bold",
          color: "tomato",
          fontSize: "20px",
        }}
      >
        {disableBtn && <p>Your reach the limit 100 products</p>}
      </div>
    </div>
  );
};

export default LoadMore;
