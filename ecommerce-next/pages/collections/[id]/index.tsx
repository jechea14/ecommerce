import { Product } from "../../../interfaces"

type ProductProps = {
    product: Product
}

export default function Collections({product}: ProductProps) {
    return <div></div>
}

// export const getStaticProps = async (context: string) => {
//     const res = await fetch(`https://localhost:3000/api/collections/${context.params.id}`)
//     const product = await res.json()
  
//     return {
//       props: {
//         product
//       }
//     }
//   }

// export const getStaticPaths = async () => {
//     const res = await fetch(`https://localhost:3000/api/collections`)

//     const product = await res.json()
//     const ids = product.map(p => p.id)
//     const p

//     return {
//         paths: {params: {id: }}
//     }

// }