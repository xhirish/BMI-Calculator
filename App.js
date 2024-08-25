import React, { useMemo, useState } from 'react'
import './App.css'

const App = () => {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);

  function onWeightChange(event){
    setWeight(event.target.value);

  }

  function onHeightChange(event){
    setHeight(event.target.value);
  }

const output = useMemo(() =>{
  const calculateHeight = height/100;
  return(weight/(calculateHeight * calculateHeight)).toFixed(1)

},[weight, height]);



  return (
    <div>
      <h1>Project 4 : BMI Calculator</h1>
      <div className='input-section'> </div>
      <p className='slider-output'>Weight:{weight}</p>
      <input className='slider-input' type='range' step="1" min="40" max="200" onChange={onWeightChange}></input>
      <p className='slider-output'>Height:{height}</p>
       <input className='slider-input' type='range' min="140" max="220" onChange={onHeightChange}/>

       <div className='Output-Section'>
        <p>Your BMI is :</p>
        <p className='output'>{output}</p>
       </div>
    </div>
  )
}

export default App
