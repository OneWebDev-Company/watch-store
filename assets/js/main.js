/*=============== SHOW MENU ===============*/
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");
navToggle.addEventListener("click", function () {
  navMenu.classList.add("show-menu");
});
navClose.addEventListener("click", function () {
  navMenu.classList.remove("show-menu");
});

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((element) => {
  element.addEventListener("click", linkAction);
});

/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
/*=============== TESTIMONIAL SWIPER ===============*/
let testimonialSwiper = new Swiper(".testimonial-swiper", {
  spaceBetween: 30,
  loop: "true",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== NEW SWIPER ===============*/
var newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 24,
  loop: "true",
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 400) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);
/*=============== SHOW CART ===============*/
const navCart = document.getElementById("nav-cart");
const cart = document.getElementById("cart");
const cartClose = document.getElementById("cart-close");
navCart.addEventListener("click", function () {
  cart.classList.add("show-cart");
});
cartClose.addEventListener("click", function () {
  cart.classList.remove("show-cart");
});

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

let discoverBtn = document.querySelector(".button--gray");
discoverBtn.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo(0, 3000);
});

let counterPices = 0;

let featuredBtns = document.querySelectorAll(".featured__button");
featuredBtns.forEach((featuredBtn) => {
  featuredBtn.addEventListener("click", function (e) {
    counterPices++;
    e.preventDefault();
    featuredImg = e.currentTarget.parentElement.childNodes[3].src;
    featuredTitle =
      e.currentTarget.parentElement.childNodes[5].childNodes[1].textContent;
    featuredPrice =
      e.currentTarget.parentElement.childNodes[5].childNodes[3].textContent;
    cartContainer.innerHTML += `


<article class="cart__card">
<div class="cart__box">
  <img
    src=${featuredImg}
    alt="featured1"
    class="cart__img"
  />
</div>
<div class="cart__details">
  <h3 class="cart__title">${featuredTitle}</h3>
  <span class="cart__price">${featuredPrice}</span>
  <div class="cart__amount">
    <div class="cart__amount-content">
      <a href="#" class="cart__amount-box mins1">
        <i class="bx bx-minus"></i>
      </a>

      <span class="cart__amount-number">1</span>
      <a href="#" class="cart__amount-box plus1">
        <i class="bx bx-plus"></i>
      </a>
    </div>
    <i class='bx bx-trash cart__amount-trash delete-shop'></i>
  </div>
</div>

</article>

`;
 
Swal.fire('Added To Cart');
let plus1=document.querySelectorAll('.plus1');
let mins1=document.querySelectorAll('.mins1');


mins1.forEach(mins => {
  mins.addEventListener('click',function(e){
    e.preventDefault();
    let amountPiceMin=parseInt(e.currentTarget.parentElement.childNodes[3].textContent)
    amountPiceMin--
  parentelem=e.currentTarget.parentElement.parentElement.parentElement.parentElement;
if (amountPiceMin<=0) {
  parentelem.classList.add('hide')
}else{
  e.currentTarget.parentElement.childNodes[3].textContent=amountPiceMin
}
   
  
  
  })
});


plus1.forEach(plus => {
  plus.addEventListener('click',function(e){
  e.preventDefault();
  let amountPice=parseInt(e.currentTarget.parentElement.childNodes[3].textContent)
  amountPice++
  e.currentTarget.parentElement.childNodes[3].textContent=amountPice

  })
});
    checkOut.classList.add("show");

    let deleteShops = document.querySelectorAll(".delete-shop");
    deleteShops.forEach((deletShop) => {
      deletShop.addEventListener("click", function (e) {
        e.preventDefault();
        parentEl = e.target.parentElement.parentElement.parentElement;

        parentEl.classList.add("hide");
      });
    });
  });
});

let cartContainer = document.querySelector(".cart__container");
let homeButton = document.querySelector(".home__button");
homeButton.addEventListener("click", function () {
  cartContainer.innerHTML += `


    <article class="cart__card">
    <div class="cart__box">
    <img src="assets/img/home.png" width="50px" alt="">
    
    </div>
    <div class="cart__details">
      <h3 class="cart__title">SPIRIT ROSE</h3>
      <span class="cart__price">$1245</span>
      <div class="cart__amount">
      <div class="cart__amount-content">
      <a href="#" class="cart__amount-box mins1">
        <i class="bx bx-minus"></i>
      </a>

      <span class="cart__amount-number">1</span>
      <a href="#" class="cart__amount-box plus1">
        <i class="bx bx-plus"></i>
      </a>
    </div>
        <i class='bx bx-trash cart__amount-trash delete-shop'></i>
      </div>
    </div>
    
    </article>
    
    `;

    Swal.fire('Added To Cart');


    let plus1=document.querySelectorAll('.plus1');
let mins1=document.querySelectorAll('.mins1');


mins1.forEach(mins => {
  mins.addEventListener('click',function(e){
    e.preventDefault();
    let amountPiceMin=parseInt(e.currentTarget.parentElement.childNodes[3].textContent)
    amountPiceMin--
  parentelem=e.currentTarget.parentElement.parentElement.parentElement.parentElement;
if (amountPiceMin<=0) {
  parentelem.classList.add('hide')
}else{
  e.currentTarget.parentElement.childNodes[3].textContent=amountPiceMin
}
   
  
  
  })
});


plus1.forEach(plus => {
  plus.addEventListener('click',function(e){
  e.preventDefault();
  let amountPice=parseInt(e.currentTarget.parentElement.childNodes[3].textContent)
  amountPice++
  e.currentTarget.parentElement.childNodes[3].textContent=amountPice

  })
});
      
  checkOut.classList.add("show");

  let deleteShops = document.querySelectorAll(".delete-shop");
  deleteShops.forEach((deletShop) => {
    deletShop.addEventListener("click", function (e) {
      e.preventDefault();
      parentEl = e.target.parentElement.parentElement.parentElement;

      parentEl.classList.add("hide");
    });
  });
});

let products__button = document.querySelectorAll(".products__button");
products__button.forEach((productBtn) => {
  productBtn.addEventListener("click", function (e) {
    let productImg = e.currentTarget.parentElement.childNodes[1].src;
    let productTitle = e.currentTarget.parentElement.childNodes[3].textContent;
    let productPrice = e.currentTarget.parentElement.childNodes[5].textContent;
    cartContainer.innerHTML += `
 
 <article class="cart__card">
 <div class="cart__box">
   <img
     src=${productImg}
     alt="featured1"
     class="cart__img"
   />
 </div>
 <div class="cart__details">
   <h3 class="cart__title">${productTitle}</h3>
   <span class="cart__price">${productPrice}</span>
   <div class="cart__amount">
   <div class="cart__amount-content">
   <a href="#" class="cart__amount-box mins1">
     <i class="bx bx-minus"></i>
   </a>

   <span class="cart__amount-number">1</span>
   <a href="#" class="cart__amount-box plus1">
     <i class="bx bx-plus"></i>
   </a>
 </div>
     <i class='bx bx-trash cart__amount-trash delete-shop'></i>
   </div>
 </div>
 
 </article>
 
 `;

 Swal.fire('Added To Cart');


 let plus1=document.querySelectorAll('.plus1');
let mins1=document.querySelectorAll('.mins1');


mins1.forEach(mins => {
  mins.addEventListener('click',function(e){
    e.preventDefault();
    let amountPiceMin=parseInt(e.currentTarget.parentElement.childNodes[3].textContent)
    amountPiceMin--
  parentelem=e.currentTarget.parentElement.parentElement.parentElement.parentElement;
if (amountPiceMin<=0) {
  parentelem.classList.add('hide')
}else{
  e.currentTarget.parentElement.childNodes[3].textContent=amountPiceMin
}
   
  
  
  })
});


plus1.forEach(plus => {
  plus.addEventListener('click',function(e){
  e.preventDefault();
  let amountPice=parseInt(e.currentTarget.parentElement.childNodes[3].textContent)
  amountPice++
  e.currentTarget.parentElement.childNodes[3].textContent=amountPice

  })
});
    checkOut.classList.add("show");
    let deleteShops = document.querySelectorAll(".delete-shop");
    deleteShops.forEach((deletShop) => {
      deletShop.addEventListener("click", function (e) {
        e.preventDefault();
        parentEl = e.target.parentElement.parentElement.parentElement;

        parentEl.classList.add("hide");
      });
    });
  });
});

let storyDiscover = document.querySelector(".storyDiscover");
storyDiscover.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo(0, 3928);
});
//  window.addEventListener('scroll',function(){
//    console.log(window.scrollY);
//  })

let new__buttons = document.querySelectorAll(".new__button");
new__buttons.forEach((newBtn) => {
  newBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let newImg = e.currentTarget.parentElement.childNodes[3].src;
    let newTitle =
      e.currentTarget.parentElement.childNodes[5].childNodes[1].textContent;
    let newprice =
      e.currentTarget.parentElement.childNodes[5].childNodes[3].textContent;

    cartContainer.innerHTML += `
 
<article class="cart__card">
<div class="cart__box">
  <img
    src=${newImg}
    alt="featured1"
    class="cart__img"
  />
</div>
<div class="cart__details">
  <h3 class="cart__title">${newTitle}</h3>
  <span class="cart__price">${newprice}</span>
  <div class="cart__amount">
  <div class="cart__amount-content">
  <a href="#" class="cart__amount-box mins1">
    <i class="bx bx-minus"></i>
  </a>

  <span class="cart__amount-number">1</span>
  <a href="#" class="cart__amount-box plus1">
    <i class="bx bx-plus"></i>
  </a>
</div>
    <i class='bx bx-trash cart__amount-trash delete-shop'></i>
  </div>
</div>

</article>

`;
Swal.fire('Added To Cart');
let plus1=document.querySelectorAll('.plus1');
let mins1=document.querySelectorAll('.mins1');


mins1.forEach(mins => {
  mins.addEventListener('click',function(e){
    e.preventDefault();
    let amountPiceMin=parseInt(e.currentTarget.parentElement.childNodes[3].textContent)
    amountPiceMin--
  parentelem=e.currentTarget.parentElement.parentElement.parentElement.parentElement;
if (amountPiceMin<=0) {
  parentelem.classList.add('hide')
}else{
  e.currentTarget.parentElement.childNodes[3].textContent=amountPiceMin
}
   
  
  
  })
});


plus1.forEach(plus => {
  plus.addEventListener('click',function(e){
  e.preventDefault();
  let amountPice=parseInt(e.currentTarget.parentElement.childNodes[3].textContent)
  amountPice++
  e.currentTarget.parentElement.childNodes[3].textContent=amountPice

  })
});
    checkOut.classList.add("show");

    let deleteShops = document.querySelectorAll(".delete-shop");
    deleteShops.forEach((deletShop) => {
      deletShop.addEventListener("click", function (e) {
        e.preventDefault();
        parentEl = e.target.parentElement.parentElement.parentElement;

        parentEl.classList.add("hide");
      });
    });
  });
});
let thanksForCheck = document.querySelector(".thanksForCheck");

let checkOut = document.querySelector(".checkOut");
checkOut.addEventListener("click", function (e) {
e.preventDefault();
  cartContainer.innerHTML = "";

  setTimeout(function () {
    checkOut.classList.remove("show");
  }, 1000);
  setTimeout(function () {
    thanksForCheck.classList.add("show");
  }, 1500);
  setTimeout(function () {
    thanksForCheck.classList.remove("show");
  }, 2000);
});

{/* <article class="cart__card">
<div class="cart__box">
  <img
    src=${newImg}
    alt="featured1"
    class="cart__img"
  />
</div>
<div class="cart__details">
  <h3 class="cart__title">${newTitle}</h3>
  <span class="cart__price">${newprice}</span>
  <div class="cart__amount">
  <div class="cart__amount-content">
  <a href="#" class="cart__amount-box mins1">
    <i class="bx bx-minus"></i>
  </a>

  <span class="cart__amount-number">1</span>
  <a href="#" class="cart__amount-box plus1">
    <i class="bx bx-plus"></i>
  </a>
</div>
    <i class='bx bx-trash cart__amount-trash delete-shop'></i>
  </div>
</div>

</article> */}





