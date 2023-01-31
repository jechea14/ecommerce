import React from "react";
import { Product } from "../interfaces/index";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  item: Product;
};

export const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="pb-4 md:w-52">
      <Link
        href={`/collections/${item.slug}`}
        as={`/collections/${item.slug}`}
        key={item.id}
      >
        <div className="space-y-3">
          <div className="relative overflow-hidden h-48">
            <Image
              src={item.image[0]}
              alt={item.name}
              width={208}
              height={100}
            />
          </div>
          <div className="flex flex-col justify-between text-center px-1 ">
            {item.name}
            <strong className="text-lg">${item.price.toFixed(2)}</strong>
          </div>
        </div>
      </Link>
    </div>
  );
};
