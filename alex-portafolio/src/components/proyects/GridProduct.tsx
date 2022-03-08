import React, { CSSProperties, useEffect, useState } from 'react'
import ItemProduct from './ItemProduct'
import { useSize } from '../../hooks/useSize';
import { IProyect } from '../../data/proyect';

const GridProduct = ({proyectos}:any) => {

  const {width} = useSize()

  const generatorColum=(width:number)=>{
     let colum = '4'
      if(width <= 500){
        colum = '1'
      }else if(width <= 690){
        colum = '2'
      }else if(width <= 927){
        colum = '3'
      }else if(width <= 1024){
        colum = '4'
      }
      return colum
   }

  const style:CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${generatorColum(width) },1fr)`,
    gridGap:'20px'
  }

  return (
    <article className='mt-5 ' style={style}>
      {proyectos.map((proyect:IProyect)=> 
      <ItemProduct key={proyect.title} title={proyect.title} description={proyect.description} demoLink={proyect.demoLink} codeLink={proyect.codeLink} img={proyect.img}/>
      )}
    </article>
  )
}

export default GridProduct