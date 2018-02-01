var hamburger = document.querySelector(".page-nav__hamburger");
var navigation = document.querySelector(".page-nav__list");
var closeBtn = document.querySelector(".page-nav__close");

hamburger.addEventListener("click", function(event1) {
   event1.preventDefault();
   navigation.classList.add("page-nav__showbtn");
   hamburger.classList.add("page-nav__closebtn");
   closeBtn.classList.add("page-nav__showbtn");
});

closeBtn.addEventListener("click", function(event2) {
    event2.preventDefault();
    navigation.classList.remove("page-nav__showbtn");
    closeBtn.classList.remove("page-nav__showbtn")
    hamburger.classList.remove("page-nav__closebtn");
});