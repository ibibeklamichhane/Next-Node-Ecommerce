"use client";
import React from "react";
import { useForm } from "react-hook-form";
import CustomInput from "@/components/input/custominputt";
import CustomBreadCrumb from "@/components/breadcrumb/custombreadcrumb";
import SideCard from "./sidecard";
interface FormData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <>

      <div className="text-black">
      <CustomBreadCrumb
      link ="/"
            title="Home"
            list={[{ name: "My Account" }]}
            
          />

<div className="flex justify-between items-start gap-4 p-6">
<div className="w-1/3">
    <SideCard />
  </div>


  <div className="w-1/2 md:w-3/5 lg:w-2/3 bg-slate-50 px-16 rounded-lg py-4"  >
    <h1 className="text-red-500 text-xl font-semibold mb-4">Edit Your Profile</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <CustomInput
            label="First Name"
            name="name"
            type="text"
            register={register}
            errors={errors}
            required
            placeholder="Bibek"
            className="bg-[#F5F5F5] w-full"
          />
          <CustomInput
            label="Last Name"
            name="lname"
            register={register}
            errors={errors}
            required
            placeholder="Lamichhane"
            className="bg-[#F5F5F5] w-full"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <CustomInput
            label="Email"
            name="email"
            register={register}
            errors={errors}
            required
            placeholder="bibek@gmail.com"
            className="bg-[#F5F5F5] w-full"
          />
          <CustomInput
            label="Address"
            name="address"
            register={register}
            errors={errors}
            required
            placeholder="kathmandu"
            className="bg-[#F5F5F5] w-full"
          />
        </div>
        <div className="space-y-4">
          <CustomInput
            label="Password"
            name="password"
            type="password"
            register={register}
            errors={errors}
            required
            placeholder="Current password"
            className="bg-[#F5F5F5] w-full"
          />
          <CustomInput
            label="         "
            name="newPassword"
            type="password"
            register={register}
            errors={errors}
            required
            placeholder="New password"
            className="bg-[#F5F5F5] w-full"
          />
          <CustomInput
            label=""
            name="confirmPassword"
            type="password"
            register={register}
            errors={errors}
            required
            placeholder="Confirm password"
            className="bg-[#F5F5F5] w-full"
          />
        </div>
        <div className="flex gap-x-4 justify-end" >
        <button type="submit" className= " flex  bg-slate-100 text-black px-6 py-2 rounded">Cancel</button>

<button type="submit" className= " flex  bg-red-500 text-white px-6 py-2 rounded">Save changes</button>
        </div>

      </div>
    </form>
  </div>
</div>
      </div>

      
    </>
  );
};


export default LoginPage;
