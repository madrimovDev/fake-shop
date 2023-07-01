import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { StoreContext } from '../../store/StoreContext'
import { useParams } from 'react-router-dom'

export default function Banner() {
  const { products } = useContext(StoreContext)
  const { categoryTitle } = useParams()

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
        {products.slice(0, 3).map((product) => {
          return (
            <SwiperSlide className='px-10 flex items-center gap-10'>
              <img className='h-full' src={product.image} alt='' />
              <div>
                <h2 className='text-4xl font-bold'>{product.title}</h2>
                <p className='text-2xl my-4'>{product.description}</p>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
