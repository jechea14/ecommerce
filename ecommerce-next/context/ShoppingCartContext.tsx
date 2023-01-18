import React, { createContext, ReactNode, useContext, useState } from "react";
import { Product } from "../interfaces/index";
import { ProductData } from "../utils/data";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  addToCart: (id: number) => void;
  decreaseCartQuaantity: (id: number) => void;
  cartItems: CartItem[];
};

type CartItem = {
  id: number;
  quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCart = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState(Array<CartItem>);

  const addToCart = (id: number) => {
    setCartItems((prev) => {
      if (prev.find((item) => item.id === id) == null) {
        return [...prev, { id, quantity: 1 }];
      } else {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuaantity = (id: number) => {
    setCartItems((prev) => {
      if (prev.find((item) => item.id === id)?.quantity == 1) {
        return prev.filter((item) => item.id !== id);
      } else {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  console.log(cartItems);

  return (
    <ShoppingCartContext.Provider
      value={{ addToCart, cartItems, decreaseCartQuaantity }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
