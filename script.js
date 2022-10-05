// --------------Tortoise moving----------------------
function tortoise() {
  let tortoise = document.querySelector("#tortoise");
  let start = 20;
  let win = 940;
  let tortoiseSpeed = 3;
  let getsetgo = setInterval(function () {
    start = start + tortoiseSpeed;
    if (start >= win) {
      clearInterval(getsetgo);
    }
    if (start > 550 && start < 570) {
      let audio = new Audio("audio/2000years.mp3");
      audio.play();
    }
    if (start > 880 && start < 882) {
      let audio = new Audio("audio/yayy.mp3");
      audio.play();
    }
    tortoise.style.left = start + "px";
  }, 100);
}
// ----------------rabbit------------------------
function rabbit() {
  let rabbit = document.querySelector("#rabbit");
  let start = 20;
  let mid = 440;
  let tortoiseSpeed = 5;
  let getsetgo = setInterval(function () {
    start = start + tortoiseSpeed;
    if (start >= mid) {
      clearInterval(getsetgo);
    }
    rabbit.style.left = start + "px";
  }, 100);
}
// -------------------Clouds---------------------------
function cloud1() {
  let cloud1 = document.querySelector("#cloud1");
  let start = 20;
  let end = 800;
  let wind = 9;
  let skyclouds = setInterval(function () {
    start = start + wind;
    if (start >= end) {
      start = 0;
    }

    cloud1.style.left = start + "px";
  }, 120);
}
function cloud2() {
  let cloud2 = document.querySelector("#cloud2");
  let start = 500;
  let end = 800;
  let wind = 9;
  let skyclouds = setInterval(function () {
    start = start + wind;
    if (start >= end) {
      start = 0;
    }
    cloud2.style.left = start + "px";
  }, 120);
}
function cloud3() {
  let cloud3 = document.querySelector("#cloud3");
  let start = 600;
  let end = 800;
  let wind = 9;
  let skyclouds = setInterval(function () {
    start = start + wind;
    if (start >= end) {
      start = 0;
    }
    cloud3.style.left = start + "px";
  }, 120);
}
cloud1();
cloud2();
cloud3();
