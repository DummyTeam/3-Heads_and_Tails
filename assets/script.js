var coin = document.getElementById('ht-coin');

var flip = function() {
  h_t = parseInt((1 / Math.random()) * 10000) % 2;

  var matrix = window.getComputedStyle(coin, null).getPropertyValue("transform");
  var isTurned = true;

  if (matrix !== '') {
    var values = matrix.split('(')[1].split(')')[0].split(',');
    isTurned = Math.abs(values[2]) > 7.34788e-16;
  }

  var initialTurnValue = (isTurned) ? 0 : 12;
  var turn = (initialTurnValue + h_t) / 2.0;

  coin.style.webkitTransform = 'rotateY(' + turn + 'turn)';
  coin.style.mozTransform = 'rotateY(' + turn + 'turn)';
  coin.style.msTransform = 'rotateY(' + turn + 'turn)';
  coin.style.oTransform = 'rotateY(' + turn + 'turn)';
  coin.style.transform = 'rotateY(' + turn + 'turn)';

}

coin.addEventListener("click", flip);
