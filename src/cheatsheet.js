import React, {useState, useEffect} from 'react';
import './App.css'

function App() {

  const [message, setMessage] = useState('')
  const [deathStar, setDeathStar] = useState(true)
  const [countDown, setCountDown] = useState(5)
  // const [inputValue, setInputValue] = useState('')


  useEffect(() => {
    setMessage('Use The Force Luke')
  }, [])
 

  useEffect(() => {
    setCountDown(countDown - 1)
  }, [message])


  if(deathStar){
    return (
      <div className="App">
       <h1>{message}</h1>

       {/* <h3>{inputValue}</h3> */}
  
       {/* <input placeholder='Who said that?' value={inputValue} onChange={e =>setInputValue(e.target.value)} /> */}
  
       <div>
         <button onClick = {() => {setMessage('Luke your targeting computer is off')}}>Use the Force</button>
         <button onClick = {() => {setMessage("YOU'RE ALL CLEAR KID!!!")}}>Deus Ex Machina</button>
         <button onClick = {() => {setDeathStar(false)}}>Fire the Missiles</button>
        </div>

      <h3>{countDown}</h3>
      </div>
    );
  } else {
    return (
      <img src='https://i.ytimg.com/vi/REt3RF8bImY/maxresdefault.jpg' alt='death star explosion'></img>
    )
  }
}

export default App;
