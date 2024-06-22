
'use client'
// pages/category/[category].tsx
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import Card from '@/components/card/card'; // Adjust the import path as needed
import CustomButton from '@/components/button/button'; // Import your CustomButton component
import { useParams } from 'next/navigation'

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

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const CategoryPage: React.FC = () => {
  const router = useRouter();
  const { category } =  useParams();;

  const { data: products, error } = useSWR<Product[]>(
    category ? `https://fakestoreapi.com/products/category/${category}` : null,
    fetcher
  );

  if (error) return <div>Failed to load products</div>;
  if (!products) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">{category} Products</h1>
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
  );
};

export default CategoryPage;