import React from 'react'
import { linkMenu } from '../../data/linkMenu'
const MenuMovil = () => {
   let info = linkMenu
    console.log(info);
    
   return (
    <nav className='px-8 flex justify-between items-center text-white bg-primary w-full bottom-0 fixed z-50 h-16 rounded-l-xl rounded-r-xl  rounded-b-none'>
        {info.map((objMenu)=>{
            return (
                <a href={objMenu.link} key={objMenu.id}>
                    <i className={objMenu.icon + ' text-white text-2xl'}></i>
                </a>
            )
        })}
    
    </nav>
  )
}

export default MenuMovil