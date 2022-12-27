import { Product } from "../interfaces";
import {server} from '../config/index'
import { Card } from '../components/Card';

type ProductProps = {
  products: Array<Product>
}

export default function Home({products}: ProductProps) {
    // const getProducts = async (): Promise<ProductType[]> => await (await fetch('https://fakestoreapi.com/products')).json()
  // const {data, isLoading, error} = useQuery<ProductType[]>('products', getProducts)
  // const allCats = ProductData.map(item=>item.switchType)
  // const categories = (allCats.filter((item, i) => {
  //   return allCats.indexOf(item) === i
  // }))
  // console.log(categories)
  return (
    <div className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
    {
      products?.map((product: Product) => (
          <Card 
            key={product.id}
            item={product}
          />
      ))
    }
  </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/collections`)
  const products: ProductProps = await res.json()

  return {
    props: {
      products,
    }
  }
}

