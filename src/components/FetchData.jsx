import { useEffect, useState } from "react";

const FetchData = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("fetching")
    fetch(url)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => {
        setError(data.error);
        setData(data.data.products.edges);
        setLoading(false);
      });
    // json.data.products.edges
  }, [url]);

  return { data, loading, error };
};

export default FetchData
