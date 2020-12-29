var database;
var gameState = 0;
var player_count;
var game;
var player;
var form;
var bg;
var logo, l1;
var all_player;
var name;
var car1,car2,car3,car4;
var cars;
var img1,img2,img3,img4;
var track1,track2;
var ground;


function preload(){
    img1=loadImage("images/car1.png");
    img2=loadImage("images/car2.png");
    img3=loadImage("images/car3.png");
    img4=loadImage("images/car4.png");
    track1=loadImage("images/track.jpg");
    track2=loadImage("images/track.png");
    ground=loadImage("images/ground.png");
    logo = loadImage("logo.png");
    bg = loadImage("bg.png");
}


function setup() {
    createCanvas(windowWidth-20,windowHeight-15);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    l1 = createSprite(625, 80, 20, 20);
    l1.addImage(logo);

}

function draw() {
   if(gameState == 0){
     background(bg);
     drawSprite(l1);
}

    if (player_count == 4) {
        gameState = 1;
        game.update(gameState);
    }

    if (gameState == 1) {
        clear();
        game.play();
    }
   
   
 
}


