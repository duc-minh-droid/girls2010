import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/autoplay';
import { motion } from 'framer-motion'

const slideVariants = {
  shake: {
    rotate: [-15, 15],
    transition: {
      yoyo: Infinity,
      type: 'spring'
    }
  }
}

function ImageSlider({ slug }) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      modules={[Autoplay]}
      autoplay={{
        delay: 500,
        disableOnInteraction: false
      }}
      speed={800}
      loop={true}
      breakpoints={{
        0: {
          slidesPerView: 3
        },
        550: {
          slidesPerView: 4
        },
        768: {
          slidesPerView: 5
        },
      }}
    >
      {[1, 2, 3, 4, 5].map(e => <SwiperSlide key={e} >
        <div className='py-10'>
          <motion.img
          alt='' src={`/${slug}/${e}.jpeg`}
          variants={slideVariants} animate='shake'
          className='rounded-3xl h-28'
        />
        </div>
      </SwiperSlide>)} 
    </Swiper>
  )
}

export default ImageSlider