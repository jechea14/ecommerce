import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "../components/CartItem";
import useSWR from "swr";
import { Product } from "../interfaces/index";
import { Container } from "@mantine/core";

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
    <main>
      <Container size="xl" className="space-y-7 p-4">
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item) => (
              <div key={item.id}>
                <CartItem id={item.id} quantity={item.quantity} />
              </div>
            ))}
            <div className="pt-5 border-t-2 text-right font-semibold text-lg">
              Subtotal: $
              {cartItems
                .reduce((total, cartItem) => {
                  const item = data?.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
                .toFixed(2)}
            </div>
          </div>
        ) : (
          <div>Cart is empty</div>
        )}
      </Container>
    </main>
  );
}
