import React, { useEffect, useState } from "react";

function useProducts({ category }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
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
