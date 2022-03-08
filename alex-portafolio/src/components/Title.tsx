import React from 'react'

const Title = ({title, description, start}:any) => {
  return (
    <div className={`flex flex-col ${start? 'items-start': 'items-end'}`  }>
        <h5 className='text-primary text-3xl font-bold'>{title}</h5>
        <p className='text-base text-tertiary mb-4'>{description} </p>
    </div>
  )
}

export default Title