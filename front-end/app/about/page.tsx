import React from "react";
import Image from "next/image";
import about from "@/public/assets/about.svg";

function Page() {
  return (
    <>
   
    <div className="container mx-auto px-4 ">
      
    <h1 className="text-black text-4xl font-semibold mt-10">Our Story</h1>
      <div className="flex flex-col md:flex-row items-center gap-8">

        <div className="md:w-1/2 mt-[-40]">

          <p className="text-gray-700 leading-relaxed">
            Launched in 2024, Exclusive is South Asias premier online shopping marketplace with an active presence in Nepal. Supported by a wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
          </p>

          <p className="text-gray-700 leading-relaxed mt-10">
          Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
          </p>
        </div>

        
        <div className="md:w-1/2">
          <Image 
            src={about} 
            alt="About Exclusive" 
            width={500} 
            height={500} 
            className=" h-auto"
          />
        </div>
      </div>
    </div>
    </>
  );
}

export default Page;