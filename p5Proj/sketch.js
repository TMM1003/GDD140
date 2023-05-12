let player;
let enemies = [];

function setup() {
  createCanvas(600, 400);
  drawMap();
  player = new Player();

  const initialPlayerPosition = createVector(player.sprite.x, player.sprite.y);

  enemies.push(new Enemy(50, 180, 20, 20, "North"));
  enemies.push(new Enemy(230, 100, 20, 20, "West"));
  enemies.push(new Enemy(100, 280, 20, 20, "East"));
  enemies.push(new Enemy(100, 320, 20, 20, "East"));
  enemies.push(new Enemy(560, 30, 20, 20, "West"));

  enemies.push(new Enemy(445, 170, 20, 20, "East"));
  enemies.push(new Enemy(555, 170, 20, 20, "West"));
  enemies.push(new Enemy(500, 260, 20, 20, "South"));



  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];
    enemy.initialPlayerPosition = initialPlayerPosition;
  }
}

function draw() {
  background(220);

  // Player Movement
  player.update();
  let playerVelocityMagnitude = player.sprite.vel.mag();
  worldTime = playerVelocityMagnitude;
  text("Player Speed: " + worldTime, 25, 100); // Display player's speed

  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];
    enemy.update(player.sprite);
  }
}

function mouseClicked() {
  console.log("Mouse clicked at x:" + mouseX + ", y:" + mouseY);
}