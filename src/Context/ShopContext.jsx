import { createContext, useContext, useReducer } from "react";
import shopReducer, {
  ADD_TO_CART,
  initialState,
  REMOVE_FROM_CART,
  UPDATE_PRICE,
} from "../Reducers/shopReducer";

const ShopContext = createContext();

export function ShopContextProvider({ children }) {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = productItem => {
    const updatedCart = state.cart.concat([productItem]);

    updatePrice(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    dispatch({ type: ADD_TO_CART, payload: updatedCart });
    console.log("Added to cart", updatedCart, state.cart);
  };

  const removeFromCart = id => {
    const filteredProducts = state.cart.filter(item => item.id !== id);

    updatePrice(filteredProducts);
    localStorage.setItem("cart", JSON.stringify(filteredProducts));

    dispatch({ type: REMOVE_FROM_CART, payload: filteredProducts });
    console.log("Removed from cart", filteredProducts, state.cart);
  };

  const updatePrice = products => {
    let total = 0;

    if (!products.length > 0) return;

    products.forEach(item => {
      if (isNaN(item.price)) return;

      const price = parseInt(item.price);
      total += price;
    });
    dispatch({ type: UPDATE_PRICE, payload: total.toFixed(2) });
  };

  const { total, cart, products } = state;
  const value = { total, cart, products, addToCart, removeFromCart, updatePrice };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

function useShopContext() {
  const context = useContext(ShopContext);

  if (!context) throw new Error("useShopContext must ne used within the ShopContext Provider");
  return context;
}

export default useShopContext;
