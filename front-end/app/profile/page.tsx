"use client";
import React from "react";
import { useForm } from "react-hook-form";
import CustomInput from "@/components/input/custominputt";
import CustomBreadCrumb from "@/components/breadcrumb/custombreadcrumb";

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
      link ="/cart"
            title="cart"
            list={[{ name: "My Account" }]}
          />
        <h1 className="text-red-500 text-xl font-semibold">Edit Your Profile</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=""></div>
          <div className="flex w-1/2 justify-between gap-10">
            <CustomInput
              label="First Name"
              name="name"
              type="text"
              register={register}
              errors={errors}
              required
              className="bg-[#F5F5F5]"
            />
            <CustomInput
              label="Last Name"
              name="lname"
              register={register}
              errors={errors}
              required
              className="bg-[#F5F5F5]"
            />
          </div>
          <div className="flex w-1/2 justify-between gap-10">
          
          <CustomInput
            label="Email"
            name="email"
            register={register}
            errors={errors}
            required
            className="bg-[#F5F5F5]"
          />
          <CustomInput
            label="Address"
            name="address"
            register={register}
            errors={errors}
            required
            className="bg-[#F5F5F5]"
          />
</div>
<div className="flex flex-col w-1/2 justify-between gap-4">
          <CustomInput
            label="Password"
            name="password"
            type="password"
            register={register}
            errors={errors}
            required
            className="bg-[#F5F5F5]"
          />
           
          
          <CustomInput
            label="
        "
            name="password"
            type="password"
            register={register}
            errors={errors}
            required
            className="bg-[#F5F5F5]"
          />
          <CustomInput
            label=""
            name="password"
            type="password"
            register={register}
            errors={errors}
            required
            className="bg-[#F5F5F5]"
          />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

    </>
  );
};

export default LoginPage;
