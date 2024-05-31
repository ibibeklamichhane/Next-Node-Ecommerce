'use client';

import React from 'react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import iphone from "@/public/assets/Iphone.svg"

const imageSources = [
  '/Iphone.svg',
  '/Iphone.svg',
  '/Iphone.svg',
  '/Iphone.svg',
  // Add more image sources as needed
];

const SwiperSlider = () => {
  return (
    <div  className="-mt-20" style={{ width: '80%', height: '600px', position: 'relative' }}>
      <Swiper
        spaceBetween={2}
        slidesPerView={1}
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
      >
        {imageSources.map((src, index) => (
          <SwiperSlide key={index} style={{ position: 'relative', width: '100%', height: '700px' }}>
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
