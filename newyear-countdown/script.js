const days= document.getElementById("days");
const hours = document.getElementById("hours");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");
const year=document.getElementById("year")
const loading=document.getElementById("loading")
const countdown=document.getElementById("countdown")


let currentYear= new Date().getFullYear()

//getFullYear detemine the current year

let nextYear= currentYear+1;

year.innerHTML=nextYear;

let newYearTime= new Date(`january 01 ${nextYear} 00:00:00`)

// console.log(newYearTime.getDate())

function updateCountDown(){
    let currentTime= new Date()
    let diff= newYearTime -currentTime
    let d= Math.floor(diff/1000/60/60/24)
    let h= Math.floor(diff/1000/60/60)%24
    let m= Math.floor(diff/1000/60)%60
    let s= Math.floor(diff/1000)%60

    //ternary operator

    days.innerHTML= d<10? "0"+d:d
    hours.innerHTML= h<10? "0" +h:h
    minutes.innerHTML= m<10? "0" +m:m
    seconds.innerHTML= s<10? "0" +s:s
    
}
setInterval(updateCountDown, 1000)

setTimeout(()=>{
    loading.remove();
    countdown.style.display="flex"

},1000)