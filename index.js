// anonymous finction
window.onload = function () {
    let appendTens = 00;
    let appendSeconds = 00;
    let appendDays = 00;
    const seconds = document.querySelector("#seconds");
    const tens = document.querySelector("#tens");
    const days = document.querySelector("#days");
    const buttonStart= document.querySelector("#button-start");
    const buttonStop= document.querySelector("#button-stop");
    const buttonReset= document.querySelector("#button-reset");

    let interval;
    //const buttonHandler = function () {
        
   // }
   //buttonStart.addEventListener("click", buttonHandler);
    //buttonStop.addEventListener("click", buttonHandler);
    //buttonReset.addEventListener("click", buttonHandler);

    //buttonStart.addEventListener("click", () => {

   // })
    buttonStart.addEventListener("click", () => {
       clearInterval(interval);
        interval = setInterval (startTimer, 10) // round the function upto 1000 milli seconds
    });
    buttonStop.addEventListener("click", () => {
        clearInterval(interval);
    });
    buttonReset.addEventListener("click", () => {
       // clearInterval(interval);
        appendTens = "00";
        appendSeconds = "00";
        appendDays = "00";
        tens.innerHTML = appendTens;
        seconds.innerHTML = appendSeconds;
        days.innerHTML = appendDays;

    });
    
   /*  buttonStart.onclick = function(){
        startTimer();
       console.log("");
       console.log(setInterval (0, 10));
   }  */
   buttonReset.onclick = function(){
    resetTimer();

} 
    const startTimer = () => {
        appendTens++;
    if(appendTens <= 9){
        tens.innerHTML = "0" + appendTens;
    }

    if(appendTens > 9){
        tens.innerHTML = appendTens;
    
}
    if(appendTens > 59){
         appendSeconds++;
        seconds.innerHTML = "0" + appendSeconds;
        appendTens = 0;
        tens.innerHTML = "0" + 0;
    }

    if(appendSeconds > 9 ) {
        seconds.innerHTML = appendSeconds;
       
}
    if( appendSeconds > 24) {
        appendDays++;
        days.innerHTML = "0" + appendDays;
        appendTens = 0;
        appendSeconds = 0;
        seconds.innerHTML = "0" + 0;
} 
    if(appendDays > 9){
        days.innerHTML = appendDays;
    } 
  
    }

}
