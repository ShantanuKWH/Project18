var monkey, ground, bananaGroup, obstacleGroup, count = 0; 

function setup(){
  createCanvas(400, 400);
  
  monkey = createSprite(100,340,20,50);
  monkey.setAnimation("monkey");
  monkey.scale = 0.1;

  ground = createSprite(400,350,800,10);
  ground.velocityX = -4;
  ground.x = ground.width /2;
}


function draw() {
  background("white");
  
  
  
  if (ground.x < 0){
  ground.x = ground.width/2;
  }
  
  if(keyDown("space") && monkey.y >= 300){
  monkey.velocityY = -15 ;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  background(255);
  
  spawnBananas();
  
  spawnObstacles();
  
  stroke("black");
  textSize(20);
  fill("black")
  count = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ count,100,50);
  
  drawSprites();
  
}

function spawnBananas() {
  if(World.frameCount % 80 === 0) {
    var banana = createSprite(400,365,10,40);
    banana.setAnimation("Banana");
    banana.velocityX = - (6 + 3*count/100);
    banana.y = randomNumber(120,200);           
    banana.scale = 0.05;
    banana.lifetime = 70;
    bananaGroup.add(banana);
  }
}

function spawnObstacles() {
  if(World.frameCount % 300 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.setAnimation("Stone");
    obstacle.velocityX = - (6 + 3*count/100);
    obstacle.y = 340;           
    obstacle.scale = 0.15;
    obstacle.lifetime = 70;
    obstacleGroup.add(obstacle);
  }
}