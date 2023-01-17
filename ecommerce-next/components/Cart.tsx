import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import useSWR from "swr";
import { useRouter } from "next/router";
import { Product } from "../interfaces";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  console.log("data ", data);
  return data;
};

export default function Cart() {
  const { cartItems } = useShoppingCart();

  const { data, error } = useSWR(() => `/api/collections`, fetcher);

  return (
    <div>
      {/* {cartItems.map((item) => (
        <div key={item.id}>
          {item.id} {item.quantity}
        </div>
      ))} */}
      {/* {data?.map((item: Product) => {
        if (cartItems[item.id] !== 0) {
          return <CartItem data={item} />;
        }
      })} */}
    </div>
  );
}
