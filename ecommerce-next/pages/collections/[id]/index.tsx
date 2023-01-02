import { Product } from "../../../interfaces"
import {server} from '../../../config/index'
import Image from "next/image"
import { Carousel } from '@mantine/carousel';
import { useState } from "react";

type ProductProps = {
    product: Product
}

import React from 'react'

const Collection = ({product}: ProductProps) => {
  const [amount, setAmount] = useState(1)

  const decreaseAmount = () => {
    if(amount > 0) {
      setAmount(amount - 1)
    }
    else{
      setAmount(0)
    }
  }

  const increaseAmount = () => {
    setAmount(amount + 1)
  }

  return (
    <main className="md:flex pt-4">
      <div>
        <Carousel withIndicators={true}>
          {
            product.image.map((image, i) => {
              return (
                <Carousel.Slide key={i}>
                    <Image src={image} alt={`${product.name} image ${i}`} width={500} height={500}></Image>
                </Carousel.Slide>
              )
            })
          }
        </Carousel>
      </div>

      <div className="flex flex-col space-y-4">
        <h1 className="text-xl pt-4">{product.name}</h1>
        <h1 className="text-xl"><strong>${product.price.toFixed(2)}</strong></h1>
        <h2>{`Size: ${product.amount} Set`}</h2>

        <div className="flex space-x-4 flex-wrap">
          <div className="">
            <button className="bg-gray-500 text-slate-100 py-1 px-5">-</button>
            <input className="text-center" type="number" min="1" size={2} defaultValue={1}/>
            <button className="bg-gray-500 text-slate-100 py-1 px-5">+</button>
          </div>
          <button className="bg-gray-500 text-slate-100 py-1 px-5">Add to cart</button>
        </div>

        <p>{product.description}</p>
        <h2><strong>Features:</strong></h2>
        <div className="pl-8">
          {
            product.feature?.map((feat, i) => {
              return (
                <li key={i}>
                  {feat}
                </li>
              )
            })
          }
        </div>
      </div>
    </main>
  )
}


export const getStaticProps = async (context: any) => {
    const res = await fetch(`${server}/api/collections/${context.params.id}`)
    const product = await res.json()
    
    return {
        props: {
            product
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/collections`)
    const products = await res.json()
    const ids = products.map((product: { slug: ProductProps }) => product.slug)
    const paths = ids.map((id: { toString: () => string }) => ({params: {id: id.toString()}}))
    
    return {
        paths,
        fallback: false
    }
}

export default Collection