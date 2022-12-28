import { Product } from "../../../interfaces"
import {server} from '../../../config/index'

type ProductProps = {
    product: Product
}

import React from 'react'

const collection = ({product}: any) => {
    console.log(product)
  return (
    <div>collection</div>
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
    const ids = products.map((p: { slug: any }) => p.slug)
    const paths = ids.map((id: { toString: () => any }) => ({params: {id: id.toString()}}))
    
    return {
        paths,
        fallback: false
    }
}

export default collection