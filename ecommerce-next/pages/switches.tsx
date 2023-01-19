import React from "react";
import useSWR from "swr";
import { Product } from "../interfaces";
import { Loader } from "@mantine/core";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Switches() {
  const { data, error } = useSWR<Product[]>(() => `/api/collections`, fetcher);

  if (error) return <div>{error.message}</div>;
  if (!data)
    return (
      <div className="flex justify-center items-center h-full">
        <Loader variant="dots" />
      </div>
    );

  return <div>switches</div>;
}
