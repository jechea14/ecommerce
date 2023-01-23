import { Product } from "../interfaces";
import { Card } from "../components/Card";
import useSWR from "swr";
import { Loader } from "@mantine/core";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Home() {
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

  return (
    <main className="space-y-5">
      <h1 className="text-xl">All Products</h1>
      <section className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.map((product: Product) => (
          <Card key={product.id} item={product} />
        ))}
      </section>
    </main>
  );
}
