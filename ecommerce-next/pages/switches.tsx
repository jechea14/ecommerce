import React, { useState } from "react";
import useSWR from "swr";
import { Product } from "../interfaces";
import { Container, Loader } from "@mantine/core";
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
  const { data, error, isLoading } = useSWR<Product[]>(
    () => `/api/collections`,
    fetcher
  );
  const [filterTags, setFilterTags] = useState(Array<string>);
  if (error) return <div>{error.message}</div>;
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-full">
        <Loader variant="dots" />
      </div>
    );

  const filterToSwitches = data?.filter(
    (item) => item.productType === "Switch"
  );

  const filterSwitches = filterToSwitches?.filter((node) =>
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
      <Container size="xl" className="space-y-4 md:px-3">
        <h1 className="text-xl text-center uppercase my-8 text-purple-700 font-medium">
          Switches
        </h1>
        <div className="md:flex md:space-x-10">
          <div className="flex mb-5 md:flex-col space-x-5 md:space-x-0 md:min-w-fitmd:pr-4">
            <h2>Switch Type</h2>
            {switchCategories?.map((switchCategory) => (
              <label key={switchCategory}>
                <input
                  type="checkbox"
                  onChange={filterHandler}
                  value={switchCategory}
                  className="mr-2"
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
        </div>
      </Container>
    </main>
  );
}
