import { useEffect, useState } from "react";

const FetchData = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status >= 400) {
          setError(response.status);
          throw new Error("server error", response.status);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      });
    // json.data.products.edges
  }, [url]);
  console.log("DATA", data, loading, error)
  return { data, loading, error };
};

export default FetchData
