"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import GoogleIcon from "@/public/assets/icons/googleIcon";
import Link from "next/link";
import { registerUser } from "@/app/api/login";

// Define the validation schema using Zod
const schema = z.object({
  firstname: z.string().min(1, "Name is required"),
  lastname: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),

  mobile: z
  .string()
  .min(10, "Phone number must be at least 10 digits")
  .transform((val) => Number(val)), // Transform the string to a number


  password: z.string().min(6, "Password must be at least 6 characters"),
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

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await registerUser(data);
      console.log("User registered successfully:", response);
      // Handle successful registration (e.g., redirect to login page)
    } catch (error) {
      console.error("Error registering user:", error);
      // Handle registration error (e.g., show error message)
    }
  };

  return (
    <div className="w-4/5 text-black pl-32  ">
      <h1 className="font-semibold text-4xl w-fit">Create an account</h1>

      <p className="font-normal text-md mt-3"> Enter your details below</p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-8 mt-8"
      >
        <div>
          <input
            type="text"
            placeholder="Name"
            {...register("firstname")}
            className="border-b border-gray-300 outline-none px-2 py-1 w-80  text-black gap-y-4"
          />
          {errors.firstname && (
            <span className="text-red-500">{errors.firstname.message}</span>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Name"
            {...register("lastname")}
            className="border-b border-gray-300 outline-none px-2 py-1 w-80  text-black gap-y-4"
          />
          {errors.lastname && (
            <span className="text-red-500">{errors.lastname.message}</span>
          )}
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="border-b border-gray-300 outline-none px-2 py-1 w-80 text-black gap-y-4 "
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div>
          <input
            type="number"
            placeholder="Phone"
            {...register("mobile")}
            className="border-b border-gray-300 outline-none px-2 py-1 w-80 text-black gap-y-4"
          />
          {errors.mobile && (
            <span className="text-red-500">{errors.mobile.message}</span>
          )}
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="border-b border-gray-300 outline-none px-2 py-1 w-80 text-black gap-y-4"
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <div className="flex flex-col ">
          <button
            type="submit"
            className="bg-red-500 text-white py-2 px-4 rounded w-80 gap-y-4"
          >
            Create Account
          </button>
          <button
            type="submit"
            className="bg-white text-black py-2 px-4 rounded w-80 gap-y-4 flex items-center justify-center border-2 border-gray-300 mt-4"
          >
            <GoogleIcon />
            <span className="ml-2">Signup With Google</span>
          </button>
          <p className="text-black  ml-6 mt-4">
            Already have account?
            <Link href="/login" className="text-gray-700 underline pl-2">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
