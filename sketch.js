const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world; 
var bg_Img, bg_Img_final;
var background,background1,  background2,  background3,  background4,  background5,  background6,  background7,  background8,  background9,  backgroundFinal;
var enemieRight, enemieRightImg, enemieLeft, enemieLeftImg
var monster, monsterV0;
var monsterDead;
var slime;
var slimeDead
var jason;
var jasonLeft, jasonRight;
var love, loveImg;
var invisibleGround1, groundInvisible;
var invisibleGround2;
var invisibleGround3;
var invisibleGround4;
var invisibleEdge1;
var edgePortal1;
var edgePortal2;
var invisible;
var paredeInvisivel;
var laser, laserImg, laserGroup, laserD, laserDImg, laserDGroup;
var fireBall, fireBallImg, fireBallGroup;
var cloudsGroup;
var cloudImg;
var cloud;
var coracao;
var saude, saude1, saude2, saude3, saude4;
var shooting;
var gameover;
var bg_sound;
var jump;
var die;
var hahaha;
var dragao;
var victorySound;
var jasonParado, jasonParadoImg;
var paper, jasonXmonster, victory, victoryImg;
var gameOverImg, gameOverTittle, restartImg, restart;
var happySong
var edgeVisible1, edgeVisible2;
var lifeJason = 5;
var lifeMonster = 01;
var gameState = "serve";

function preload(){
  bg_Img = loadImage("background.jpg");
  bg_Img_final = loadImage("BGfinal.png");
  monster = loadAnimation("glob-monster1.png", "glob-monster2.png", "glob-monster3.png", "glob-monster4.png");
  monsterV0 = loadImage("glob-monster1.png");
  monsterDead = loadImage("glob_monster_dead.png");
  enemieRightImg = loadAnimation("enemieRight.png", "enemieRight2.png");
  enemieLeftImg = loadAnimation("enemieLeft.png", "enemieLeft2.png");
  tp1 = loadImage("poço.png");
  tp2 = loadImage("poço.png");
  dragonBlack = loadImage("klGpiJ.gif")
  laserImg = loadImage("laser.png");
  laserDImg = loadImage("laserD.png");
  fireBallImg = loadImage("fireball.png")
  coracao = loadImage("life-jason.png");
  jasonLeft = loadAnimation("jason1-left.png", "jason2-left.png");
  jasonRight = loadAnimation("jason1-right.png", "jason2-right.png")
  cloudImg = loadImage("cloud.png");
  solo = loadImage("ground.png");
  loveImg = loadImage("love.png");
  paper = loadImage("logojason.png");
  victoryImg = loadImage("gamewin.png");
  restartImg = loadImage("Retrybutton.png");
  gameOverImg = loadImage("tittlegameover.png");
  shooting = loadSound("shooting-laser.wav");
  jump = loadSound("jump.flac");
  gameover = loadSound("jason.game-over.wav");
  bg_sound = loadSound("bg-music.wav");
  roar = loadSound("monster-roar.mp3");
  die = loadSound("die.mp3");
  hahaha = loadSound("hahaha.wav");
}

function setup() {
 canvas = createCanvas(1525,700);
 engine = Engine.create();
 world = engine.world;
 
 background1 = createSprite(-500,355);
 background1.addImage(bg_Img);

 background2 = createSprite(2025,355,1525,700);
 background2.addImage(bg_Img);

 background3 = createSprite(3045,355,1525,700);
 background3.addImage(bg_Img);

 background4 = createSprite(4065,355,1525,700);
 background4.addImage(bg_Img);
 
 background5 = createSprite(5085,355,1525,700);
 background5.addImage(bg_Img);

 background6 = createSprite(6105,355,1525,700);
 background6.addImage(bg_Img);

 background7 = createSprite(7125,355,1525,700);
 background7.addImage(bg_Img);

 background8 = createSprite(8145,355,1525,700);
 background8.addImage(bg_Img);

 background9= createSprite(9165,355,1525,700);
 background9.addImage(bg_Img);

 backgroundFinal = createSprite(9999,205,1525,700);
 backgroundFinal.addImage(bg_Img_final);
 backgroundFinal.scale = 1.6

 dragao = createSprite(9858,350);
 dragao.addImage('dragon', dragonBlack)

 enemieRight = createSprite(2000,586)
 enemieRight.addAnimation(enemieRightImg);

 edgeFinal = createSprite(9237,350,1,700);
 edgeFinal.visible = false;

 edgeFinal1 = createSprite(9234,350,5,700);
 edgeFinal1.visible = false;

 ultimaParede = createSprite(10760,350,5,700);
 ultimaParede.visible = false;

 hahaha.play();
 hahaha.setVolume(3);

 portal1 = createSprite(100,582);
 portal1.addImage(tp1);
 portal1.scale = 0.50;
 portal1.setCollider("circle", 0,0,227);
 portal1.visible = true;

 portal2 = createSprite(1425,582);
 portal2.addImage(tp2);
 portal2.scale = 0.50;
 portal2.setCollider("circle",0,0,227); 

 jason = createSprite(762,1);
 jason.addAnimation("running", jasonRight);
 jason.scale = 0.60;
 jason.setCollider("rectangle",0,0,jason.width=90,jason.height=130);
 jason.visible = false;

 slime = createSprite(762,530);
 slime.addAnimation("running", monster);
 slime.scale = 7;
 slime.velocityX = 0;
 slime.setCollider("circle",0,0,16)

  saude = createSprite(45,35,40,40);
  saude.addImage(coracao);
  saude.scale = 0.4;

  saude1 = createSprite(82,35,40,40);
  saude1.addImage(coracao);
  saude1.scale = 0.4;

  saude2 = createSprite(119,35,40,40);
  saude2.addImage(coracao);
  saude2.scale = 0.4;

  saude3 = createSprite(156,35,40,40);
  saude3.addImage(coracao);
  saude3.scale = 0.4;

  saude4 = createSprite(193,35,40,40);
  saude4.addImage(coracao);
  saude4.scale = 0.4;

  jasonXmonster = createSprite(762,350);
  jasonXmonster.addImage(paper);
  jasonXmonster.visible = true;

  victory = createSprite(762,350);
  victory.addImage(victoryImg);
  victory.visible = false;

  play = createSprite(697,538,122,49);
  play.scale = 3
  play.visible = false;

  gameWin = createSprite(762,554,120,51)
  gameWin.scale = 2.9;
  gameWin.visible = false;

  invisibleGround1 = createSprite(763,664,100000000,70);
  invisibleGround1.visible = false;

  groundInvisible = createSprite(763,605,1525,1)
  groundInvisible.visible = false;

  ground = createSprite(763,380,420,50);
  ground.addImage("ground", solo);
  ground.setCollider("rectangle",0,0,ground.width=300, ground.height=40);
  ground.visible = false;

  invisibleGround3 = createSprite(99,630,155,10);
  invisibleGround3.visible = false;

  invisibleGround4 = createSprite(1435,630,150,10);
  invisibleGround4.visible = false;

  invisibleEdge1 = createSprite(1,350,2,700);
  invisibleEdge1.visible = false;

  invisibleEdge2 = createSprite(1523,317,1,700);
  invisibleEdge2.visible = false;
  
  invisibleEdge3 = createSprite(1543,317,1,700);
  invisibleEdge3.visible = false;

  edgePortal1 = createSprite(207,585,2,87);
  edgePortal1.visible = false;

  edgePortal2 = createSprite(1310,585,2,87);
  edgePortal2.visible = false;

  edgeVisible1 = createSprite(99,530,155,10)
  edgeVisible1.visible = false;
  
  edgeVisible2 = createSprite(1430,530,155,10)
  edgeVisible2.visible = false;

  invisible = createSprite(1190,190,100,2);
  invisible.visible = false;

  gameOverTittle = createSprite(761,210);
  gameOverTittle.addImage(gameOverImg);
  gameOverTittle.scale = 1.9;
  gameOverTittle.visible = false;

  restart = createSprite(761,325);
  restart.addImage(restartImg);
  restart.scale = 0.4
  restart.visible = false;

  portal2Invivisble = createSprite(1290,585,2,87)
  portal2Invivisble.visible = false; 

  player1V0 = createSprite(730,180,5,360);
  player1V0.visible = false;

  player2V0 = createSprite(800,180,5,360);
  player2V0.visible = false;
 
  jasonParado = createSprite(1120,590);
  jasonParado.addImage(coracao);
  jasonParado.scale = 0.60;
  jasonParado.visible = false;
 
  love = createSprite(1150,500);
  love.addImage(loveImg);
  love.scale = 0.2;
  love.visible = false;

  cloudsGroup = createGroup();
  laserGroup = createGroup();
  laserDGroup = createGroup();
  fireBallGroup = createGroup();
 }


function draw() {
   background(bg_Img);
   Engine.update(engine);

   camera.position.x = jason.position.x;
  
  if(keyDown("up_arrow")&& jason.y >= 570) {
    jason.velocityY = -25;
    jump.play();
  }
  jason.velocityY = jason.velocityY +1;

  if(keyDown("down_arrow")) {
    jason.velocityY = 20;
  }
  
   if(keyDown("left_arrow")) {
    jason.x = jason.x -10;
    jason.addAnimation("running", jasonLeft);
    gameState = "play";
  }

   if(keyDown("right_arrow")) {
    jason.x = jason.x +20;
    jason.addAnimation("running", jasonRight);
    gameState = "play";
  }

  if(jason.isTouching(invisibleEdge3)) {
    background1.destroy();
    ground.destroy();
    jason.collide(invisibleEdge3);
    jason.x = 1560;
  }

  if(jason.isTouching(edgeFinal1)) {
    jason.x = 9240;
  }

  if(jason.isTouching(backgroundFinal)) {
    jason.scale = 0.40;
    laserGroup.scale = 0.6;
    camera.position.x = backgroundFinal.position.x
  }

  if(slime.isTouching(portal2Invivisble)) {
    slime.velocityX = -15;
  }

  if(lifeJason===1 && jason.isTouching(slime)) {
    gameover.play();
  }

  if(lifeJason===0 && jason.isTouching(fireBallGroup)) {
    gameover.play();
  }

  if(lifeJason===1 && jason.isTouching(fireBallGroup)) {
    gameover.play();
  }

if(gameState==="play") {
  
    portal1.visible = true;
    laserGroup.visible = true;
  
  if(jason.isTouching(fireBallGroup)){
    jason.x = 762;
    jason.y = 348;
    die.play();
    lifeJason=lifeJason-2;
  }

  if(jason.isTouching(slime)) {
    jason.x = 762;
    jason.y = 348;
    die.play();
    lifeJason=lifeJason-1;
  }

  if(jason.visible===false) {
    portal1.visible = false;
    portal2.visible = false;
  }

  if(jason.isTouching(invisibleGround3)) {
    jason.x = 1423;
    jason.y = 580;
    jason.visible = false;
    jason.velocityY = -24;
  }

  if(jason.isTouching(invisibleGround4)) {
    lifeJason = 5;
    jason.x = 99;
    jason.y = 580;
    jason.visible = false;
    jason.velocityY = -24;
    camera.position.x = background3.position.x;
  }

  if(fireBallGroup.isTouching(invisibleEdge3)) {
    fireBallGroup.destroyEach();
  }

  if(jason.isTouching(edgeVisible1)||(edgeVisible2)) {
    jason.visible = true;
  }

  if(slime.isTouching(laserGroup)) {
    lifeMonster=lifeMonster-1;
  }
  
  if(slime.isTouching(portal1)) {
    slime.velocity.x = 15;
  }
  
  if(slime.isTouching(portal2)) {
    slime.velocity.x = -13;
  }  

  if(lifeMonster<=699 && slime.isTouching(portal2)) {
    roar.play();
  }
  if(lifeMonster<=250 && slime.isTouching(portal2)) {
    slime.velocityY = -10;
    slime.velocity.x = 0
  }

  if(lifeMonster<=500 && slime.isTouching(portal1)) {
    shoootFireBallR();
  }

  if(lifeMonster<=450 && slime.isTouching(portal2)) {
    shoootFireBallL();
  }

  if(slime.isTouching(invisible)) {
    slime.velocityY = +10;
    shoootFireBallL(); 
  }

  if(fireBallGroup.isTouching(ground)) {
    ground.destroy();
  }

 if(keyWentDown("z")) {
  shooting.play();
  laser = createSprite(150, width/2, 50,20);
  laser.y = jason.y+10;
  laser.x = jason.x-59;
  laser.addImage(laserImg);
  laser.scale = 0.9;
  laser.velocityX = -15;
  laser.depth = jason.depth;
  laser.depth = laser.depth + 10
  laserGroup.add(laser);
 }
 if(keyWentDown("x")) {
  shooting.play();
  laser = createSprite(150, width/2, 50,20);
  laser.y = jason.y+10;
  laser.x = jason.x+59;
  laser.addImage(laserImg);
  laser.scale = 0.9;
  laser.velocityX = 15;
  laser.depth = jason.depth;
  laser.depth = laser.depth + 10
  laserGroup.add(laser);
 }

 if(lifeJason===5){
  saude.visible = true;
  saude1.visible = true;
  saude2.visible = true;
  saude3.visible = true;
  saude4.visible = true;
}

if(lifeJason===4){
  saude.visible = true;
  saude1.visible = true;
  saude2.visible = true;
  saude3.visible = true;
  saude4.visible = false;
}

if(lifeJason===3){
  saude.visible = true;
  saude1.visible = true;
  saude2.visible = true;
  saude3.visible = false;
  saude4.visible = false;
}

if(lifeJason===2){
  saude.visible = true;
  saude1.visible = true;
  saude2.visible = false;
  saude3.visible = false;
  saude4.visible = false;
}

if(lifeJason===1){
  saude.visible = true;
  saude1.visible = false;
  saude2.visible = false;
  saude3.visible = false;
  saude4.visible = false;
}
}

if(lifeJason===0) {
  saude.visible = false;
  jason.destroy();
  slime.velocityX = 0;
  slime.addImage("running", monsterV0);
  slime.velocityY = 0;
  laserGroup.destroyEach();
  shooting.pause();
  gameOverTittle.visible = true;
  restart.visible = true;
  portal1.destroy();
  portal2.destroy();
}

if(lifeJason===-1) {
  saude.visible = false;
  jason.destroy();
  slime.velocityX = 0;
  slime.velocityY = 0;
  slime.addImage("running", monsterV0);
  laserGroup.destroyEach();
  shooting.pause();
  gameOverTittle.visible = true;
  restart.visible = true;
  portal1.destroy();
  portal2.destroy();
}

if(lifeMonster===0) {
  slime.addImage("running", monsterDead);
  slime.velocityX = 0;
  slime.velocityY = 0;
  invisibleEdge2.destroy();
  portal2.destroy();
  edgePortal2.destroy();
  portal2Invivisble.destroy();
  edgeVisible2.destroy();
  invisibleGround4.destroy();
}

if(mousePressedOver(restart)) {
  gameOverTittle.visible = false;
  restart.destroy();
  gameState = "play";
}

if(slime.isTouching(portal1)) {
  slime.velocity.x = 15;
}

spawnClouds();

 cloudsGroup.setLifetimeEach(-1);

 cloudsGroup.setVelocityXEach(-4);

jason.collide(invisibleGround1);
jason.collide(ground);
jason.collide(invisibleEdge1);
jason.collide(invisibleEdge2);
jason.collide(edgePortal1);
jason.collide(edgePortal2);
jason.collide(player1V0);
jason.collide(player2V0);
jason.collide(edgeFinal);
jason.collide(ultimaParede);

if(mousePressedOver(play)) {
  jason.visible = true;
  ground.visible = true;
  jasonXmonster.visible = false;
  hahaha.pause();
  slime.velocityX = -3
  //bg_sound.play();
  player1V0.destroy();
  player2V0.destroy();
  play.destroy();
}

if(gameState==="serve") {
 
  jason.visible = true;
  jason.addImage("running", coracao);
  shooting.pause();
  laserGroup.visible = false;
  jump.pause();
  roar.pause();

  
  textSize(20);
   fill('black')
  text("Use as setas para se mover, ",640,120);
  
  textSize(20);
  fill('black')
  text("aperte Z para atirar para esquerda e",600,145);
  
  textSize(20);
  fill('black')
  text("aperte X para atirar para direita !!",620,170);

  textSize(20);
  fill('red');
  text("vidas:"+lifeJason,-65,100)
}
 
/*if(gameState==="end") {
  gameover.play();
  gameover.setVolume(1);
}*/
   
  drawSprites()
}

function spawnClouds() {
  if(gameState==="play") {
  //código para gerar as nuvens
  if (frameCount % 60 === 0) {
     cloud = createSprite(1590,250,40,10);
    cloud.y = Math.round(random(50,200));
    cloud.addImage(cloudImg);
    cloud.scale = 2;
    cloud.velocityX = -10;
    
     //atribuir tempo de vida à variável
    cloud.lifetime = 900;
    
    //ajustar a profundidade
    cloud.depth = jason.depth;
    jason.depth = jason.depth + 1;
    
    //adicionando nuvem ao grupo
   cloudsGroup.add(cloud);
  }
}
}

function shoootFireBallL() {
  
  fireBall = createSprite(150,width/2, 50,20);
  fireBall.x = slime.x+1;
  fireBall.y = slime.y+50;
  fireBall.addImage(fireBallImg);
  fireBall.scale = 0.9;
  fireBall.velocityX = -19;
  fireBallGroup.add(fireBall);
}

function shoootFireBallR() {
  
  fireBall = createSprite(150,width/2, 50,20);
  fireBall.x = slime.x+1;
  fireBall.y = slime.y+50;
  fireBall.addImage(fireBallImg);
  fireBall.scale = 0.9;
  fireBall.velocityX = 25;
  fireBallGroup.add(fireBall);
}