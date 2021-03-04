var universe , universeImg ;
var astro , astroImg ;
var alein , aleinImg;
var mercury , mercuryImg ;
var astroFlying , atroFlyImg;
var hitAlein , hitAleinImg;
function preload(){
  universeImg = loadImage("images/universe.jpg");
  astroImg = loadImage("images/ats_start.png");
  aleinImg = loadImage("images/alein_start.png");
  mercuryImg = loadImage("images/mercury.jpg");
  astroFlyImg = loadImage("images/ast_flying.png");
  hitAleinImg = loadImage("images/hitAlein.png");
}
function setup() {
  createCanvas(1200,600);
  

  universe = createSprite(400,200,1400,800);
  universe.addImage(universeImg);
  universe.scale = 1.5

  astro = createSprite(1050,250);
  astro.addImage(astroImg);
  astro.scale = 0.8

  alein = createSprite(100,200);
  alein.addImage(aleinImg);
  alein.scale = 0.8;


}

function draw() {
  background("white"); 
  
  universe.x = 600;

 
   

   fill("magenta");
   stroke("magenta");
   strokeWeight(2);
   textSize(40);
   //text("Press 'M' To Enter In The Mercury" , 270,230);

   fill("white");
   stroke("white");
   strokeWeight(2);
   textSize(40);
   //text(" [ Level 1 ]" , 440,280);

   fill("white");
   stroke("white");
   strokeWeight(5);
   textSize(70);
   //text("WELCOME TO THE UNIVERSE",180,70);

     drawSprites();

     if(keyDown('m')){
      level1();
     
    }
 
    //spawnAlien();
}


function level1(){
  universe.destroy();
  alein.destroy();
  astro.destroy();
  //console.log("mercuryLevel");
mercury = createSprite(600,300);
  mercury.addImage(mercuryImg);
  mercury.x = mercury.width/2
  mercury.scale = 1.8;
  mercury.velocityX = -4;


  astroFlying = createSprite(200,400);
  astroFlying.addImage(astroFlyImg);

  //if(frameCount % 100 === 0){
    hitAlein = createSprite(400,200,100,100);
    hitAlein.addImage(hitAleinImg);
    console.log("hitAlein");
   // hitAlein .velocityX = -4;
   // hitAlein.x = Math.round(random(120,400));
    hitAlein.scale = 0.5;
   // mercury.depth = hitAlein.depth;
   // hitAlein.depth = hitAlein.depth+1;
    //  }

    if(mercury.x < 0){
    mercury.x = mercury.width/2
  }

  if(keyDown("left_arrow")){
    astroFlying.x = astroFlying-3;
  }
  
  if(keyDown("right_arrow")){
    astroFlying.x = astroFlying.x + 3;
  }

  if(keyDown("up_arrow")){
    astroFlying.y = astroFlying.y -3;
  }

  if(keyDown("down_arrow")){
    astroFlying.y = astroFlying.y + 3;
  }

  
  
  //fill("blue")
 // stroke("white");
 // strokeWeight(4)
 // textSize(50);
 // text("Welcome To Mercury Level" , 200,50)
}

function spawnAlien(){
console.log("alein called");
 
}