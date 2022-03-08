import React, { useEffect } from 'react'
import BannerImg from '../../icons/BannerImg.svg'
import MyService from './MyService';
import Title from '../Title';
import { useSize } from '../../hooks/useSize';

const Header = () => {

  const {width} = useSize()

  let servise={
    title: 'My Service',
    description: 'I adapt to your needs',
    start: width > 768? true : false,
  }
  return (
    <header id="home">
      <section className='max-w-screen-xl m-auto md:flex md:flex-row-reverse' >
        <figure className='w-full h-60 mb-2 md:w-1/2 md:h-auto' >
          <img className='w-full h-full md:translate-x-12' src={BannerImg} />
        </figure>
        <article className='px-7 flex items-center flex-col md:w-1/2 md:px-0 md:flex-col-reverse md:items-start md:justify-center'>
          <button className='mb-6 md:mb-0 md:mt-7 text-secundary bg-primary px-10 py-2 font-bold rounded-lg'>Download C.V</button>
          <div>
            <h1 className='mb-3 font-black text-primary text-2xl md:text-6xl md:mb-7'>Full Stack <br /> Web Developer</h1>
            <p className='text-tertiary md:text-base md:w-4/5'>I am Alex Toni Ortiz Vega, a Systems Engineering student with  3 years of experience. My specialties include Web Development, ASP.NET Core & MVC, Entity Framework Core, SQL Server, MongoDb, Javascript, Angular, NodeJs, Express, Firebase, JAVA, HTML5, Android Mobile Development. I am a self taught coder and task automation. </p>
          </div>
        </article>
      </section>
      <section className='max-w-7xl m-auto mt-3 px-7 md:px-0 '>
        < Title title={servise.title} description={servise.description} start={servise.start} />
        <MyService />
      </section>
    </header>

  )
}

export default Header