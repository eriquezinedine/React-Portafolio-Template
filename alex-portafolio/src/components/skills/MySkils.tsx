import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useSize } from '../../hooks/useSize';
import { skilsInfo } from '../../data/skill';

const MySkils = () => {


  let info = skilsInfo;
  const {width} = useSize()
 
  const generatorColum=(width:number):number=>{
    let colum = 10
     if(width <= 500){
       colum = 3
     }else if(width <= 700){
       colum = 4
     }else if(width <= 974){
       colum = 6
     }else if(width <= 1024){
       colum = 10
     }
     return colum
  }

    return (
        <Swiper
          id='zswiper'
          className='mr-0 !ml-0 !pb-5 mt-5'
          spaceBetween={30}
          loop={true}
          autoplay ={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={generatorColum(width)}
          modules = {[Autoplay]}
        >
          {info.map((circle)=>{
            return (
              <SwiperSlide className='cursor-pointer  flex flex-col items-center justify-center' key={circle.id}>
                <figure className='h-24 w-24 bg-black rounded-full p-5'>
                  <img className='h-full w-full' src={circle.imgSvg} alt={circle.title} />
                </figure>
                <p className='text-tertiary text-2xl'>
                  {circle.title}
                </p>
            </SwiperSlide>
            )
          })}
        </Swiper>
    );
}

export default MySkils