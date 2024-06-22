'use client';
import Card from "@/components/card/card";
import CardOutline from "@/components/card/cardOutline";
import { url } from "inspector";
import useSWR from "swr";
import CategoryList from "../products/categories/page";
import BestSelling from "../products/bestsellings/page";
import CustomButton from '@/components/button/button'; // Import your CustomButton component


interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}


export default function GetProduct() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data:products, error, isLoading } = useSWR <Product[]>("https://fakestoreapi.com/products?limit=4", fetcher,{ refreshInterval: 10000 });

  if (error) {
    // Handle the error case
    return <div>Failed to load products: {error.message}</div>;
  }

  if (isLoading) return <div>loading...</div>;

  if (!products) return <div>No data available</div>; // Add this line to handle undefined data

  console.log("result", products);

  return (
    <>

    <CardOutline
     
     title ="Todays"
     subtitle="Flash Sales"
    
    />
  

  <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize"> Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            product={{
              id: product.id,
              name: product.title,
              discountPercentage: 10, // You may need to calculate this or get it from the API
              discountedPrice: product.price * 0.9, // Assuming a 10% discount
              Price: product.price,
              image: product.image,
              rating: product.rating.rate,
            }}
          />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <CustomButton text="View all products" className="text-white px-6 py-2 bg-red-700 w-fit" />
      </div>
    </div>

      <CategoryList/>
      <BestSelling/>

    
      </>
  );
}