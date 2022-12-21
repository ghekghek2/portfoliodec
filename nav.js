const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li");

window.onload=()=>{
  const $ = document.querySelector.bind(document);
const $All = document.querySelectorAll.bind(document);

$('#menu').onclick=()=>{              $('#menu').classList.toggle('rotate')
$('.nav-page1').classList.toggle('transform')
$('.nav-page2').classList.toggle('transform')
$('.menu-line1').classList.toggle('rotate1')
 $('.menu-line2').classList.toggle('rotate2')
 $('.menu-line3').classList.toggle('dnone')
 $('.act').classList.toggle('actclose')
 
}
}


window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};