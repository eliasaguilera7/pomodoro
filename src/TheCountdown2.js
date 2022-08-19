const theCountdown2 = (sessionLength, setCrono) => {
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
      if (minutes >= 0){
        seconds > 9 ? console.log( `${minutes}:${seconds}`) : console.log( `${minutes}:0${seconds}`);
        seconds > 9 ? setCrono(`${minutes}:${seconds}`): setCrono(`${minutes}:0${seconds}`);
      }
    
    }, 1000)}
  
 
export default theCountdown2;