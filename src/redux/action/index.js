export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: product,
  };
};

export const initializeCart = () => {
  return async (dispatch) => {
    try {
      const apiUrl = import.meta.env.VITE_BASE_URL;
      const response = await fetch(apiUrl + "/listCartItems");
      const data = await response.json();
      dispatch({ type: "INITIAL", payload: data });
    } catch (error) {
      console.error("Error fetching initial cart state:", error);
    }
  };
};
