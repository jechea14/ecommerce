import React from "react";
import useSWR from "swr";
import { Product } from "../interfaces/index";
import { useRouter } from "next/router";

type CartItemProps = {
  id: number;
  quantity: number;
};

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  // if (res.status !== 200) {
  //   throw new Error(data.message);
  // }
  console.log("data ", data);
  return data;
};

export const CartItem = ({ id, quantity }: CartItemProps) => {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.id && `/api/collections/${query.id}`,
    fetcher
  );
  if (error) return <div>{error.message}</div>;
  const item = data.find((i: any) => i.id === id);
  if (item == null) return null;

  return (
    <div>
      {item.name}
      {quantity}
      {item.price.toFixed(2)}
    </div>
  );
};
