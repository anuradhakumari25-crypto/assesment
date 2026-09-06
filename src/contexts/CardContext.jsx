import { createContext, useReducer } from "react";

export const CardContext = createContext();

const initialState = {
  cart: [],
};

const CardReducer = (state, action) => {
  switch (action.type) {

   case "ADD_TO_CART": {
  const existingProduct = state.cart.find(
    (item) => item.id === action.payload.id
  );

  if (existingProduct) {
    return {
      ...state,
      cart: state.cart.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      ),
    };
  }

  return {
    ...state,
    cart: [
      ...state.cart,
      {
        ...action.payload,
        quantity: 1,
      },
    ],
  };
}

     case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.id !== action.payload
        ),
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantity: item.quantity + action.payload.change,
                }
              : item
          )
          .filter((item) => item.quantity > 0),
      };
case "CLEAR_CART":
  return {
    ...state,
    cart: [],
  };

default:
  return state;

  }
};
export const CardProvider = ({ children }) => {

  const [state, dispatch] = useReducer(
    CardReducer,
    initialState
  );

  return (
    <CardContext.Provider value={{ state, dispatch }}>
      {children}
    </CardContext.Provider>
  );
};