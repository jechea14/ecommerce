import React from "react";
import { Product } from "../../../interfaces";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useShoppingCart } from "../../../context/ShoppingCartContext";
import { Container } from "@mantine/core";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

const Collection = () => {
  const { addToCart } = useShoppingCart();
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.id && `/api/collections/${query.id}`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <main>
      <Container
        size="xl"
        className="md:flex pt-4 md:space-x-12 md:justify-center"
      >
        <div className="max-w-md md:w-full">
          <Carousel
            sx={{ maxWidth: 1000 }}
            withIndicators={true}
            styles={{
              control: {
                "&[data-inactive]": {
                  opacity: 0,
                  cursor: "default",
                },
              },
            }}
          >
            {data.image.map((image: string, i: number) => {
              return (
                <Carousel.Slide key={i}>
                  <Image
                    src={image}
                    alt={`${data.name} image ${i}`}
                    width={500}
                    height={500}
                  ></Image>
                </Carousel.Slide>
              );
            })}
          </Carousel>
        </div>

        <div className="flex flex-col space-y-4 max-w-sm">
          <h1 className="text-xl">{data.name}</h1>
          <h1 className="text-xl">
            <strong>${data.price.toFixed(2)}</strong>
          </h1>
          {data.amount == undefined ? null : (
            <h2>{`Size: ${data.amount} in each pack`}</h2>
          )}

          <div className="flex space-x-4 flex-wrap">
            <button
              className="bg-purple-600 hover:bg-purple-500 hover:transition text-slate-100 py-3 px-5 w-full uppercase"
              onClick={() => addToCart(data.id)}
            >
              Add to cart
            </button>
          </div>

          <p className="">{data.description}</p>
          <h2>
            <strong>Features:</strong>
          </h2>
          <div className="pl-8">
            {data.feature?.map((feat: string, i: number) => {
              return <li key={i}>{feat}</li>;
            })}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Collection;
