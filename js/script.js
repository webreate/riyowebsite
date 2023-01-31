// Responsive navbar

let menu = document.querySelector(".icon");
let navbar = document.querySelector(".navbar");

if (menu && navbar) {
  menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };
  window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
  };
}

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var div1 = document.getElementById("boxRight");
var div2 = document.getElementById("box5-right2");
var div3 = document.getElementById("box5-right3");

if(btn1 && btn2 && btn3 && div1 && div2 && div3) {
  btn1.addEventListener("click", () => {
    btn1.classList.add("active3");
    btn2.classList.remove("active3");
    btn3.classList.remove("active3");
    div1.style.display = "flex";
    div2.style.display = "none";
    div3.style.display = "none";
  });
  btn2.addEventListener("click", () => {
    btn1.classList.remove("active3");
    btn2.classList.add("active3");
    btn3.classList.remove("active3");
    div1.style.display = "none";
    div2.style.display = "flex";
    div3.style.display = "none";
  });
  btn3.addEventListener("click", () => {
    btn1.classList.remove("active3");
    btn2.classList.remove("active3");
    btn3.classList.add("active3");
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "flex";
  });
}

$(document).ready(function () {
  bodymovin.loadAnimation({
    container: document.getElementById("lottie-station"),
    path: "lottie/home/station.json",
    renderer: "svg",
    loop: false,
    autoplay: true,
    name: "Station Animation",

  });
});
$(document).ready(function () {
  bodymovin.loadAnimation({
    container: document.getElementById("lottie-persona"),
    path: "lottie/home/persona.json",
    renderer: "svg",
    loop: false,
    autoplay: true,
    name: "Persona Animation",
    actions: [
      {
          visibility:[0, 0.2],
          type: "stop",
          frames: [0]
      },
      {
          visibility:[0.2,0.45],
          type: "seek",
          frames: [0, 45]
      },
      {
          visibility:[0.45,1.0],
          type: "loop",
          frames: [45, 60]
      }
  ]
  });
});
