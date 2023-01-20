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

const switchCategories = [
  {
    id: 1,
    category: "Linear",
  },
  {
    id: 2,
    category: "Tactile",
  },
  {
    id: 3,
    category: "Clicky",
  },
];

export default function Switches() {
  const { data, error } = useSWR<Product[]>(() => `/api/collections`, fetcher);
  console.log(data);
  if (error) return <div>{error.message}</div>;
  if (!data)
    return (
      <div className="flex justify-center items-center h-full">
        <Loader variant="dots" />
      </div>
    );

  const [switches, setSwitches] = useState(Array<Product>);
  const [checked, setChecked] = useState([]);

  const filterSwitches = data?.filter((item) => item.productType === "Switch");
  //   const linearSwitches = filterSwitches.filter(
  //     (item) => item.switchType === "Linear"
  //   );
  //   const tactileSwitches = filterSwitches.filter(
  //     (item) => item.switchType === "Tactile"
  //   );
  //   const clickySwitches = filterSwitches.filter(
  //     (item) => item.switchType === "Clicky"
  //   );
  return (
    <main>
      <div className="flex flex-col">
        {switchCategories?.map((switchCategory, index) => (
          <div key={index}>
            <input type="checkbox" />
            <span>{switchCategory.category}</span>
          </div>
        ))}
      </div>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filterSwitches?.map((product: Product) => (
          <Card key={product.id} item={product} />
        ))}
      </div>
    </main>
  );
}
