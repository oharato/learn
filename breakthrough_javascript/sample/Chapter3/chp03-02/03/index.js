var canvas = document.getElementById( "canvas" );
var ctx = canvas.getContext( "2d" ); 

// 1000ミリ秒 / 60FPS で、1フレームあたりのミリ秒を計算しておく。 
var interval = Math.floor(1000/60);

function draw() { 
  ctx.beginPath();
  ctx.fillStyle = "#99ff66";
  ctx.rect( 0, 0, 100, 200 ); 
  ctx.fill();
  ctx.closePath();

  // 指定時間後に draw関数自身を再度実行する
  setTimeout( draw, interval );
}

// 描画サイクルを開始する
draw();
