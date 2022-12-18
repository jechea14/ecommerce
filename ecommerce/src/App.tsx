import { useState } from 'react'
import {useQuery} from 'react-query'
import { ProductData } from "./utils/data";
import { Card } from './components/Card';

// export type ProductType = {
//   id: number
//   category: string
//   description: string
//   image: string
//   price: number
//   title: string
//   amount: number
// }

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
      <div className='grid gap-4 grid-cols-2'>
        {
          // data?.map(product => <p>{product.title}</p>)
          ProductData.map((product) => (
            <div>
              <Card 
              key={product.id}
              item={product}
              />
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
