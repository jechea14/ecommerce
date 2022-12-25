import { useState } from 'react'
import {useQuery} from 'react-query'
import { ProductData } from "../utils/data";
import { Navbar } from '../components/Navbar';
import {HomePage} from './HomePage'
import Container from '@mui/material/Container';


export default function Home() {
    // const getProducts = async (): Promise<ProductType[]> => await (await fetch('https://fakestoreapi.com/products')).json()
  // const {data, isLoading, error} = useQuery<ProductType[]>('products', getProducts)
  // const allCats = ProductData.map(item=>item.switchType)
  // const categories = (allCats.filter((item, i) => {
  //   return allCats.indexOf(item) === i
  // }))
  // console.log(categories)
  return (

    <Container>
      <Navbar/>
      <HomePage/>
    </Container>
  )
}

