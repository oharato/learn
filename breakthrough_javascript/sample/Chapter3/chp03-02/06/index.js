var canvas = document.getElementById( "canvas" );
var ctx = canvas.getContext( "2d" ); 

window.requestAnimationFrame = 
  window.requestAnimationFrame || 
  window.mozRequestAnimationFrame || 
  window.webkitRequestAnimationFrame || 
  window.msRequestAnimationFrame ||
  function(cb) {setTimeout(cb, 17);};

var x = 5;
var y = 5;

draw(); 

function draw() {
  ctx.clearRect(0,0,500,500); // 前回までの描画内容を消去

  x += 5; // X位置をずらす
  y += 5; // Y位置をずらす

  ctx.beginPath();
  ctx.fillStyle = "#99ff66";
  ctx.rect( x, y, 100, 200 ); // 位置指定
  ctx.fill();
  ctx.closePath();

  requestAnimationFrame( draw );
}
