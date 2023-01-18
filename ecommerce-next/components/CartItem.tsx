import React from "react";
import useSWR from "swr";
import { Product } from "../interfaces/index";
import Image from "next/image";

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
  if (error) return <div>{error.message}</div>;
  const item = data?.find((i: any) => i.id === id);
  if (item == null) return null;

  return (
    <div className="flex flex-col items-center overflow-auto">
      <Image
        src={item.image[0]}
        alt={item.name}
        width={150}
        height={150}
        className="rounded-tl-lg rounded-tr-lg"
      />
      <h1>{item.name}</h1>
      <p>{quantity}</p>
      <p>${(item.price * quantity).toFixed(2)}</p>
    </div>
  );
};
