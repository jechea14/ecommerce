import React from "react";
import { Product } from "../../../interfaces";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import { useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useShoppingCart } from "../../../context/ShoppingCartContext";

type ProductProps = {
  handleAddToCart: (clickedItem: Product) => void;
};

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
    <main className="md:flex pt-4">
      <div>
        <Carousel withIndicators={true}>
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

      <div className="flex flex-col space-y-4">
        <h1 className="text-xl pt-4">{data.name}</h1>
        <h1 className="text-xl">
          <strong>${data.price.toFixed(2)}</strong>
        </h1>
        <h2>{`Size: ${data.amount} in each pack`}</h2>

        <div className="flex space-x-4 flex-wrap">
          <div className="">
            <button className="bg-gray-500 text-slate-100 py-1 px-5">-</button>
            <button
              className="bg-gray-500 text-slate-100 py-1 px-5"
              onClick={() => addToCart(data.id)}
            >
              +
            </button>
          </div>
          <button className="bg-gray-500 text-slate-100 py-1 px-5">
            Add to cart
          </button>
        </div>

        <p>{data.description}</p>
        <h2>
          <strong>Features:</strong>
        </h2>
        <div className="pl-8">
          {data.feature?.map((feat: string, i: number) => {
            return <li key={i}>{feat}</li>;
          })}
        </div>
      </div>
    </main>
  );
};

// export const getStaticProps = async (context: any) => {
//     const res = await fetch(`${server}/api/collections/${context.params.id}`)
//     const product = await res.json()

//     return {
//         props: {
//             product
//         }
//     }
// }

// export const getStaticPaths = async () => {
//     const res = await fetch(`${server}/api/collections`)
//     const products = await res.json()
//     const ids = products.map((product: { slug: ProductProps }) => product.slug)
//     const paths = ids.map((id: { toString: () => string }) => ({params: {id: id.toString()}}))

//     return {
//         paths,
//         fallback: false
//     }
// }

export default Collection;
