import React from 'react'
import Title from '../Title'
import MySkils from './MySkils';

const Skills = () => {
    let skills ={
        title: 'My Skills',
        start: true,
    }
  return (
    <div className='max-w-7xl m-auto mt-3 px-7 md:px-0'>
        < Title title={skills.title} start={skills.start} />
        <MySkils />
    </div>
  )
}

export default Skills