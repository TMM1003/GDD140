function Bullet(){
    bullet = new Sprite(enemy.x, enemy.y - 40, 5,5);
    bullet.collider = 'kinematic';
    bullet.color = 'none';
    bullet.stroke = 'none'
    console.log('scan line triggered');
    bullet.vel.y = 0;
}
function bulletFire() {
    bullet.collider = 'dynamic';
    bullet.color = 'yellow';
    bullet.stroke = 'yellow'
    console.log('scan line triggered');
    bullet.vel.y = -1;
}