import React from 'react'

const TrafficL = ({color,colorState,setColorState}) => {
  return (
    <div 
    className='traffic' 
    style={{backgroundColor
    :color=== colorState
    ? color 
    :'black'}}
    onClick={()=>setColorState(color)}
    >
     
    </div>
  )
}

export default TrafficL
