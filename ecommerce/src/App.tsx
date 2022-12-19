import { useState } from 'react'
import {useQuery} from 'react-query'
import {Routes, Route} from 'react-router-dom'
import { ProductData } from "./utils/data";
import { Navbar } from './components/Navbar';
import {Home} from '../pages/Home'
import {Switches} from '../pages/Switches'
import {Keycaps} from '../pages/Keycaps'
import {Keyboards} from '../pages/Keyboards'
import Container from '@mui/material/Container';

function App() {

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

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/switches' element={<Switches/>} />
        <Route path='/keyboards' element={<Keyboards/>} />
        <Route path='/keycaps' element={<Keycaps/>} />
      </Routes>
    </Container>
  )
}

export default App
