"use strict";
let All_p_tag=document.querySelectorAll("p");
console.log(All_p_tag);


// console.log(current_time);
let Future_time=new Date("Dec,12 2023 16:30:00").getTime();
// console.log(Future_time);



let time=setInterval(function (){
    let current_time=new Date().getTime();
    let distance=Future_time-current_time;

    console.log(Math.floor(distance));
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  All_p_tag[1].innerHTML=days;
  All_p_tag[2].innerHTML=hours;
  All_p_tag[3].innerHTML=minutes;
  All_p_tag[4].innerHTML=seconds;
  if(distance<0){
    clearInterval(time);
    All_p_tag[1].innerHTML=0;
    All_p_tag[2].innerHTML=0;
    All_p_tag[3].innerHTML=0;
    All_p_tag[4].innerHTML=0;
  }
    
},1000);



//....................trail.............//
// // let demo=89164282;
// let demo=86400000;
// console.log(Math.floor(demo/(60*60*1000*24)));
// console.log(Math.floor(demo%(60*60*1000*24)/(60*60*1000)));

// console.log(Math.floor(demo%(60*60*1000)));
