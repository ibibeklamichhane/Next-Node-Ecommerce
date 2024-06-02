import React from "react";

interface CardOutlineProps {

    title: string;
    subtitle: string;
  }

  const CardOutline: React.FC<CardOutlineProps> = ({

    title,
    subtitle,
  }) => {
  return (
    <>
    <div className = "mt-4 mb-2">
      <div className="flex gap-2 items-center">
        <div className="bg-red-500 py-2 w-6 h-14 rounded-md mt-2 ml-4"> </div>
          <h1 className="text-red-500 ml-4 font-bold text-2xl">{title} </h1>
        
      </div>
      <h1 className="text-black text-4xl font-semibold ml-4 mt-4">
        {subtitle}
      </h1>
      </div> 
    </>
  );
}

export default CardOutline;
