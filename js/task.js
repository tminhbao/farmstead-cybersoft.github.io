const headerElement = document.querySelector(".header-b");
const logoElement = document.querySelector(".logo-icon");
const iconThemeElement = document.querySelector(".icon-moon");
const faBarElement = document.querySelector(".fa-bars");
document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 50) {
    headerElement.style.backgroundColor = "white";
    logoElement.style.color = "#000";
    iconThemeElement.style.color = "#000 !important";
    faBarElement.style.color = "#000";
  } else {
    // Trước khi Scroll
    headerElement.style.backgroundColor = "transparent";
    logoElement.style.color = "#fb811e";
    faBarElement.style.color = "#fff";
    //navbarElement.style.color = "transparent";
    iconThemeElement.style.color = "#fff";
  }
});

const barElement = document.querySelector(".fa-bars");
barElement.onclick = () => {
  document.querySelector(".navbar-link").style.display = "block";
};

document.querySelector(".navbar-link").onmouseleave = () => {
  document.querySelector(".navbar-link").style.display = "none";
};

function changeDisplay(x) {
  if (document.querySelector(".navbar-link.d-block")) {
    x.classList.remove("d-block");
  } else {
    x.classList.add("d-block");
  }
}
