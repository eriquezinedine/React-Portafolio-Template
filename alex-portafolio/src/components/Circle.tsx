import React, { CSSProperties, useEffect, useState } from 'react'

const Circle = ({color, width, height, to,bt,ri,le, rotate }:any) => {

    let style:CSSProperties={
        background: color,
        width:width,
        height:height,
        top: to,
        right: ri,
        bottom: bt,
        left: le,
        transform: rotate
    }

  return (
    <div className='rounded-full absolute -z-10' style={style}></div>
  )
}

export default Circle