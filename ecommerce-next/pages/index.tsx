import { Product } from "../interfaces";
import { Card } from "../components/Card";
import useSWR from "swr";
import { Loader } from "@mantine/core";

type ProductProps = {
  products: Array<Product>;
};

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Home() {
  // const getProducts = async (): Promise<ProductType[]> => await (await fetch('https://fakestoreapi.com/products')).json()
  // const {data, isLoading, error} = useQuery<ProductType[]>('products', getProducts)
  // const allCats = ProductData.map(item=>item.switchType)
  // const categories = (allCats.filter((item, i) => {
  //   return allCats.indexOf(item) === i
  // }))
  // console.log(categories)

  const { data, error } = useSWR<Product[]>(() => `/api/collections`, fetcher);

  if (error) return <div>{error.message}</div>;
  if (!data)
    return (
      <div className="flex justify-center items-center h-full">
        <Loader variant="dots" />
      </div>
    );

  return (
    <main className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data?.map((product: Product) => (
        <Card key={product.id} item={product} />
      ))}
    </main>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/collections`)
//   const products: ProductProps = await res.json()

//   return {
//     props: {
//       products,
//     }
//   }
// }
