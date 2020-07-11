var sec=0;
var min=0;
var hour=0;
var milli=0;

var milisecon=document.getElementById("msec");
var second=document.getElementById("seconds");
var minute=document.getElementById("minutes");
var hour=document.getElementById("hours");
function times(){
   milli++
    milisecon.innerHTML=milli
    if(milli>60){
        sec++;
       
        second.innerHTML=sec
    
            milli=0;
    }
    
    else if (sec>60) {
        min++;
       
        minute.innerHTML=min
        sec=0;
    
        
    } else if(min>60) {
        hour++;
        
        hour.innerHTML=hour
        min=0;
    }
}
function start(){
interval=setInterval(times,60);
document.getElementById('start').style.visibility="hidden"
}

function stop(){
    clearInterval(interval);
    document.getElementById('start').style.visibility="visible";

}
function reset(){
    milli=0
    sec=0
    min=0
    hour=0
    milisecon.innerHTML=milli
    second.innerHTML=sec
    minute.innerHTML=min
    hour.innerHTML=hour
    stop()
    document.getElementById('start').style.visibility="visible";

}