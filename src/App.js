import React, {useState, useEffect} from 'react';
import './App.css'

function App() {

  const [message, setMessage] = useState('')
  const [deathStar, setDeathStar] = useState(true)
  const [countDown, setCountDown] = useState(5)


  useEffect(() => {
    setMessage('Use The Force Luke')
    
  }, [])



  useEffect(() => {
    setCountDown(countDown - 1)
    return () => {
      console.log('cleaning up')
    } 
  }, [message])


  if(deathStar){
    return (
      <div className="App">
       <h1>{message}</h1>
  
       
  
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
