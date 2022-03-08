import React, { CSSProperties, useEffect, useState } from 'react'
import Title from '../Title';
import { useSize } from '../../hooks/useSize';
import Circle from '../Circle';

const Contact = () => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState(false)
  const {width} = useSize()

   let style:CSSProperties ={
    display: 'grid',
    gridTemplateColumns: `repeat(${width > 768?'2':'1'},1fr)`,
    gridGap: `${width >768? '60px':'20px'}`,
  }
  const input:CSSProperties = {
    border: '1px solid rgba(35, 35, 60, 0.5)',
    boxShadow: '0px 4px 4px rgba(54, 55, 97, 0.25)',
    borderRadius: '10px',
    padding: '10px   0px 10px  33px',
    marginBottom: '10px'
  }

  const handleSubmit =(e:any)=>{
    e.preventDefault()
    if([ nombre, email, telefono, mensaje].includes('')){
      setError(true)
    }else{
      let msj = `%0A
      **Nombre* = ${nombre}%0A
      **Email* = ${email}%0A
      **Telefono* = ${telefono}%0A
      
      ${mensaje}%0A
      `
      window.open(`https://wa.me/+51933045020?text= ${msj} `);
      limpiar()
    }
  }

  const limpiar = ()=>{
    setNombre('')
    setEmail('')
    setTelefono('')
    setMensaje('')
    setError(false)
  }

  return (
    <section id='contact' className='max-w-7xl m-auto mt-3 px-7 md:px-0 mb-16 relative'>
        {error ?? <h5 className='error'>Error: Uno de los campos esta vacio</h5> }
        <Title title ="Let's talk !" start={true} />
        <article style={style}>
            <form 
              className='flex flex-col'
              onSubmit={handleSubmit}
            >
              <label htmlFor="Name" className='w-full'>
                <input 
                type="text" 
                id="Name" 
                placeholder='Name' 
                className='w-full' 
                style={input} 
                value={nombre}
                onChange={(e)=>{setNombre(e.target.value)}}/>
              </label>

              <label htmlFor="Email" className='w-full'>
                <input 
                  type="email" 
                  id="Email" 
                  placeholder='Email' 
                  className='w-full' 
                  style={input}
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
              </label>
              <label htmlFor="Phone" className='w-full'>
                <input 
                  type="tel" 
                  id="Phone" 
                  placeholder='Phone' 
                  className='w-full' 
                  style={input}
                  value={telefono}
                  onChange={(e)=>{setTelefono(e.target.value)}}
                />
              </label>
              <label htmlFor="Message" className='w-full'>
                <textarea 
                  name="Message" 
                  id="" cols={10} 
                  placeholder="Message" 
                  rows={5} className='w-full' 
                  style={input}
                  value={mensaje}
                  onChange={(e)=>{setMensaje(e.target.value)}}
                ></textarea>
              </label>
              <button className='w-full bg-primary text-secundary py-2'>
                <span className='mr-2'>Send Email</span>
                <i className="fa-brands fa-telegram"></i>
              </button>

            </form>
            <div>
              <h2 className='text-2xl text-primary font-bold'>Email: </h2>
              <p className='text-base text-tertiary' >job@valentinotorres.dev</p>
              <h2 className='text-2xl text-primary font-bold'>Social Media: </h2>
              <div className='flex '>
                <a href="" className='mr-2'>
                  <figure className='w-11 h-11'>
                    <img className='w-full h-full' src="https://img.icons8.com/fluency/48/000000/facebook.png"/>
                  </figure>
                </a>
                <a href="" className='mr-2'>
                  <figure className='w-11 h-11'>
                    <img src="https://img.icons8.com/color/48/000000/whatsapp--v2.png"/>
                  </figure>
                </a>
                <a href="" className='mr-2'>
                  <figure className='w-11 h-11'>
                    <img src="https://img.icons8.com/color/48/000000/linkedin.png"/>
                  </figure>
                </a>
                <a href="" className='mr-2'>
                  <figure className='w-11 h-11'>
                  <img src="https://img.icons8.com/glyph-neue/64/000000/github.png"/>
                  </figure>
                </a>
              </div>
            </div>
        </article>
        <Circle
        color= "linear-gradient(315.52deg, #FCF3DD 29.44%, #F4C85C 90.9%)"
        width= {(164)}
        height= {(170)}
        to= {width > 768 ? "0px" : "0px" }
        bt= "initial"
        ri= {width > 768 ? "1000px" : "200ox" }
        le= "initial"
        rotate = "rotate(0deg)"
      />
      <Circle
        color= "linear-gradient(315.52deg, #F4797E 29.44%, rgba(242, 171, 174, 0) 90.9%)"
        width= {(350)}
        height= {(355)}
        to= {width > 768 ? "-50%" : "-50%" }
        bt= "initial"
        ri= {width > 768 ? "-20%" : "-10%" }
        le= "initial"
        rotate = "rotate(152deg)"
      />
      <Circle
        color= "linear-gradient(315.52deg, #65D39F 29.44%, #4382FF 90.9%)"
        width= {(111)}
        height= {(116)}
        to= {width > 768 ? "200px" : "200px" }
        bt= "initial"
        ri= {width > 768 ? "0px" : "0px" }
        le= "initial"
        rotate = "rotate(152deg)"
      />
      <Circle
        color= "linear-gradient(315.52deg, #FCF3DD 29.44%, #F4C85C 90.9%)"
        width= {(50)}
        height= {(50)}
        to= {width > 768 ? "210px" : "210px" }
        bt= "initial"
        ri= {width > 768 ? "500px" : "500px" }
        le= "initial"
        rotate = "rotate(0deg)"
      />
    </section>
  )
}

export default Contact