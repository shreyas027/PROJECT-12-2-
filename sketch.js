var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg
var orangeLeaves, orangeLeavesImg



function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeLeavesImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX

  
  var select_sprites = Math.round(random(1,2))

  if(frameCount % 80 === 0){
    if(select_sprites === 1){
      createApples()
    }
    else{
      createLeaves()
    }
  }

  
  

  

  drawSprites();
}


function createApples(){
  apple = createSprite(Math.round(random(50,350),40,10,10))
  apple.addImage(appleImg);
  apple.scale = 0.1
  apple.velocityY = 5;


}

function createLeaves(){
  orangeLeaves = createSprite(Math.round(random(50,350),40,10,10))
  orangeLeaves.addImage(orangeLeavesImg);
  orangeLeaves.scale = 0.1;
  orangeLeaves.velocityY = 5;


}

