// $("#mobile_code").intlTelInput({
// 	initialCountry: "in",
// 	separateDialCode: true,
// 	// utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js"
// })
$(document).ready(function () {
  // Responsive navbar

  $(document).on("click", ".icon", ()=>{
    $('.icon').toggleClass("bx-x");
    $('.navbar').toggleClass("active");
  })

  var btn1 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");
  var btn3 = document.getElementById("btn3");
  var div1 = document.getElementById("boxRight");
  var div2 = document.getElementById("box5-right2");
  var div3 = document.getElementById("box5-right3");

  if (btn1 && btn2 && btn3 && div1 && div2 && div3) {
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
  LottieInteractivity.create({
    mode: "scroll",
    player: "#lottie-station",
    loop: false,
    actions: [
      {
        visibility: [0.25, 1],
        type: "playOnce",
      },
    ],
  });
  LottieInteractivity.create({
    mode: "scroll",
    player: "#lottie-persona",
    loop: false,
    actions: [
      {
        visibility: [0.25, 1],
        type: "playOnce",
      },
    ],
  });
  LottieInteractivity.create({
    mode: "scroll",
    player: "#lottie-contactBanner",
    actions: [
      {
        visibility: [0.25, 1],
        type: "loop",
        frames: [0, 100],
      },
    ],
  });
});
