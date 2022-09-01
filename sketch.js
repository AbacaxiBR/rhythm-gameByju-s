var nota1, nota2, nota3, nota4;
var nota1NPC, nota2NPC, nota3NPC, nota4NPC;
var player, playerImg;
var playerImg1, playerImg2, playerImg3 
var placar;
var NPC, NPCimg
var InvisibleTrust
var grupoMUSIC1NPC,grupoMUSIC2NPC,grupoMUSIC3NPC,grupoMUSIC4NPC;
var Som1, Som2, Som3, Som4;
var JOGAR = 1;
var estadoDeJogo = JOGAR;
var Fundo, FundoImg;
var MUSIC1, MUSIC2, MUSIC3, MUSIC4;

var filtro1, filtro2, filtro3, filtro4, filtro5;
var filtroTotureal1,filtroTotureal2,filtroTotureal3
var setaD1, setaD1PNG;
var setaE1, setaE1PNG;
var setaC1, setaC1PNG;
var setaB1, setaB1PNG;


function preload(){
  playerImg = loadAnimation("Images/playerAnimation1.png","Images/playerAnimation1.png", "Images/playerAnimation4.png","Images/playerAnimation1.png", "Images/playerAnimation4.png")
  playerImg1= loadAnimation("Images/playerAnimation1.png","Images/playerAnimation2.png")
  playerImg2= loadAnimation("Images/playerAnimation1.png","Images/playerAnimation3.png")
  playerImg3= loadAnimation("Images/playerAnimation1.png","Images/playerAnimation5.png")
  NPCimg = loadImage("Images/NPC.png")
  FundoImg = loadImage("Images/Fundo.png")
  Som1 = loadSound("sons/Boa_Short.mp3")
  Som2 = loadSound("sons/Bep_Short.mp3")
  Som3 = loadSound("sons/Bee_Short.mp3")
  Som4 = loadSound("sons/Ooh_Short.mp3")
  
  setaD1PNG = loadAnimation("Images/Setas.png", "Images/Setasdireita1.png", "Images/Setasdireita2.png")
  setaE1PNG = loadAnimation("Images/Setas.png", "Images/Setasesquerda1.png", "Images/Setasesquerda2.png")
    setaC1PNG = loadAnimation("Images/Setas.png", "Images/Setascima1.png", "Images/Setascima1.png")
    setaB1PNG = loadAnimation("Images/Setas.png", "Images/Setasbaixo1.png", "Images/Setasbaixo2.png")
  
  
  
  
  grupoMUSIC1= new Group();
  grupoMUSIC2= new Group();
  grupoMUSIC3= new Group();
  grupoMUSIC4= new Group();
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  filtro1 = 0
  filtro2 = 0
  filtro3 = 0
  filtro4 = 0
  filtro5 = 0
  
  filtroTotureal1 = 0
  filtroTotureal2 =0
  filtroTotureal3 = 0
  
  Fundo = createSprite(width/2, height/2, width , height)
  Fundo.addImage(FundoImg)
  
  setaD1 = createSprite(width/2+70, 90, 40, 40);
  setaD1.addAnimation("mover1", setaD1PNG);
  setaD1.scale = 0.5;
  setaD1.visible = true;
  
  
  setaE1 = createSprite(width/2+70, 90, 40, 40);
  setaE1.addAnimation("mover1", setaE1PNG);
  setaE1.scale = 0.5;
  setaE1.visible = false;
  
  
  setaC1 = createSprite(width/2+70, 90, 40, 40);
  setaC1.addAnimation("mover1", setaC1PNG);
  setaC1.scale = 0.5;
  setaC1.visible = false;
  
  
  setaB1 = createSprite(width/2+70, 90, 40, 40);
  setaB1.addAnimation("mover1", setaB1PNG);
  setaB1.scale = 0.5;
  setaB1.visible = false;
  
  
  notaPl1 = createSprite(width/4+50, 50, 50, 50)
  notaPl1.shapeColor = "aqua"
  notaPl2 = createSprite(width/4+120, 50, 50, 50)
  notaPl2.shapeColor = "aqua"
  notaPl3 = createSprite(width/4+200, 50, 50, 50)
  notaPl3.shapeColor = "aqua"
  notaPl4 = createSprite(width/4+280, 50, 50, 50)
  notaPl4.shapeColor = "aqua"

  
  player = createSprite(width/3, height/2+150, 50, 50)
  player.addAnimation("dance",playerImg)
  player.scale = 0.7

  InvisibleTrust = createSprite(width/2, height*3, width/2, 50)
  InvisibleTrust.visible = false;
  
  NPC = createSprite(width/2*1.30, height/2+150, 50, 50)
  NPC.addImage(NPCimg)
  NPC.scale = 0.4
  
  placar = 0
}
function gerarNotas1() {
  
  if (filtro5 === 1){
  if (frameCount % Math.round(random(80, 200)) === 0) {
      filtro=1
      MUSIC1 = createSprite(width/4+50, 580, 50, 50);
      MUSIC1.velocityY  = -(3 + 0.2*placar/5)
      MUSIC1.shapeColor = "purple"
      grupoMUSIC1.add(MUSIC1);
  }
  
  }
}
function gerarNotas2() {

  if (filtro5 === 1){
  if (frameCount % Math.round(random(80, 200)) === 0) {
      MUSIC2 = createSprite(width/4+120, 580, 50, 50);
      MUSIC2.velocityY  = -(3 + 0.2*placar/5)
      MUSIC2.shapeColor = "purple"
      grupoMUSIC2.add(MUSIC2);
  
  }
  }
}
function gerarNotas3() {

  if (filtro5 === 1){
  if (frameCount % Math.round(random(80, 200)) === 0) {
      MUSIC3 = createSprite(width/4+200, 580, 50, 50);
      MUSIC3.velocityY  = -(3 + 0.2*placar/5)
      MUSIC3.shapeColor = "purple"
      grupoMUSIC3.add(MUSIC3);
  }
  }
  
}
function gerarNotas4() {

  if (filtro5 === 1){
  if (frameCount % Math.round(random(80, 200)) === 0) {
      MUSIC4 = createSprite(width/4+280, 580, 50, 50);
      MUSIC4.velocityY  = -(3 + 0.2*placar/5)
      MUSIC4.shapeColor = "purple"
      grupoMUSIC4.add(MUSIC4);
  }
  }
  }



function draw() {
  background("white")
  gerarNotas1()
  gerarNotas2()
  gerarNotas3() 
  gerarNotas4()

  

  if (filtro4 === 1){
    setaD1.visible = false;
    setaE1.visible = true;
  }
  
    if (filtro1 === 1){
    setaB1.visible = true;
    setaE1.visible = false;
  }
  
    if (filtro3=== 1){
    setaC1.visible = true;
    setaB1.visible = false;
  }
  
    if (filtro2 === 1){
    setaC1.visible = false;
  }
  
  if (keyWentDown(UP_ARROW)){
      if (filtroTotureal1 === 1 && filtroTotureal2 === 1 && filtroTotureal3 === 1){
      filtro5 = 1
      filtro2 =1
      nota2 = createSprite(width/4+120, 50, 50, 50)
      nota2.shapeColor = "Red"
      setInterval(destroyNota2, 100);

      }
  }
  if (keyWentDown(RIGHT_ARROW)){
      filtroTotureal1 = 1
      filtro4 =1
      nota4 = createSprite(width/4+280, 50, 50, 50)
      nota4.shapeColor = "Red"
      setInterval(destroyNota4, 100);

    }
  

    if (keyWentDown(LEFT_ARROW)){
    if (filtroTotureal1 === 1 ){
      filtroTotureal2 = 1
      filtro1 =1
      nota1 = createSprite(width/4+50, 50, 50, 50)
      nota1.shapeColor = "Red"
      setInterval(destroyNota1, 100);
      player.changeAnimation("danceII", playerImg2);
  }
  }
    if (keyWentDown(DOWN_ARROW)){
      if (filtroTotureal1 === 1 && filtroTotureal2 === 1){
      filtroTotureal3 = 1
      filtro3 = 1
      nota3 = createSprite(width/4+200, 50, 50, 50)
      nota3.shapeColor = "Red"
      setInterval(destroyNota3, 100);

      }
  }
  if (keyWentDown("w")){
    if (filtroTotureal1 === 1 && filtroTotureal2 === 1 && filtroTotureal3 === 1){
    filtro5 = 1
    filtro2 =1
    nota2 = createSprite(width/4+120, 50, 50, 50)
    nota2.shapeColor = "Red"
    setInterval(destroyNota2, 100);

    }
}
if (keyWentDown("d")){
    filtroTotureal1 = 1
    filtro4 =1
    nota4 = createSprite(width/4+280, 50, 50, 50)
    nota4.shapeColor = "Red"
    setInterval(destroyNota4, 100);

  }


  if (keyWentDown("a")){
  if (filtroTotureal1 === 1 ){
    filtroTotureal2 = 1
    filtro1 =1
    nota1 = createSprite(width/4+50, 50, 50, 50)
    nota1.shapeColor = "Red"
    setInterval(destroyNota1, 100);

}
}
  if (keyWentDown("s")){
    if (filtroTotureal1 === 1 && filtroTotureal2 === 1){
    filtroTotureal3 = 1
    filtro3 = 1
    nota3 = createSprite(width/4+200, 50, 50, 50)
    nota3.shapeColor = "Red"
    setInterval(destroyNota3, 100);

    }
}
    if (grupoMUSIC1.isTouching(nota1)){
        grupoMUSIC1.destroyEach()
        placar = placar + 5
        Som1.play()
  }
      if (grupoMUSIC2.isTouching(nota2)){
          grupoMUSIC2.destroyEach()
          placar = placar + 5
          Som2.play()
  }
      if (grupoMUSIC3.isTouching(nota3)){
          grupoMUSIC3.destroyEach()
          placar = placar + 5
          Som3.play()
  }
      if (grupoMUSIC4.isTouching(nota4)){
          grupoMUSIC4.destroyEach()
          placar = placar + 5
          Som4.play()
  }
  


  drawSprites();
  textSize(25);
  fill(255)
  text("Placar : "+ placar,width/2+150,50);

function destroyNota1(){
    nota1.destroy()
}
function destroyNota2(){
    nota2.destroy()
}
function destroyNota3(){
    nota3.destroy()
}

function destroyNota4(){
    nota4.destroy()
}
}
