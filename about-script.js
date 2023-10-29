const option={
   threshold:0.2
 };
 const observer=new IntersectionObserver((entries)=>{
   entries.forEach((entry)=>{
     entry.target.classList.toggle("show1", entry.isIntersecting);
   });
 },option);
 
 const about=document.querySelector(".about-content");
 observer.observe(about);
 
 