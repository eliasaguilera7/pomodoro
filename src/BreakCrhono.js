import theCountdown2 from "./TheCountdown2";
const BreakCrhono = (sessionLength, breakTime, setCrono, setCronoBreak) => {

let seconds = 60;  
let minutes = breakTime > 0 ? breakTime-1 : breakTime;  

 const intervalBreak = setInterval(
    function(){

        document.getElementById("start-stopId").disabled = true;
        if (seconds === 0 && minutes === 0){
          console.log('Its here');
          theCountdown2(sessionLength, setCrono, breakTime, setCronoBreak); 
          clearInterval(intervalBreak);
          document.getElementById("start-stopId").disabled = false;
          
        } 
        if (seconds === 0){
          seconds = 60;
          minutes = minutes - 1;
        }  
          seconds = seconds -1;
          if (minutes >= 0){
            seconds > 9 ? console.log( `${minutes}:${seconds}`) : console.log( `${minutes}${seconds}`);
            seconds > 9 ? setCronoBreak(`${minutes}:${seconds}`): setCronoBreak(`${minutes}${seconds}`);
          }
    },150)
    //theCountdown2(sessionLength, setCrono, breakTime, setCronoBreak); 
    console.log('its here seconds')
}
//theCountdown2(sessionLength, setCrono, breakTime, setCronoBreak); 

export default BreakCrhono;