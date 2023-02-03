import React, { useState } from "react";
import useSWR from "swr";
import { Product } from "../interfaces";
import { Loader } from "@mantine/core";
import { Card } from "../components/Card";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Keycaps() {
  const { data, error, isLoading } = useSWR<Product[]>(
    () => `/api/collections`,
    fetcher
  );
  if (error) return <div>{error.message}</div>;
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-full">
        <Loader variant="dots" />
      </div>
    );

  const filterToKeycaps = data?.filter((item) => item.productType === "Keycap");
  return (
    <main className="space-y-4">
      <h1 className="text-xl text-center uppercase text-purple-300 my-8">
        Keycaps
      </h1>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filterToKeycaps?.map((keycap) => (
          <Card key={keycap.id} item={keycap} />
        ))}
      </div>
    </main>
  );
}
