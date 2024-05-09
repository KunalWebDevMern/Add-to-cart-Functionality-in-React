import React from "react";
import { useCart } from "../Context/CartProvider";
import CartItem from "./CartItem";

function Cart() {
  const { cart } = useCart();
  if (cart.length === 0) return <h3>No items Found 😒</h3>;
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-[0.1rem] sm:p-[1rem]">
      <h2 className=" font-[600] mb-[2.5rem]">Shopping Cart</h2>
      <div>
        {cart.map((cartItem) => (
          <CartItem {...cartItem} key={cartItem.id} />
        ))}
      </div>
      <h3 className="text-[20px] sm:text-[24px]">Total Price : &#8377; {totalPrice} </h3>
    </div>
  );
}

export default Cart;
