// outline functional component


import Image from "next/image";
import sideImage from "@/public/assets/Side Image.png"


function login() {

return (
<>
<div className="text-black">
<div className="flex justify-between items-center mt-10">
  <h1 className="font-medium text-xl">Wishlist <span>(4)</span></h1>
  <button className="border-2 border-gray-200 py-3 px-7 rounded-md font-semibold">Move All to Bag</button>
</div>


</div>

  </>
)
 }

 export default login 

 
/*
 'use client'

 import React, { useState } from 'react';

const CheckoutForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., save to state or send to server)
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name"
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="City"
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="text"
        name="zipCode"
        value={formData.zipCode}
        onChange={handleChange}
        placeholder="Zip Code"
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="text"
        name="country"
        value={formData.country}
        onChange={handleChange}
        placeholder="Country"
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        Save Shipping Info
      </button>
    </form>
  );
};

export default CheckoutForm; 

*/