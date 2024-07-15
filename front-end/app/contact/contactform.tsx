"use client";
import React from "react";
import { useForm } from "react-hook-form";
import CustomInput from "@/components/input/custominputt";
import CustomBreadCrumb from "@/components/breadcrumb/custombreadcrumb";

interface FormData {
  email: string;
  password: string;
}

const ContactPage: React.FC = () => {
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


<div className="flex justify-between items-start gap-4 p-6">
<div className="w-1/3">
  
  </div>


  <div className="w-1/2 md:w-3/5 lg:w-2/3 bg-slate-50 px-16 rounded-lg py-4"  >

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <CustomInput
            label=""
            name="name"
            type="text"
            register={register}
            errors={errors}
            required
            placeholder="Your name"
            className="bg-[#F5F5F5] w-full"
          />

                    <CustomInput
            label=""
            name="email"
            register={register}
            errors={errors}
            required
            placeholder="Your email"
            className="bg-[#F5F5F5] w-full"
          />
                    <CustomInput
            label=""
            name="phone"

            register={register}
            errors={errors}
            required
            placeholder="your phone"
            className="bg-[#F5F5F5] w-full"
          />
        </div>
        <div className="space-y-4">
          <CustomInput
            label=""
            name="message"
            type="text"
            register={register}
            errors={errors}
            required
            placeholder="Your message"
            className="bg-[#F5F5F5] w-full h-32"
          />
          </div>


        <div className="flex gap-x-4 justify-end" >
     
<button type="submit" className= " flex  bg-red-500 text-white px-6 py-2 rounded">Send Message</button>
        </div>

      </div>
    </form>
  </div>
</div>
      </div>

      
    </>
  );
};


export default ContactPage;

