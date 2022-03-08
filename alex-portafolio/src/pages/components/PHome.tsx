import React from 'react'
import Contact from '../../components/contact/Contact'
import Header from '../../components/header/Header'
import MenuMovilTop from '../../components/menu/MenuMovilTop'
import Proyect from '../../components/proyects/Proyect'
import Skills from '../../components/skills/Skills'
import Footer from '../../components/footer/Footer';
import { useSize } from '../../hooks/useSize';
import MenuMovil from '../../components/menu/MenuMovil';

const PHome = () => {
  const {width} = useSize()
  return (
    <>
        <MenuMovilTop />
        <Header />
        <Skills />
        <Proyect />
        <Contact />
        <Footer/>
        {width>768? <></>: <MenuMovil />}
    </>
  )
}

export default PHome