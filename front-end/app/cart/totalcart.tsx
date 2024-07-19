'use client'
import React from "react";
import { useState } from 'react';
import axios from "axios";
import { useAppSelector, useAppDispatch } from "@/features/cart/hooks";
import { updateQuantity, removeItem } from "@/features/cart/cartslice";

function TotalCart() {
  const [isLoading, setIsLoading] = useState(false);
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

  const handleBuy = async () => {
    setIsLoading(true); // Set loading to true
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

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}`, payload);

      if (response) {
        window.location.href = `${response?.data?.data?.payment_url}`;
      }
    } catch (error) {
      console.error("Checkout error:", error);
      // Handle error (e.g., show error message to user)
    } finally {
      setIsLoading(false); // Set loading to false after the process is complete
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
              Total : ${calculateTotal()}
            </p>
          </div>
          <button
            type="submit"
            className={`flex justify-center w-fit px-4 bg-indigo-900 text-white  py-2 rounded ${
          isLoading 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-indigo-950 hover:bg-indigo-600'
        } text-white transition-colors duration-300`}
            onClick={handleBuy}
            disabled={isLoading}
          >    
             
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              'checkout via Khalti'
            )}
          </button>
          {isLoading && (
            <div className="mt-2 text-xl text-indigo-900 animate-pulse ">
              Please wait, we are processing your checkout...
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TotalCart;
