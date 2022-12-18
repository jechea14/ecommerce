import { ProductData } from "../src/utils/data";
import { Card } from '../src/components/Card';

export function Home() {
    return (
        <div className='grid gap-4 grid-cols-2'>
        {
          // data?.map(product => <p>{product.title}</p>)
          ProductData.map((product) => (
              <Card 
              key={product.id}
              item={product}
              />
          ))
        }
      </div>
    )
}