'use client'
import React from 'react'
import ComputerIcon from '@/public/assets/icons/computerIcon'
import MobileIcon from '@/public/assets/icons/mobileIcon'
import SmartIcon from '@/public/assets/icons/smartwatchIcon'


type Category = {
    icon: React.FC;
    name: string;
  };
  

  
  const CategoryCard: React.FC<{ icon: React.FC; name: string }> = ({ icon: Icon, name }) => (
    <div className="text-black overflow-hidden w-40 h-40 pt-3 border rounded-md border-gray-300 relative flex flex-col justify-center items-center">
      <div className="flex justify-center items-center">
        <Icon />
      </div>
      <span className="mt-2 text-md font-medium">{name}</span>
    </div>
  );

export default CategoryCard

/* 


*/