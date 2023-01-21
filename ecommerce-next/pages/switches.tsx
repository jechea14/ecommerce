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

const switchCategories = ["Linear", "Tactile", "Clicky"];

export default function Switches() {
  const { data, error } = useSWR<Product[]>(() => `/api/collections`, fetcher);
  const [filterTags, setFilterTags] = useState(Array<string>);
  if (error) return <div>{error.message}</div>;
  if (!data)
    return (
      <div className="flex justify-center items-center h-full">
        <Loader variant="dots" />
      </div>
    );

  const filterSwitches = data.filter((node) =>
    filterTags.length > 0
      ? filterTags.every((filterTag) => node.switchType?.includes(filterTag))
      : data
  );

  const filterHandler = (event: any) => {
    if (event.target.checked) {
      setFilterTags([...filterTags, event.target.value]);
    } else {
      setFilterTags(
        filterTags.filter((filterTag) => filterTag !== event.target.value)
      );
    }
  };
  return (
    <main>
      <div className="flex flex-col">
        {switchCategories?.map((switchCategory) => (
          <label key={switchCategory}>
            <input
              type="checkbox"
              onChange={filterHandler}
              value={switchCategory}
            />
            {switchCategory}
          </label>
        ))}
      </div>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filterSwitches?.map((cate) => (
          <Card key={cate.id} item={cate} />
        ))}
      </div>
    </main>
  );
}
