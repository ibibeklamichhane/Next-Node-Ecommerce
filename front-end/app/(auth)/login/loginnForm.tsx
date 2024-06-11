'use client'

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import GoogleIcon from '@/public/assets/icons/googleIcon';
import Link from 'next/link';

// Define the validation schema using Zod
const schema = z.object({

  email: z.string().email('Invalid email address'),

  password: z.string().min(6, 'Password must be at least 6 characters'),
});

// Define the types for the form values
type FormValues = z.infer<typeof schema>;

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div className="w-4/5 text-black pl-32 mt-16 ">
      <h1 className="font-semibold text-4xl w-fit">
      Log in to Exclusive      </h1>

      <p className="font-normal text-md mt-3"> Enter your details below</p>


    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-8 mt-8">

      <div>
        <input
          type="email"
          placeholder="Email"
          {...register('email')}
          className="border-b border-gray-300 outline-none px-2 py-1 w-80 text-black gap-y-4 "
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      </div>
  
      <div>
        <input
          type="password"
          placeholder="Password"
          {...register('password')}
          className="border-b border-gray-300 outline-none px-2 py-1 w-80 text-black gap-y-4"
        />
        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
      </div>
      <div className="flex items-center ">
      <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded w-fit gap-y-4" >
        Login 
      </button>

      <p className="text-red-500  ml-6 ">
      <Link href="/login" className=" underline pl-2">
      Forget password?
        </Link>
      </p>
 </div>


    </form>
    </div>
  );
};

export default LoginForm;