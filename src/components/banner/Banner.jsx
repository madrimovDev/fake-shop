import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

export default function Banner() {
  return (
    <div className='container mx-auto h-96 bg-stone-200 my-10 rounded-lg overflow-hidden'>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        loop
        autoplay={{
          delay: 2000,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className='w-full h-full'
      >
        <SwiperSlide>
          <img
            className='w-full h-full object-cover object-center'
            src='https://img.freepik.com/premium-psd/black-friday-sale-laptops-gadgets-banner-template-3d-render_444361-44.jpg'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='w-full h-full object-cover object-center'
            src='https://img.freepik.com/premium-vector/realistic-cyber-monday-banner-template_252779-566.jpg'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='w-full h-full object-cover object-center'
            src='https://img.freepik.com/premium-psd/gaming-laptop-sale-promotion-banner_252779-743.jpg'
            alt=''
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
