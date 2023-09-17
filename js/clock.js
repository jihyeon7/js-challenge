const clockArea = document.getElementById("clock");



function getClock(){
    const date = new Date();
    const Hour = String(date.getHours());
    const Min = String(date.getMinutes()).padStart(2,"0");
    const Sec = String(date.getSeconds()).padStart(2,"0");
    clockArea.innerText =`Time >> ${Hour}H ${Min}M ${Sec}S`;
}
getClock()
setInterval(getClock,1000);