var b;
var shot;
var ammo = 50;
var bullseye;
var score = 0;
var reloadButton;
function preload(){
}

function setup(){
  createCanvas(400, 400);
  bullseye=createSprite(0, 0, 20, 20);
}

function draw(){
  background("cyan");
  var mx=-mouseX+400;
  var my=-mouseY+400
  bullseye.x=mx;
  bullseye.y=my;
  /*
  line (150, 150, 250, 150);
  line (250, 150, 250, 250);
  line (150, 250, 250, 250);
  line (150, 150, 150, 250);
  */
  
  if (mouseDown(LEFT)&&ammo>0){
    ammo--;
    b=createSprite(200,200,10,10);
    b.debug=true;
    if(bullseye.isTouching(b)){
        score++;
    };
  }
  if (mousePressedOver(reloadButton)){
    ammo=50;
  }
  fill ("green");
  rect(mx-1000, my, 2000, 600);
  fill("black");
  rect (mx-3, my, 6, 200); //Target Stand
  
  fill("orange");
  ellipse (mx-130, my-130-70, 50, 50); //Sun
  fill("white");
  rect (mx-70, my-90-70, 40, 15);
  rect (mx, my-70, 30-70, 15);
  rect (mx+50, my-10-70, 40, 15);
  fill("black");
  text("Ammo: "+ammo+" Score:"+score, 250, 30);
  
  line (190, 200, 210, 200);
  line (200, 190, 200, 210);
  reloadButton=createSprite(350, 100, 40, 40);
  fill("black");
  drawSprites();
  ellipse(mouseX, mouseY, 5, 5);
  text("R", 345, 105);
}