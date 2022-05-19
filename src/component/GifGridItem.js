import React from 'react'

export const GifGridItem = ( { url, title } ) => {

    
  return (
    <div className="tarjeta animate__animated animate__fadeInDown" >
       <img src= { url } alt={ title}></img>
       <p>{ title }</p>
    </div>
  )
}
