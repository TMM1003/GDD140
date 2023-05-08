function Player() 
{
  //Constructor
  player = new Sprite(50,20,20,20);
  player.color = 'salmon';
  player.stroke = 'salmon';
  player.collider = 'dynamic';
  player.drag = 20;
  player.rotationLock = true;
}
  