import './App.css';
import {useEffect, useState} from 'react';
import TheCountdown2 from './TheCountdown2';


function App() {

const [sessionLength, setSessionLength] = useState(1);
const [crono, setCrono] = useState(sessionLength);
const [breakTime, setBreakTime] = useState(0);
const [cronoBreak, setCronoBreak] = useState(0);




 const SessionLengthDecrease = () => {
 if (sessionLength <= 1){
  setSessionLength(1);
  setCrono(1);
 }
 else {setSessionLength(sessionLength-1)
       setCrono(crono-1);
       
 }
 }
 const SessionLengthInscrease = () => {
  if (sessionLength === 60){
  setSessionLength(60)
  setCrono(60)
  }else {setSessionLength(sessionLength+1);
    let cronoSum = 0;  
    cronoSum++;
    setCrono(crono+1) 
   }
 } 

 const breakTimeIncrease =()=> {
  setCronoBreak(cronoBreak+ 1)
  setBreakTime(breakTime+ 1)
  
 }

 const breakTimeDecrease =()=> {
  setCronoBreak(cronoBreak - 1);
  setBreakTime(breakTime - 1)
 
}

    /*var TheCountdown =()=> {

    let seconds = 60;    
    let minutes = sessionLength > 0 ? sessionLength-1 : sessionLength;

    const theInterval = setInterval(function(){
      
      document.getElementById("start-stopId").disabled = true;
    if (seconds === 0 && minutes === 0){
      console.log('Its here');
      clearInterval(theInterval);
      document.getElementById("start-stopId").disabled = false;
    } 
    if (seconds === 0){
      seconds = 60;
      minutes = minutes - 1;
    }  
      seconds = seconds -1;
      seconds > 9 ? console.log( `${minutes}:${seconds}`) : console.log( `${minutes}:0${seconds}`);
      setCrono(seconds > 9 ? `${minutes}:${seconds}`: console.log `${minutes}:0${seconds}`);
      return(
        <div className="crono">
        {seconds > 9 ? minutes+":"+seconds : minutes+":0"+seconds};
        </div>
      );
    }, 1000)
  }*/


  return ( 
    <div className="App">
    <div className="break-level">Break Length</div>   
    <div className="session-length">Session Length:<h1>{sessionLength}</h1></div>
    <div className="break-decrement">Break Decrement</div>
    <div className="session-decrement">Session Decrement</div>
    <div className="break-lenght">5</div>
    <div className="session-lenght">25</div>
    <div className="timer-label">Session</div>
    <div className="time-left">25</div>
    <button onClick={SessionLengthInscrease}>Increase</button>
    <button onClick={()=>SessionLengthDecrease()}>Decrease</button>
    <button className="start-stop" id="start-stopId" onClick={() => TheCountdown2(sessionLength, setCrono, breakTime, setCronoBreak)} >Start Count Down</button>
    <button className="reset">Reset</button>
    <br/>
    <button onClick={()=> breakTimeIncrease()}>Increase Break</button>
    <button onClick={() => breakTimeDecrease()} >Decrease Break</button>
    <h2>Session: {crono}</h2>
    <h2>Break: {cronoBreak}</h2>

    
    </div>
  );
}

export default App;
