var navMain = document.querySelector(".top-navigation");
var navToggle = document.querySelector(".page-header__button");
var header = document.querySelector(".page-header");
var noindex = document.querySelector(".page-header--noindex");

navMain.classList.remove("top-navigation--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("top-navigation_closed")) {
    navMain.classList.remove("top-navigation_closed");
    navMain.classList.add("top-navigation_opened");
    header.classList.remove("page-header_closed");
    header.classList.add("page-header_opened");
		noindex.classList.remove("page-header_closed");
		noindex.classList.add("page-header_opened-noindex");
  } else {
    navMain.classList.add("top-navigation_closed");
    navMain.classList.remove("top-navigation_opened");
    header.classList.add("page-header_closed");
    header.classList.remove("page-header_opened");
		noindex.classList.add("page-header_closed");
		noindex.classList.remove("page-header_opened");
  }
});