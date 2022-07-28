// menu and hamburger
const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    closeElem = document.querySelector(".menu__close"),
    closeElem2 = document.querySelector(".menu__overlay");

hamburger.addEventListener("click", () => {
    menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
    menu.classList.remove("active");
});

closeElem2.addEventListener("click", () => {
    menu.classList.remove("active");
});

//
const counters = document.querySelectorAll(".skills__ratings-counter"),
    lines = document.querySelectorAll(".skills__ratings-line span");

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

// smooth scroll on links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        menu.classList.remove("active");
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

// // background movment
// const el = document.querySelector(".promo");

// el.addEventListener("mousemove", (e) => {
//   el.style.backgroundPositionY = -e.offsetY / 40 + "px";
// });
