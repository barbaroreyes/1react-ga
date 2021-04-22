import React ,{useState}from 'react'
import './App.css'
import TrafficL from './component/trafficL';
import dataArray from './component/dataArray'


const App = () => {
  
  const [colorState, setColorState] = useState(dataArray[0].color)


  return (
    <div className="App">
      {dataArray.map((item,i)=>{
        return (
        <TrafficL 
          key={i}
          color ={item.color} 
          colorState={colorState}
          setColorState={setColorState}
          button={item.id}
          />)
          
      })}
      
    </div>
  )
}

export default App

