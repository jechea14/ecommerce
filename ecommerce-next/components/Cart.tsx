import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import useSWR from "swr";
import { useRouter } from "next/router";
import { Product } from "../interfaces";

export default function Cart() {
  const { cartItems } = useShoppingCart();

  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <CartItem id={item.id} quantity={item.quantity} />
        </div>
      ))}
    </div>
  );
}
