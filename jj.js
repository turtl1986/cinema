const schemeSvg=document.querySelector(".scheme-svg");
const totprtag=document.querySelector(".pr-count");
const mbut=document.querySelector(".m-m");
const menu=document.querySelector(".menu");
let cost=800;
let totpr=0;
schemeSvg.addEventListener(
    'click',(event)=>{
        if(!event.target.classList.contains("booked")){
event.target.classList.toggle("active");
totpr=schemeSvg.querySelectorAll(".active").length*cost;
totprtag.textContent=totpr;
        }
 
    }
);
mbut.addEventListener('click', ()=>{
    menu.classList.toggle(".is-open");
});