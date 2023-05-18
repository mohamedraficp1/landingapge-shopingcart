import React, { useEffect, useState } from "react";

function useProducts({ category }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiUrl = import.meta.env.VITE_BASE_URL;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl + `/category/${category}`);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jewelry products:", error);
      }
    };

    fetchData();
  }, []);

  return [products, loading];
}

export default useProducts;
