var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

rabbit.x = world.mouseX  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  drawSprites();
  var  select_sprites = Math.round(random(1,3))
if (frameCount % 80 == 0){
if (select_aprites == 1){
createApples()
}else if (select_sprites == 2){
createOrange()
}else{
createRed()
}
}
}


function createOrange() {
orange = crateSprite(random(50,350),40,10)
orange.addImage(orangeImg)
orange.scale=0.07.velocityY = 3
orange.lifetime = 150

}
function createApples() {
apple = crateSprite(random(50,350),40,10)
apple.addImage(appleImg)
apple.scale=0.07
apple.velocityY= 3
apple.lifetime = 150
}
function createRed() {
 red= crateSprite(random(50,350),40,10)
red.addImage(redImg)
red.scale=0.07
red.velocityY=150
red.lifetime = 150
}
