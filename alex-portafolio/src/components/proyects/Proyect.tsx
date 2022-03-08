import React from 'react'
import Title from '../Title';
import Select from './Select';
import GridProduct from './GridProduct';
import {useState, useEffect} from 'react';
import { IProyect, proyectInfo } from '../../data/proyect';

export let dataFalsa:IProyect={
  title: '', 
  description:'', 
  demoLink:'', 
  codeLink:'', 
  img: ''
}

const Proyect = () => {

    

    let proyect = {
        title: 'Proyects',
        start: true
    }
    const [ proyectos, setProyectos]= useState<IProyect[]>([dataFalsa])

    const [editProyectos ,setEditProyectos] = useState<IProyect[]>([dataFalsa])

    useEffect(() => {
      setProyectos(proyectInfo)
      setEditProyectos(proyectInfo)
    }, [])

    // useEffect(() => {
    //   if(editProyectos[0].img != '' ){
    //     setProyectos(editProyectos)
    //   }
    // }, [editProyectos])




  return (
    <section id='proyect' className='max-w-7xl m-auto mt-3 px-7 md:px-0 mb-16'>
        < Title title={proyect.title} start={proyect.start} />
        <Select 
          proyectos = {proyectos}
          setProyectos = {setProyectos}
          setEditProyectos = {setEditProyectos}
        />
        <GridProduct
          proyectos = {editProyectos}
        />
    </section>
  )
}

export default Proyect