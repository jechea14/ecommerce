import React, { createContext, ReactNode, useContext, useState } from 'react'
import { Product } from "../interfaces/index"

type ShoppingCartProviderProps = {
  children: ReactNode
}

type ShoppingCartContext = {
  addToCart: (item: Product, amount: number) => void
  cartItems: CartItem[]
}

type CartItem = {
  id: number,
  quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export const useShoppingCart = () => useContext(ShoppingCartContext)

export const ShoppingCartProvider = ({children}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (item: Product, amount: number) => {
    // setCartItems(prev => {
    //   if (prev.find(item => item.id === item.id) == null) {
    //     return [...prev, {}]
    //   }
    // })
  }
  
  return (
    <ShoppingCartContext.Provider value={{addToCart, cartItems}}>
      {children}
    </ShoppingCartContext.Provider>
  )
}