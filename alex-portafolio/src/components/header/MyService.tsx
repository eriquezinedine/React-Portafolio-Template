import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useSize } from '../../hooks/useSize';
import { serviceInfo } from '../../data/service';
const MyService = () => {

  let info = serviceInfo
  const {width} = useSize()

  const generatorColum=(width:number):number=>{
    let colum = 3
     if(width <= 500){
       colum = 1
     }else if(width <= 700){
       colum = 1
     }else if(width <= 974){
       colum = 2
     }else if(width <= 1024){
       colum = 3
     }
     return colum
  }

    return (
        <Swiper
          id='zswiper'
          className='max-w-6xl mr-0 !ml-0 !pb-5 '
          spaceBetween={30}
          autoplay ={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={generatorColum(width)}
          modules = {[Autoplay]}
        >
          {info.map((service)=>{
            return (
              <SwiperSlide className='relative cursor-pointer rounded-3xl' style={{background: service.color}} key={service.id}>
              <div className='grid grid-cols-2 relative z-20 transition-all duration-500 hover:opacity-0 p-1 rounded-3xl' style={{background: service.color}}>
                <figure className=' h-full'>
                  <img className='w-full h-full' src={service.img} alt="" />
                </figure>
                <div className=' ml-6 md: flex flex-col justify-center' >
                  <h3 className='text-2xl text-secundary font-bold'>{service.title}</h3>
                  <p className='text-sm text-secundary opacity-70'>{service.subTitle}</p>
                </div>
              </div>
              <div className='absolute top-0 right-0 bottom-0 left-0 p-2 rounded-3xl z-10' style={{background: service.color}}>
                <p className='md:text-xs text-base text-secundary text-left'>
                  {service.description}
                </p>
              </div>
            </SwiperSlide>
            )
          })}
        </Swiper>
    );
}

export default MyService