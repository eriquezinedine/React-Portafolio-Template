import React, { CSSProperties } from 'react'
import Btn from '../Btn';
import { useSize } from '../../hooks/useSize';
import { IProyect } from '../../data/proyect';



const ItemProduct = ({title,description,demoLink,codeLink,img}:IProyect) => {
  const {width} = useSize()


  let itemProduct:CSSProperties ={
    display: 'grid',
    gridTemplateColumns: `repeat(${width > 500?'1':'2'},1fr)`,
    boxShadow: '0px 4px 10px rgba(54, 55, 97, 0.25)'
  }
  return (
    <div style={itemProduct} className="bg-secundary rounded-2xl overflow-hidden">
      <figure style={{height: width >768?'202px':'auto'}}>
        <img className='h-full w-full' src={img} alt="digital" />
      </figure>
      <div className='flex flex-col items-center justify-center py-5 md:p-4'>
        <h2 className='text-xl font-bold text-center '>{title}</h2>
        <p className='text-tertiary text-center h-12'>{description}</p>
        <div className='mt-3 w-full flex items-center justify-center'>
          <Btn name="DEMO" url={demoLink}/>
          <span className='block w-1 md:w-4'></span>
          <Btn name="VIEW WEB" url={codeLink}/>
        </div>
      </div>
    </div>
  )
}

export default ItemProduct