const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
const counters = document.querySelectorAll(".counter");
let scrollStarted = false;

btn.addEventListener("click", navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle() {
  console.log("clicked");
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = "0";
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target"); // or we can wrap Number()
      const c = +counter.innerText;
      const increment = target / 100;
      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 10);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => {
    counter.innerText = "0";
  });
}
function scrollPage() {
  const scrollPos = window.scrollY;
  if (scrollPos > 120 && !scrollStarted) {
    console.log('scroll y')
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}


