window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function(cb) {setTimeout(cb, 17);};

var x1 = 5;
var y1 = 5;
var x2 = 100;
var y2 = 5;

var canvas = document.getElementById( "canvas" );
var ctx = canvas.getContext( "2d" ); 
// 1.図形を描画
// 描画サイクルを開始する
render(); 

function render() {
  // 2.一度消去
  ctx.clearRect(0,0,500,500); // 前回までの描画内容を消去

  updateposition();
  draw(x1, y1); // １個目描画
  draw(x2, y2); // ２個目描画

  // 5.一定間隔をおく
  // requestanimationframeをつかって、ブラウザの更新のタイミングに実行する
  requestAnimationFrame( render );
}

function updateposition() {
  // 3. 位置をずらす
  x1 += 5; // x位置をずらす
  y1 += 5; // y位置をずらす
  x2 += 5; // 2個目の図形の座標をずらす
  y2 += 5; 
}

function draw(posx, posy) {
  // 4. 描画
  ctx.beginPath();
  ctx.fillStyle = "#99ff66";
  ctx.rect( posx, posy, 10, 20 ); // 位置指定
  ctx.fill();
  ctx.closePath();

}
