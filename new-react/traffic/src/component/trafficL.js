import React from 'react'

const TrafficL = ({color,colorState,setColorState,button}) => {
  return (
    <div 
    className='traffic' 
    style={{backgroundColor
    :color=== colorState
    ? color 
    :'black'}}
    // 
    >
     <button onClick={()=>
      setColorState(color)} 
      className='btn'>
      {button}
      </button>
    </div>
  )
}

export default TrafficL
