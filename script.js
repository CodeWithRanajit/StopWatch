let timer=document.getElementById('displaytime');
let time=new Date();
let now=time.toLocaleTimeString();
timer.innerText=now;
timer.style.fontSize="55px";
timer.style.paddingLeft="1px";

let fun=()=>{
let timer=document.getElementById('displaytime');
let time=new Date();
let now=time.toLocaleTimeString();
timer.innerText=now;
};
setInterval(fun,1000);

