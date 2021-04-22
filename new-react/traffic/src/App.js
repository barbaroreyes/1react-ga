import React ,{useState}from 'react'
import './App.css'
import TrafficL from './component/trafficL';

const App = () => {
  const color = ['red','yellow','green']
  const [colorState, setColorState]=useState('red')


  return (
    <div className="App">
      {color.map((item)=>{
        return (<TrafficL 
          color ={item} 
          colorState={colorState}
          setColorState={setColorState}
          />)
      })}
      
    </div>
  )
}

export default App

