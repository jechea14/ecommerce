import { ProductData } from "../utils/data";
import { Card } from '../components/Card';

export function HomePage() {
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