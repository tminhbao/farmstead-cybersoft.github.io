const searchElement = document.querySelector("input");
const page2 = document.getElementById("page-2");
const next1 = document.getElementById("next-1");
const backToTop = document.getElementById("backToTop");
const showGoToTop = 100;

searchElement.onclick = function () {
  const navbarSearchElement = document.querySelector(".navbar-search");
  searchElement.style.width = "160px";
};

searchElement.onblur = function () {
  searchElement.style.width = "30px";
};

const sunIconElement = document.querySelector(".fa-sun");
const moonIconElement = document.querySelector(".fa-moon");

const changeTheme = function (x) {
  x.classList.remove("fa-regular fa-moon tsoggle-theme-icon");
  x.classList.add("fa-regular fa-sun toggle-theme-icon");
};

// GO TO PAGE 2
//page2.addEventListener("click", function (e) {
//  e.preventDefault();
//  document.location.href = "page2.html";
//});

// GO TA PAGE 2
if (page2 && next1) {
  page2.addEventListener("click", function (e) {
    e.preventDefault();
    document.location.href = "blog2.html";
  });

  next1.addEventListener("click", function (e) {
    e.preventDefault();
    document.location.href = "blog2.html";
  });
}

// BACK TO TOP
// $(document).ready(function () {
//   $(window).scroll(function () {
//     if ($(this).scrollTop() >= 300) {
//       $("#backToTop").fadeIn();
//     } else {
//       $("#backToTop").fadeOut();
//     }

//     $("#backToTop").click(function () {
//       $("html", "body").animate({ scrollTop: 0 }, 1000);
//     });
//   });
// });

// SHOW MENU
const menuLink = document.getElementById("nav-link");
const menuButton = document.getElementById("menu-button");

if (menuButton && menuLink) {
  menuButton.addEventListener("click", function () {
    menuLink.classList.toggle("active");
  });
}

// CHANGE NAVBAR CSS
const headerChange = document.querySelector(".header");
const logoChange = document.querySelector(".logo");
const menuIconChange = document.querySelector(".fa-bars");
const navbarChange = document.querySelector(".navbar");

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 50) {
    headerChange.classList.add("change-css");
    logoChange.classList.add("change-css");
    menuIconChange.classList.add("change-css");
    navbarChange.classList.add("change-css");
  } else {
    headerChange.classList.remove("change-css");
    logoChange.classList.remove("change-css");
    menuIconChange.classList.remove("change-css");
    navbarChange.classList.remove("change-css");
  }
});

// CHANGE HEADER
