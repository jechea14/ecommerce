import { Product } from "../../../interfaces"
import {server} from '../../../config/index'
import Image from "next/image"
import { Carousel } from '@mantine/carousel';

type ProductProps = {
    product: Product
}

import React from 'react'

const collection = ({product}: ProductProps) => {
  return (
    <main className="md:flex">
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

        <div>
            <h1>{product.name}</h1>
            <h1><strong>${product.price.toFixed(2)}</strong></h1>
            <h2>{`Size: ${product.amount} Set`}</h2>

            <h3>{product.description}</h3>


            <div>
                <h2>Features</h2>
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
    const product: ProductProps = await res.json()
    
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

export default collection