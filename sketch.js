var tom,tomImage1, tomImage2, tomImage3, tomImage4;
var jerry, jerryImage1, jerryImage2, jerryImage3, jerryImage4;
var ground, groundImage;

function preload() {
  groundImage = loadImage("images/garden.png")

  tomImage1 = loadImage("images/cat1.png"); 
  tomImage2 = loadImage("images/cat2.png"); 
  tomImage3 = loadImage("images/cat3.png"); 
  tomImage4 = loadImage("images/cat4.png");
  
  jerryImage1 = loadImage("images/mouse1.png");
  jerryImage2 = loadImage("images/mouse2.png");
  jerryImage3 = loadImage("images/mouse3.png");
  jerryImage4 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    ground = createSprite(400,400,1000,800);
    ground.addImage(groundImage);

    tom = createSprite(740,650,0,0);
    tom.addImage(tomImage1)
    tom.scale = 0.2;


   jerry = createSprite(200,600,0,0);
  jerry.addImage(jerryImage1)
   jerry.scale = 0.2;


}

function draw() {

    background(255);
   
    if(tom.x-jerry.x < (tom.width-jerry.width)/2){
      jerry.addAnimation("jerrydect",jerryImage4);
      jerry.changeAnimation("jerrydect");

      tom.addAnimation("tomsit",tomImage4)
      tom.changeAnimation("tomsit")
    }

    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
  jerry.addAnimation("jerryTeasing",jerryImage3);
  jerry.changeAnimation("jerryTeasing");
  jerry.frameDelay = 65;

  tom.velocityX = -5;
  tom.addAnimation("tomrunning",tomImage2)
  tom.changeAnimation("tomrunning")
} 



}
