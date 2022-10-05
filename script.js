// let balloon = document.querySelector("#balloon-left");
// function toandfro() {
//   let start = 300;
//   let end = 1500;
//   let speed = 6;
//   let move = setInterval(function () {
//     start = start + speed;
//     if (start >= end) {
//       //speed = speed * -1;
//       start = 0;
//     }
//     balloon.style.left = start + "px";
//   }, 100);
// }
// toandfro();

function tortoise() {
  // let getsetgo = null;
  let balloon = document.querySelector("#balloon-left");
  let start = 1000;
  let win = 200;
  let tortoiseSpeed = 8;
  let getsetgo = setInterval(function () {
    start = start + tortoiseSpeed;
    if (start <= win) {
      clearInterval(getsetgo);
    }
    balloon.style.left = start + "px";
  }, 200);
}
tortoise();

// function rabbit() {
//   let cloud = document.querySelector(".cloud5");
//   let start=200;
//   let win=500;
//   let rabbitspeed=12;
// let getsetgo=setInterval(function () {
//   start = start + tortoiseSpeed;
//   if (start >= win) {
//     clearInterval(getsetgo);
//   }
//   balloon.style.left = start + "px";
// }, 300);)
// }

rabbit();
// var id = null;
// var elem = document.getElementById("#balloon-left");
// let width = screen.height;
// var pos = width / 2;
// clearInterval(id);
// id = setInterval(frame, 10);

// function frame() {
//   if (pos > 1000) {
//     clearInterval(id);
//   } else {
//     pos--;
//     elem.style.top = pos + "px";
//   }
// }
