import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";

export default function Cart() {
  const { cartItems } = useShoppingCart();

  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.id}>
          {item.id} {item.quantity}
        </div>
      ))}
    </div>
  );
}
