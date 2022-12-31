gsap.registerPlugin(ScrollTrigger);

// const showtext =  document.querySelector(".showtext")
// const littlecard =  document.querySelector(".little-card")
// const bigcard =  document.querySelector(".big-card")
const allvideo = document.querySelectorAll("video");
let lastvideo = allvideo[allvideo.length - 1];
let firstvideo = allvideo[0];

console.log(lastvideo);



   
    
  

gsap.to(firstvideo, {

  x: 500,

  duration: 3,
 scrollTrigger:{
  start: "top 25%",
  trigger:firstvideo,
  markers: true,
  scrub: 1,
 }
 

})



gsap.to(lastvideo, {
  x: 900,

  duration: 3,
 scrollTrigger:{
  start: "top 50%",
  trigger:lastvideo,
  markers: true,
  scrub: 1,
 }
 
})


















// showtext.addEventListener("mouseenter", () => hover.play());
// showtext.addEventListener("mouseleave", () => hover.reverse());
