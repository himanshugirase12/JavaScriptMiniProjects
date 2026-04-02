const ele=document.getElementById("box");
const ele2=document.querySelector(".old");
const btn=document.querySelector("button");
const input=document.querySelector("input");
const incr=document.getElementById("increase");
const desr=document.getElementById("decrease");
// const num=document.getElementById("num");
const reset=document.getElementById("reset");



ele2.className="new";

ele.classList.add("addClass");
ele.classList.toggle("active");

btn.addEventListener("click",function() {
    document.body.style.backgroundColor="purple";
  })

input.addEventListener("input", ()=>{
    console.log(input.value);
})


let count=0;

incr.addEventListener("click", ()=>{
    count=count+1;
    num.textContent=count;
})

desr.addEventListener("click", ()=>{
    if(count>0){
        count=count-1;
        num.textContent=count;
    }
})

reset.addEventListener("click",()=>{
    count=0;
    num.textContent=count;
})


const randomNum=document.getElementById("randomNum");
const guess=document.getElementById("guess");
let num=0;
randomNum.addEventListener("click",()=>{
    num=Math.floor(Math.random()*100);

})

guess.addEventListener("input",()=>{

    if(guess.value==num){
        console.log("Congrats You Win");
    }else if(guess.value>num){
        console.log("It is lower than "+guess.value);
    }else if(guess.value<num){
        console.log("It is higher than "+guess.value);
    }

})


