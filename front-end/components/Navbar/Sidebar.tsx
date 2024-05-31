import React from 'react';
import SwiperSlider from './hero';

const navLinks = [
  { label: "Women's Fashion", href: '#' },
  { label: "Men's Fashion", href: '#' },
  { label: 'Electronics', href: '#' },
  { label: 'Home & Lifestyle', href: '#' },
  { label: 'Medicine', href: '#' },
  { label: 'Sports & Outdoor', href: '#' },
  { label: 'Babies & Toys', href: '#' },
  { label: 'Groceries & Pets', href: '#' },
  { label: 'Health & Beauty', href: '#' },
  { label: 'Kids', href: '#' },
];

function Sidebar() {
  return (
    <div className="flex-1 mt-12">
      <div className="bg-gray-50 text-black w-52 h-auto overflow-y-auto">
        <div className="px-6 py-4">
          {/* Logo */}
          {/* Navigation */}
          <nav>
            <ul>
              {navLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.href} className="flex items-center text-black rounded-md px-2 py-2">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      

 
    </div>
  );
}

export default Sidebar;
