let wallLeft1;
let WallRight1;
let WallBottom1;
let WallBottom2;
let WallRight1Ext;
let endWallLeft;
let finishPoint;
let barrier;
let barrier2;
let barrier3;

function drawMap() {
  //walls
  wallLeft1 = new Sprite();
  wallLeft1.x = -100;
  wallLeft1.y = 10;
  wallLeft1.h = canvas.height;
  wallLeft1.w = canvas.width / 3;
  wallLeft1.color = 'dimgrey';
  wallLeft1.stroke = 'dimgrey';
  wallLeft1.collider = 'static'; 
  
  WallRight1 = new Sprite();
  WallRight1.x = 200;
  WallRight1.y = 0;
  WallRight1.w = 200;
  WallRight1.h = canvas.height/2.5;
  WallRight1.color = 'dimgrey';
  WallRight1.stroke = 'dimgrey';
  WallRight1.collider = 'static';
  
  WallRight1Ext = new Sprite();
  WallRight1Ext.x = 275;
  WallRight1Ext.y = 175;
  WallRight1Ext.w = 50;
  WallRight1Ext.h = 200;
  WallRight1Ext.color = 'dimgrey';
  WallRight1Ext.stroke = 'dimgrey';
  WallRight1Ext.collider = 'static';
  
  WallBottom1 = new Sprite();
  WallBottom1.x = 38;
  WallBottom1.y = 230;
  WallBottom1.w = 320;
  WallBottom1.h = 50;
  WallBottom1.color = 'dimgrey';
  WallBottom1.stroke = 'dimgrey';
  WallBottom1.collider = 'static';
  
  WallBottom2 = new Sprite();
  WallBottom2.x = 200;
  WallBottom2.y = 370;
  WallBottom2.w = 400;
  WallBottom2.h = 70;
  WallBottom2.color = 'dimgrey';
  WallBottom2.stroke = 'dimgrey';
  WallBottom2.collider = 'static';
  
  endWallLeft = new Sprite();
  endWallLeft.x = 380;
  endWallLeft.y = 240;
  endWallLeft.h = 370;
  endWallLeft.w = 50;
  endWallLeft.color = 'dimgrey';
  endWallLeft.stroke = 'dimgrey';
  endWallLeft.collider = 'static'; 
  
  finishPoint = new Sprite();
  finishPoint.x = 502;
  finishPoint.y = 395;
  finishPoint.h = 10;
  finishPoint.w = 195;
  finishPoint.color = 'red';
  finishPoint.stroke = 'red';
  finishPoint.collider = 'static';
  
  barrier = new Sprite();
  barrier.x = 445;
  barrier.y = 130;
  barrier.h = 25;
  barrier.w = 25;
  barrier.color = 'dimgrey';
  barrier.stroke = 'dimgrey';
  barrier.collider = 'static';
  
  barrier2 = new Sprite();
  barrier2.x = 555;
  barrier2.y = 130;
  barrier2.h = 25;
  barrier2.w = 25;
  barrier2.color = 'dimgrey';
  barrier2.stroke = 'dimgrey';
  barrier2.collider = 'static';
  
  barrier3 = new Sprite();
  barrier3.x = 501;
  barrier3.y = 230;
  barrier3.h = 25;
  barrier3.w = 25;
  barrier3.color = 'dimgrey';
  barrier3.stroke = 'dimgrey';
  barrier3.collider = 'static';
}
