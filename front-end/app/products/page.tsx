// pages/index.tsx
import React from "react";
import Card from "@/components/card/card";
import Iphone from "@/public/assets/Iphone.svg";
import CardOutline from "@/components/card/cardOutline";
import CategoryList from "./categories/page";
import BestSelling from "./bestsellings/page";


const ProductPage = () => {
  const cardData = {
    title: "Card Title",
    description: "This is the card description.",
    image: Iphone,
  };

  return (
    <>

    <CardOutline 
     
     title ="Todays"
     subtitle="Flash Sales"
    
    />
  

      <Card />

      <hr className="border-t-2 border-gray-300 my-4 mt-4 mb-12" />

      <CategoryList/>
      <BestSelling/>

    
      </>
   
  );
};

export default ProductPage;
