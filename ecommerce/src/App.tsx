import { useState } from 'react'
import {useQuery} from 'react-query'
import { ProductData } from "./utils/data";


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

  // const getProducts = async (): Promise<ProductType[]> => await (await fetch('https://fakestoreapi.com/products')).json()
  // const {data, isLoading, error} = useQuery<ProductType[]>('products', getProducts)
  const allCats = ProductData.map(item=>item.switchType)
  const categories = (allCats.filter((item, i) => {
    return allCats.indexOf(item) === i
  }))
  console.log(categories)


  return (
    <div className="">
      <div className='flex'>
        {
          // data?.map(product => <p>{product.title}</p>)
          ProductData.map((product) => (
            <div key={product.id}>
              <h1>{product.name}</h1>
              <h1>${product.price.toFixed(2)}</h1>
              <img src={product.image[0]}/>
            </div>
          ))
        }
      </div>
      {
        categories.map((type)=>(
          <div>
            <input type='checkbox'  name={type}/>
            <label>{type}</label>
          </div>
        ))
      }
    </div>
  )
}

export default App
