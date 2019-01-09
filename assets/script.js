var container = document.getElementById('ht-container');
var coin = document.getElementById('ht-coin');

var cart = document.getElementById('ht-card');
var tail = document.getElementById('ht-back');

var isFace = true;

var flip = function() {
  h_t = parseInt((1 / Math.random()) * 10000) % 2;

  isFace != isFace;

  if (isFace) {
    cart.style.transform = "rotateY(540deg)";
  } else {
    tail.style.transform = "rotateY(540deg)";
  }

  if (h_t === 0) {
    coin.innerHTML = "H";
  } else {
    coin.innerHTML = "T";
  }

  console.log(h_t);
}

container.addEventListener("click", flip);
