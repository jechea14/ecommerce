import { useState } from 'react'
import {useQuery} from 'react-query'

export type ProductType = {
  id: number
  category: string
  description: string
  image: string
  price: number
  title: string
  amount: number
}

function App() {

  const getProducts = async (): Promise<ProductType[]> => await (await fetch('https://fakestoreapi.com/products')).json()

  const {data, isLoading, error} = useQuery<ProductType[]>('products', getProducts)
  return (
    <div className="">
      {
        data?.map(product => <p>{product.title}</p>)
      }
    </div>
  )
}

export default App
