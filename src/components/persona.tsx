import React from 'react'

function persona(props) {
  return (
    <>
    <div className='col'>
        <img src={props.img}/>
        <h2>{props.name}</h2>
        <p>{props.descripcion}</p>
    </div>
    </>
  )
}

export default persona
