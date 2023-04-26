function Enemy() {
  //Constructor
  enemy = new Sprite(50,200,20,20);
  enemy.color = '#3E424B';
  enemy.stroke = '#3E424B';
  enemy.collider = 'dynamic';
  enemy.drag = 20;
  enemy.rotationLock = true;
}
  