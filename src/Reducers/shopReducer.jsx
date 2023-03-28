import Products from "../Shop";

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const UPDATE_PRICE = "UPDATE_PRICE";

const initialCartState = JSON.parse(localStorage.getItem("cart"));

const initialState = {
  total: 0,
  cart: initialCartState ?? [],
  products: Products,
};

const shopReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      return { ...state, cart: payload };
    case REMOVE_FROM_CART:
      return { ...state, cart: payload };
    case UPDATE_PRICE: {
      return { ...state, total: payload };
    }

    default:
      return state;
  }
};

export default shopReducer;
export { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_PRICE, initialState };
