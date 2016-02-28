var canvas = document.getElementById( "canvas" );
var ctx = canvas.getContext( "2d" ); 

// 1000ミリ秒 / 60FPS で、1フレームあたりのミリ秒を計算しておく。 
var interval = Math.floor(1000/60);
var x = 5;
var y = 5;

// 描画サイクルを開始する
draw();

function draw() {
  ctx.clearRect(0,0,500,500);

  x += 5;
  y += 5;
  
  ctx.beginPath();
  ctx.fillStyle = "#99ff66";
  ctx.rect( x, y, 100, 200 ); // 位置指定
  ctx.fill();
  ctx.closePath();

  setTimeout( draw, interval ); 
}


