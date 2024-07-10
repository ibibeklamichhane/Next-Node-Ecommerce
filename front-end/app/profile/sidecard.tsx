import React from "react";

function SideCard() {
  return (
    <>
      <div className="flex flex-col text-black ">
        <h1 className="font-semibold text-xl ">Manage My Account</h1>

        <div className="font-regular text-md  flex flex-col  text-gray-500  mt-4 cursor-pointer gap-y-2 pl-4">
          <p className="text-red-500">My Profile</p>
          <p>Address Book</p>
          <p>My Payment Options</p>
        </div>

        <h1 className="font-semibold text-xl mt-6">My Orders</h1>

        <div className="font-regular text-md  flex flex-col  text-gray-500 mt-4 cursor-pointer gap-y-2 pl-4">
          <p>My Returns</p>
          
          <p>My Cancellation</p>
        </div>
        <h1 className="font-semibold text-xl mt-6">My Wishlist</h1>
      </div>
    </>
  );
}

export default SideCard;
