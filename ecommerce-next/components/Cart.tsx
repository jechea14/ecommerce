import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import useSWR from "swr";
import { Product } from "../interfaces/index";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Cart() {
  const { cartItems } = useShoppingCart();
  const { data, error, isLoading } = useSWR<Product[]>(
    () => `/api/collections`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  return (
    <div className="space-y-7">
      {cartItems.length > 0 ? (
        <div>
          <div>
            Subtotal: $
            {cartItems
              .reduce((total, cartItem) => {
                const item = data?.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
              .toFixed(2)}
          </div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <CartItem id={item.id} quantity={item.quantity} />
            </div>
          ))}
        </div>
      ) : (
        <div>Cart is empty</div>
      )}
    </div>
  );
}
