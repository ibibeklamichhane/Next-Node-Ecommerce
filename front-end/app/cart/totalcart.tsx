import React from "react";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "@/features/cart/hooks";
import { updateQuantity, removeItem } from "@/features/cart/cartslice";

function TotalCart() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const calculateSubtotal = (price: number, quantity: number) => {
    return (price * quantity).toFixed(2);
  };

  const calculateTotal = () => {
    return cartItems
      .reduce(
        (total, item) =>
          total + (item.price as number) * (item.quantity as number),
        0
      )
      .toFixed(2);
  };

  const handleBuy = async() => {
    const totalAmount = parseFloat(calculateTotal()) * 100;
    console.log("Buy cart", cartItems);

    const payload = {
      
      return_url: process.env.NEXT_PUBLIC_SUCCESS_URL,
      website_url: process.env.NEXT_PUBLIC_WEBSITE_URL,
      amount: totalAmount,
      purchase_order_id: "test12",
      purchase_order_name: "test",
      customer_info: {
        name: "Khalti Bahadur",
        email: "example@gmail.com",
        phone: "9800000123",
      },
    };

    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}`,payload);
    console.log(response);
    if (response) {
      window.location.href = `${response?.data?.data?.payment_url}`;

    }


  };

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md border border-gray-500 mt-6">
        <div className="flex flex-col  text-black">
          <h1 className="font-semibold text-xl mb-4">Cart Total</h1>

          <div className="font-regular text-md flex flex-col mb-6 cursor-pointer gap-y-2">
            <p>
              Sub Total : $
              {cartItems
                .reduce(
                  (total, item) =>
                    total + (item.price as number) * (item.quantity as number),
                  0
                )
                .toFixed(2)}{" "}
            </p>
            <p>Shipping : 0</p>
            <p>
              Total : $
              {cartItems
                .reduce(
                  (total, item) =>
                    total + (item.price as number) * (item.quantity as number),
                  0
                )
                .toFixed(2)}
            </p>
          </div>
          <button
            type="submit"
            className=" flex justify-center w-fit px-4 bg-red-500 text-white  py-2 rounded"
            onClick={handleBuy}
          >
            Process to checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default TotalCart;
