const new_year = "1 Jan 2023";
function counttimer(){
    var new_year_date = new Date(new_year);
    var current_date = new Date();
    let differ = (new_year_date-current_date)/1000;
    //console.log(new_year_date)
    
    let days = Math.floor(differ/3600/24);
    let hours = Math.floor(differ/3600)%24;
    let minutes = Math.floor(differ/60)%60;
    let seconds = Math.floor(differ)%60;
    document.getElementById("days").innerHTML = manipulate(days);
    document.getElementById("minutes").innerHTML = manipulate(minutes);
    document.getElementById("hours").innerHTML = manipulate(hours);
    document.getElementById("seconds").innerHTML =manipulate(seconds);
    

}
function manipulate(time){
    if(time < 10){
        return `0${time}`
    }
    else{
        return time
    }

}
setInterval(counttimer, 1000);
