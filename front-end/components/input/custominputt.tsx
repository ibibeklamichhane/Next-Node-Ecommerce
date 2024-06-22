import React, { InputHTMLAttributes, forwardRef, useState } from "react";
//import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import classNames from "classnames";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  required?: boolean;
  className?: string;
  errors: FieldErrors;
}

const CustomInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  CustomInputProps
> = (
  {
    type = "text",
    label,
    name,
    register,
    errors,
    required = false,
    className,
    ...props
  },
  ref
) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block mb-2 text-md font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="flex w-full justify-between items-center relative">
        <input
          type={showPassword ? "text" : type}
          {...register(name, { required })}
          {...props}
          className={classNames(
            `w-full border h-[45px] rounded-md p-3 focus:outline-primary disabled:opacity-70 border-gray-300`,
            errors[name] && "border-red-500 focus:ring-red-500 focus:ring-0",
            className
          )}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={handleTogglePassword}
            className="cursor-pointer text-xl absolute right-2.5 top-3 text-gray-400"
          >
    
          </button>
        )}
      </div>
      {/* Add error message display if there is an error */}
      {errors[name] && (
        <span className="text-sm  text-red-500">
          {(errors[name] as any).message}
        </span>
      )}
    </div>
  );
};

export default forwardRef(CustomInput);