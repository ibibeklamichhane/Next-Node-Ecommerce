import React from "react";
import { useAppSelector, useAppDispatch } from "@/features/cart/hooks";
import { updateQuantity ,removeItem} from '@/features/cart/cartslice';



function TotalCart() {
    const cartItems = useAppSelector(state => state.cart.items);
    const dispatch = useAppDispatch();

    const calculateSubtotal = (price: number, quantity: number) => {
        return (price * quantity).toFixed(2);
      };
  return (

<>
<div className="bg-white shadow-md rounded-lg p-6 max-w-md border border-gray-500 mt-6">
  <div className="flex flex-col  text-black">
    <h1 className="font-semibold text-xl mb-4">Cart Total</h1>

    <div className="font-regular text-md flex flex-col mb-6 cursor-pointer gap-y-2">
      <p>Sub Total : ${cartItems.reduce((total, item) => 
  total + (item.price as number) * (item.quantity as number), 0
).toFixed(2)} </p>
      <p>Shipping  : 0</p>
      <p>Total  : ${cartItems.reduce((total, item) => 
  total + (item.price as number) * (item.quantity as number), 0
).toFixed(2)}</p>
    </div>
    <button type="submit" className= " flex justify-center w-fit px-4 bg-red-500 text-white  py-2 rounded">Process to checkout</button>




   
  </div>
</div>
</>


);
}

export default TotalCart;