import React from "react";
import { Product } from "../interfaces/index";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  item: Product;
};

export const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="border border-slate-700 rounded-lg pb-4 bg-slate-800 space-y-3 ">
      <div className="relative overflow-hidden">
        <Image
          src={item.image[0]}
          alt={item.name}
          width={500}
          height={500}
          className="rounded-tl-lg rounded-tr-lg"
        />
      </div>
      <div className="flex flex-col justify-between">
        <Link
          href={`/collections/${item.slug}`}
          as={`/collections/${item.slug}`}
          key={item.id}
        >
          {item.name}
        </Link>
        <strong className="text-lg">${item.price.toFixed(2)}</strong>
      </div>
    </div>
  );
};
