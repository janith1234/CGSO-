var thickness
var bullet, wall1;
var fastest, weight;
function setup() {
  createCanvas(1600, 400)
  thickness = random(22, 83)
  fastest = random(223, 321)
  weight = random(30, 52)
  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX = fastest;
  bullet.shapeColor = color(255);
  wall1 = createSprite(1200, 200, thickness, height / 2)
  wall1.shapeColor = color(80, 80, 80)
} function draw() {
  background(0);
  if (hasCollided(bullet, wall1)) {
    bullet.velocityX = 0;
    damage = 0.5 * weight * fastest * fastest / (thickness * thickness * thickness)
    if (damage < 10) {
      wall1.shapeColor = "green";
    }
    else {
      wall1.shapeColor = "red";

    }
  }

  drawSprites();
}
function hasCollided(lbullet, lwall) {
  bulletRightEdge = lbullet.x + lbullet.width; wallLeftEdge = lwall.x;
  if (bulletRightEdge >= wallLeftEdge) { return true } return false;
}