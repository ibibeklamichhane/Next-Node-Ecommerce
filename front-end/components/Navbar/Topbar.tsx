import React from "react";
import CartIcon from "@/public/assets/icons/cart";
import FavouriteIcon from "@/public/assets/icons/favourites";
import UserIcon from "@/public/assets/icons/userIcon";
import SearchIcon from "@/public/assets/icons/search";
import Link from "next/link";

function Topbar() {
  return (
    <nav className="flex  text-black items-center justify-between  py-3 bg-white border-b border-gray-200 sticky">
      {/* Brand */}
      <div className="font-bold text-2xl">Exclusive</div>

      {/* Navigation Links */}
      <div className="flex space-x-12 pr-10 font-semibold text-lg">
  <a href="/" className="hover:underline ">
    Home
  </a>
  <a href="#" className="hover:underline ">
    Contact
  </a>
  <a href="#" className="hover:underline ">
    About
  </a>
  <a href="/signup" className="hover:underline ">
    Sign Up
  </a>
</div>

      {/* Icons */}
      <div className="flex items-center space-x-8">
        <div className="flex items-center py-4 z">
          <div className="relative ">
            <input
              type="text"
              className="bg-gray-100 py-3 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-2 block w-full pl-10 sm:text-sm border-gray-500 rounded-md"
              placeholder="What are you looking for?"
             
            />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
      <SearchIcon />
    </div>

          </div>
        </div>
        <Link href="/wishlist">
        <FavouriteIcon />
      </Link>
      <Link href="/cart">
        <CartIcon />
      </Link>
      <Link href="/user">
        <UserIcon />
      </Link>
      </div>
    </nav>
  );
}

export default Topbar;
