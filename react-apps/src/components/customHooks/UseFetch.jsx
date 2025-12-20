import { useEffect, useState } from "react";

const UseFetch = (url, options = {}) => {
  //   console.log(url);
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchUrl = async () => {
    try {
      setPending(true);
      const resp = await fetch(url);
      if (!resp.ok) throw new Error(resp.statusText);
      const result = await resp.json();
      setData(result);
      setPending(false);
      // console.log(data)
    } catch (error) {
      setError(error);
      setPending(false);
    }
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  return { pending, data, error, fetchUrl };
};

export default UseFetch;
