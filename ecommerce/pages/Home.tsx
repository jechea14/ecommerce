import { ProductData } from "../src/utils/data";
import { Card } from '../src/components/Card';

export function Home() {
    return (
        <div className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {
          ProductData?.map((product) => (
              <Card 
                key={product.id}
                item={product}
              />
          ))
        }
      </div>
    )
}