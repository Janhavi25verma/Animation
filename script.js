// --------------Tortoise moving----------------------
function tortoise() {
  let tortoise = document.querySelector("#tortoise");
  let start = 20;
  let win = 940;
  let tortoiseSpeed = 4;
  let getsetgo = setInterval(function () {
    start = start + tortoiseSpeed;
    if (start >= win) {
      clearInterval(getsetgo);
    }
    tortoise.style.left = start + "px";
  }, 200);
}
function rabbit() {
  let rabbit = document.querySelector("#rabbit");
  let start = 20;
  let mid = 440;
  let tortoiseSpeed = 8;
  let getsetgo = setInterval(function () {
    start = start + tortoiseSpeed;
    if (start >= mid) {
      clearInterval(getsetgo);
    }
    rabbit.style.left = start + "px";
  }, 200);
}
tortoise();
rabbit();
