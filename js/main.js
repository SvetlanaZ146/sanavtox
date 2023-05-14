// ----nav---
const menu = document.querySelector('.nav'),
    burger = document.querySelector('.burger'),
    mobilBack = document.querySelector('.mobile-back'),
    overlay = document.querySelector('.overlay');


const lockScroll = () => {
    document.body.classList.add('lock');
 }  
const unLockScroll = () =>{
    document.body.classList.remove('lock');
 } 
 const initialMenu = () => {
   document.querySelector(".dropdown-submenu").classList.remove("transformation");
   document.querySelector(".nav__list--dropdown").classList.remove("transformation");
   document.querySelector(".nav").querySelector(".nav__list").classList.remove("transformation");
   scrollTop(); 
}
  const scrollTop = ()  => {
   menu.scrollTo({
      top: 0,
      behavior: "smooth",
   });
 };
 burger.addEventListener("click", () => {
   menu.classList.add("open");
   overlay.classList.add("open");
   lockScroll();
   initialMenu();
   
 });
 overlay.addEventListener('click', () => {
   menu.classList.remove('open');
   overlay.classList.remove('open');
   
    unLockScroll();
    initialMenu();
   
 });


 
 
 


      
      
   
 menu.addEventListener('click', (e) => {
   if(e.target.classList.contains('nav__link--drop')){
      e.preventDefault();
     
      e.target.closest('.nav__list').classList.toggle('transformation');
      e.target.closest('.nav__item').querySelector('.nav__list--dropdown').classList.toggle('transformation');
      
     
      
      scrollTop();
      
   }

   // if(e.target.classList.contains('mobile-back__link')){
   //    e.preventDefault();
      
   //    e.target.closest('.nav__list--dropdown').classList.remove('transformation');
   //    e.target
   //    .closest('.nav').querySelector('.nav__list').classList.remove('transformation');
      
      
   //    scrollTop();
     
   // }
   if(e.target.classList.contains('nav__link') && !e.target.classList.contains('nav__link--drop')){
  
      menu.classList.remove('open');
      overlay.classList.remove('open');
      unLockScroll();
     
      
   }

 });


// ----accordion---

document.querySelectorAll('.questions__accordion-item--trigger').forEach((item) =>
item.addEventListener('click', () =>{
   const parent = item.parentNode;

   if(parent.classList.contains('questions__accordion-item--active')){
      parent.classList.remove('questions__accordion-item--active');
   }else{
      document.querySelectorAll('.questions__accordion-item').forEach((child) => child.classList.remove('questions__accordion-item--active'))
      parent.classList.add('questions__accordion-item--active')
   }
   
})
)



// let btns = document.querySelectorAll('.btn');
// for(btn of btns){
//    btn.addEventListener('click', function(){
//       text = document.querySelector('.text');
     
//       text.classList.toggle('open');
//       if(text.classList.contains('open')){
//       this.textContent = 'close';
//    }else{
//       this.textContent = 'more';
//    }
//    });
   
// }




// ----slider---



var swiper = new Swiper('.swiper', {
   // Default parameters
   slidesPerView: 1,
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
   // Responsive breakpoints
   breakpoints: {
     // when window width is >= 320px
     320: {
       slidesPerView: 1,
       spaceBetween: 20
     },
     // when window width is >= 480px
     480: {
       slidesPerView: 2,
       spaceBetween: 40
     },
     // when window width is >= 640px
     1000: {
       slidesPerView: 3,
       spaceBetween: 50
     }
   }
  
 })



// ----scroll-up---

 window.onscroll = function() {
   let scrollElem = document.getElementById("scrollToTop");
   if (document.documentElement.scrollTop > document.documentElement.clientHeight) {
       scrollElem.style.opacity = "1";
   } else {
       scrollElem.style.opacity = "0";
   }
}
let timeOut;
function goUp() {
    var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    if(top > 0) {
        window.scrollBy(0,-100);
        timeOut = setTimeout('goUp()',20);
    } else clearTimeout(timeOut);
}




// ----breadcrumb---
function showBreadCrumb(){
   let crumbs = window.location.pathname.split("/");
   for(let index=0; index<crumbs.length-1; index++){
       let text = crumbs[index];
       if(index==0) text = "Главная";
       $("#navigation_links").append($("<li><a class='crumb"+ (index==crumbs.length-2? "active" : "") +"' href='"+buildRelativeLink(crumbs.length-index)+"'>"+ text +"</a></li>"));
   }
}
function buildRelativeLink(level)
{
   level = level - 1;
   let link="";
   for (let i=1; i<level; i++)
   {
       link=link+ "../";
   }
   return link;
}




$(function(){
  $("#catalog__color").bind("change", function(){
      var selectedItemValue = $("option:selected").data("path");
      $(".catalog__item-img img").attr("src", selectedItemValue);
  });
})
