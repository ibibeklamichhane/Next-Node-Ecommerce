'use client';

import React from 'react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import iphone from "@/public/assets/Iphone.svg";

const imageSources = [
  '/Iphone.svg',
  '/Iphone.svg',
  '/Iphone.svg',
  '/Iphone.svg',
  // Add more image sources as needed
];

const SwiperSlider = () => {
  return (
    <div
      className="mt-16"
      style={{ width: '80%', height: '380px', display: 'flex', justifyContent: 'flex-start' }}
    >
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        style={{ width: '100%', height: '100%' }}
      >
        {imageSources.map((src, index) => (
          <SwiperSlide key={index} style={{ width: '100%', height: '100%' }}>
            <Image
              src={iphone}
              alt="Iphone"
              layout="fill"
              objectFit="contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
