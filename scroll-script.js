
const option={
   threshold:0.2
 };
 const observer=new IntersectionObserver((entries)=>{
   entries.forEach((entry)=>{
     entry.target.classList.toggle("show", entry.isIntersecting);
   });
 },option);
 
 const home=document.querySelector(".home-content");
 observer.observe(home);
 const about=document.querySelector(".about-content");
 observer.observe (about);
 
 
 
 const animatedDivs = document.querySelectorAll(".box");

 function checkVisibility() {
     animatedDivs.forEach((div, index) => {
         const rect = div.getBoundingClientRect();
         const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
         
         if (isVisible) {
             div.style.transitionDelay = `${0.05 * index}s`;
             div.style.transform = "translateX(0)";
             div.style.opacity = 1;
         } else {
             div.style.transitionDelay = "0s";
             div.style.transform = "translateX(-20%)";
             div.style.opacity = 0;
         }
     });
 }
 
 window.addEventListener("scroll", checkVisibility);
 window.addEventListener("load", checkVisibility);
 

 const animatedDivs1 = document.querySelectorAll(".project-box");

 function checkVisibility1() {
     animatedDivs1.forEach((div, index) => {
         const rect = div.getBoundingClientRect();
         const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
         
         if (isVisible) {
             div.style.transitionDelay = `${0.05 * index}s`;
             div.style.transform = "translateX(0)";
             div.style.opacity = 1;
         } else {
             div.style.transitionDelay = "0s";
             div.style.transform = "translateX(20%)";
             div.style.opacity = 0;
         }
     });
 }
 
 window.addEventListener("scroll", checkVisibility1);
 window.addEventListener("load", checkVisibility1);