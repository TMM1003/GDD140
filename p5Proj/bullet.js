function Bullet(){
    bullet = new Sprite(enemy.x, enemy.y - 40, 5,5);
    bullet.collider = 'dynamic';
    bullet.color = 'yellow';
    console.log('scan line triggered');
    bullet.moveTo(player);
    bullet.vel.y = -1;
}
