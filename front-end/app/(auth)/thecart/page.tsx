'use client'
import React from 'react';
import { useAppSelector, useAppDispatch } from "@/features/cart/hooks";



const Cart: React.FC = () => {
  const cartItems = useAppSelector(state => state.cart.items);
  console.log('Cart items:', cartItems);

  return (
    <div className="text-black">
      <h2>Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );

};

export default Cart;
