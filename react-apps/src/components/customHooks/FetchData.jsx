import React from "react";
import UseFetch from "./UseFetch";

const FetchData = () => {
  const { pending, data, error, fetchUrl } = UseFetch(
    "https://dummyjson.com/products",
    {}
  );
  console.log(data);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <h1>FetchData</h1>
      <button onClick={fetchUrl}>Fetch Again</button>
      {pending ? <p>Loading...</p> : null}
      {error ? <p>{error}</p> : null}
      <div>
        {data &&
          data.products &&
          data.products.map((product) => (
            <div key={product.id}>{product.title}</div>
          ))}
      </div>
    </div>
  );
};

export default FetchData;
