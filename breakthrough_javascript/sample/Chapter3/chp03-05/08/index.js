window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function(cb) {setTimeout(cb, 17);};

var canvas = document.getElementById( "canvas" ),
  ctx = canvas.getContext( "2d" ),
  NUM = 100,
  LIFEMAX = 100,
  particles = [],
  W = 500, 
  H = 500

canvas.width = W;
canvas.height = H;

function Particle(ctx, x, y) {
  this.ctx = ctx;
  this.initialize(x, y);
}

Particle.prototype.initialize = function(x, y){
  this.x = x || 0;
  this.y = y || 0;
  this.radius = 250;
  this.startLife = Math.ceil( LIFEMAX * Math.random() ); // 寿命の初期値
  this.life = this.startLife; // 現在の寿命として設定
  // 速度用のオブジェクトv
  this.v = {
    x: Math.random()*10-5, // x方向の速度
    y: Math.random()*10-5 // y方向の速度
  };
  // 描画色オブジェクト
  this.color = {
    r: Math.floor(Math.random()*255),
    g: Math.floor(Math.random()*255),
    b: Math.floor(Math.random()*255),
    a: 1
  };
}

Particle.prototype.render = function(){
  this.updateParams();
  this.updatePosition();
  this.wrapPosition(); // 範囲外に消えた点を範囲内に戻す
  this.draw();
}

Particle.prototype.draw = function(){
  // 4. 描画
  ctx = this.ctx;
  ctx.beginPath();
  ctx.fillStyle = this.gradient();
  ctx.arc( this.x, this.y, this.radius, Math.PI*2, false ); // 位置指定
  ctx.fill();
  ctx.closePath();
}

Particle.prototype.updateParams= function() {
  var ratio = this.life / this.startLife;
  this.color.a= 1-ratio;
  this.radius = 30 / ratio
  if(this.radius > 300) this.radius = 300;
  this.life -= 1; 
  if( this.life === 0 ) this.initialize();
}
Particle.prototype.updatePosition = function() {
  // 3. 位置をずらす
  this.x += this.v.x;
  this.y += this.v.y;
}

Particle.prototype.wrapPosition = function(){
  if(this.x < 0) this.x = W;
  if(this.x > W) this.x = 0;
  if(this.y < 0) this.y = H;
  if(this.y > H) this.y = 0;
}

Particle.prototype.gradient = function(){
  var col =  this.color.r + ", " + this.color.g + ", " + this.color.b;
  var g = this.ctx.createRadialGradient( this.x, this.y, 0, this.x, this.y, this.radius);
  g.addColorStop(0,   "rgba(" + col + ", " + (this.color.a * 1) + ")");
  g.addColorStop(0.5, "rgba(" + col + ", " + (this.color.a*0.2) + ")");
  g.addColorStop(1,   "rgba(" + col + ", " + (this.color.a * 0) + ")");
  return g
}

function render() {
  // 2.一度消去
  ctx.clearRect(0,0,W,H); // 前回までの描画内容を消去
  // 描画モードを比較明に
  ctx.globalCompositeOperation = "lighter";

  particles.forEach(function(e){ e.render(); });

  // 5.一定間隔をおく
  // requestanimationframeをつかって、ブラウザの更新のタイミングに実行する
  requestAnimationFrame( render );
}

///// ここから実行

// 1.図形を描画
for(var i = 0; i < NUM; i++) {
  var positionx =  Math.random()*W, // x座標を0-20の間でランダムに
      positiony =  Math.random()*H; // y座標を0-20の間でランダムに
  particle = new Particle(ctx, positionx, positiony);
  particles.push( particle );
}
// 描画サイクルを開始する
render(); 
