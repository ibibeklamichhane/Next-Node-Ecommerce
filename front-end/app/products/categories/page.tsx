
'use client'
import React from 'react'
import CategoryCard from '@/components/card/CategoryCard'
import ComputerIcon from '@/public/assets/icons/computerIcon'
import MobileIcon from '@/public/assets/icons/mobileIcon'
import SmartIcon from '@/public/assets/icons/smartwatchIcon'
import CardOutline from '@/components/card/cardOutline'


type Category = {
    icon: React.FC;
    name: string;
  };
  


const categories: Category[] = [
    { icon: ComputerIcon, name: 'Computer' },
    { icon: MobileIcon, name: 'Mobile' },
    { icon: SmartIcon, name: 'Smart' },
    { icon: ComputerIcon, name: 'Computer' },
    { icon: MobileIcon, name: 'Mobile' },
    { icon: SmartIcon, name: 'Smart' },
  ];
  

  const CategoryList: React.FC = () => (
    <>
     <CardOutline
     
     title='Categories' 
     subtitle='Browse By Category'
     
     />
    <div className="flex space-x-10 mt-12 mb-12">
      {categories.map((category, index) => (
        <CategoryCard key={index} icon={category.icon} name={category.name} />
      ))}
    </div>
    </>
  );
  
export default CategoryList