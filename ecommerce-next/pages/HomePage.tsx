import { ProductData } from "../utils/data";
import { Card } from '../components/Card';
import { Product } from "../interfaces";

type ProductProps = {
  product: Array<Product>
}

export default function HomePage({product}: ProductProps) {
    return (
        <div className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {
          product?.map((product) => (
              <Card 
                key={product.id}
                item={product}
              />
          ))
        }
      </div>
    )
}