import { Product } from "../interfaces";
import { Card } from "../components/Card";
import useSWR from "swr";
import { Loader } from "@mantine/core";
import HeroSection from "../components/HeroSection";
import { Container } from "@mantine/core";

export const fetcher = async (url: string) => {
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
    <main>
      <Container size="xl" className="space-y-5">
        <div className="mt-5">
          {" "}
          <HeroSection />
        </div>

        <h1 className="text-xl text-center uppercase my-8 text-purple-700">
          All Products
        </h1>
        <section className="grid gap-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:flex xl:flex-wrap">
          {data?.map((product: Product) => (
            <Card key={product.id} item={product} />
          ))}
        </section>
      </Container>
    </main>
  );
}
