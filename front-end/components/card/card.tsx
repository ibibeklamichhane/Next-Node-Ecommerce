" use client ";

import React from "react";
import FavouriteIcon from "@/public/assets/icons/favourites";
import ViewIcon from "@/public/assets/icons/viewIcon";
import CustomButton from '@/components/button/button';
import Image from 'next/image';
//import controller from "@/public/assets/controller.png";
//import coat from "@/public/assets/coat.png"
import Link from "next/link";
import ReactStars from 'react-stars';
import { useDispatch } from 'react-redux';
import {addItem} from "@/features/cart/cartslice"
import { AppDispatch } from '@/features/store';

interface CardProps {
  product: {
    id: number;
    name: string;
    discountPercentage: number;
    discountedPrice: number;
    Price: number;
    image: string;
    rating: number;
  };
}

const Card: React.FC<CardProps> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    console.log('Adding to cart:', product);
    dispatch(addItem({
      id:product.id,
      name: product.name,
      price: product.discountedPrice,
      quantity:1

      
    }));
    console.log('Action dispatched');
  }; 


  return (
    <>
    <div className="flex flex-col "> 
    <div className="overflow-hidden w-fit h-72 pt-3 border-r rounded-xl bg-gray-200 border-gray-300 relative">
      <div className="pl-2">
        <CustomButton text={`-${product.discountPercentage}%`} className="text-white px-6 py-2 bg-red-700 w-fit" />
      </div>
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <FavouriteIcon className="bg-white rounded-2xl" />
        <ViewIcon className="bg-white rounded-2xl" />
      </div>
      <div className="flex flex-col items-center px-6 py-2">
        <Image src={product.image} alt="Card Image" width={200} height={200} />
      </div>
      <div className="flex justify-center mt-3"></div>

    </div>
          <div className="flex flex-col items-center mt-2">
          <h1 className="text-xl font-semibold text-black">{product.name}</h1>
          <div className="flex items-center">
            <p className="text-[#DB4444] mr-4">${product.discountedPrice}</p>
            <span className="text-[#7D8184] font-medium">${product.Price}</span>
          </div>
          <ReactStars count={5} size={24} color2={'#ffd700'} value={product.rating} edit={false} />
          <CustomButton 
            text="Add to Cart" 
            className="text-white px-6 py-2 bg-red-700 w-fit mt-2"
            onClick={handleAddToCart}
          
          />
        </div>
    </div>
        </>
  );
};


 
  <CustomButton text="view all products" className="text-white px-6 py-2 bg-red-700 w-fit" />


  
 

export default Card;

/* 

import React from 'react';
import ComputerIcon from '@/public/assets/icons/computerIcon';
import MobileIcon from '@/public/assets/icons/mobileIcon';
import SmartIcon from '@/public/assets/icons/smartwatchIcon';

type Category = {
  icon: React.FC;
  name: string;
};

const categories: Category[] = [
  { icon: ComputerIcon, name: 'Computer' },
  { icon: MobileIcon, name: 'Mobile' },
  { icon: SmartIcon, name: 'Smart' },
];

const CategoryCard: React.FC<{ icon: React.FC; name: string }> = ({ icon: Icon, name }) => (
  <div className="text-black overflow-hidden w-40 h-40 pt-3 border rounded-md border-gray-300 relative flex flex-col justify-center items-center">
    <div className="flex justify-center items-center">
      <Icon />
    </div>
    <span className="mt-2 text-md font-medium">{name}</span>
  </div>
);

const CategoryList: React.FC = () => (
  <div className="flex space-x-4">
    {categories.map((category, index) => (
      <CategoryCard key={index} icon={category.icon} name={category.name} />
    ))}
  </div>
);

export default CategoryList;

*/