let timer=document.getElementById('displaytime');
let time=new Date();
let now=time.toLocaleTimeString();
timer.innerText=now;
timer.style.fontSize="45px";
timer.style.paddingLeft="70px";

let fun=()=>{
let timer=document.getElementById('displaytime');
let time=new Date();
let now=time.toLocaleTimeString();
timer.innerText=now;
timer.style.fontSize="45px";
timer.style.paddingLeft="70px";
};
setInterval(fun,1000);

