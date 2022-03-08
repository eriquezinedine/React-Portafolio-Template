import React from 'react'

interface link{
    name: string;
    url:string
}

const Btn = ({name, url}:link) => {
  return (
    <a href={url}>
        <button className='bg-primary rounded-xl py-1 px-5 font-bold text-sm text-secundary'>
            {name}
        </button>
    </a>
  )
}

export default Btn