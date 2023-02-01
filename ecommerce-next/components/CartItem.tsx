import React from "react";
import useSWR from "swr";
import { Product } from "../interfaces/index";
import Image from "next/image";
import { useShoppingCart } from "../context/ShoppingCartContext";

type CartItemProps = {
  id: number;
  quantity: number;
};

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export const CartItem = ({ id, quantity }: CartItemProps) => {
  const { data, error } = useSWR<Product[]>(`/api/collections`, fetcher);
  const { decreaseCartQuantity, addToCart, removeFromCart } = useShoppingCart();
  if (error) return <div>{error.message}</div>;
  const item = data?.find((i: any) => i.id === id);
  if (item == null) return null;

  return (
    <div className="flex flex-col items-center space-y-3 border-t-2 py-4 border-slate-400">
      <div className="flex space-x-2">
        <Image
          src={item.image[0]}
          alt={item.name}
          width={65}
          height={65}
          className=""
        />
        <h1>{item.name}</h1>
      </div>
      <div className="space-y-2">
        <p className="pl-10">${(item.price * quantity).toFixed(2)}</p>
        <div className="flex space-x-3 items-center">
          <button
            className="bg-gray-500 text-slate-100 py-1 px-5"
            onClick={() => decreaseCartQuantity(item.id)}
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            className="bg-gray-500 text-slate-100 py-1 px-5"
            onClick={() => addToCart(item.id)}
          >
            +
          </button>

          <button
            className="bg-red-700 text-slate-100 py-1 px-5"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
