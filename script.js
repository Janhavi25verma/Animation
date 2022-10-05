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
// tortoise();
// rabbit();
