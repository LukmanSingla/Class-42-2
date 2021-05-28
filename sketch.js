var database,gameState=0,game,form,playerNo,count,player,playerCount=0,allPlayers,car1,car2,car3,car4,cars=[],test,xVelocity=0,yVelocity=0;
var ci1,ci2,ci3,ci4,ground1,ground2,bg,oilSpill,oil=[],oilSprite,finishedPlayers=0,finished=0;
function preload(){
    ci1=loadImage("images/car1.png");
    ci2=loadImage("images/car2.png");
    ci3=loadImage("images/car3.png");
    ci4=loadImage("images/car4.png");
    ground1=loadImage("images/track.jpg");
    bg=loadImage("images/ground.png");
    oilSpill=loadImage("images/f1.png");

}
function setup(){
    createCanvas(displayWidth,displayHeight);
    oil=new Group();
    for(var i=0;i<3;i++){
        oilSprite=createSprite(Math.round(random(400,width-400)),-i*1500);
        oilSprite.addImage("Image",oilSpill);
        oilSprite.scale=2;
        oil.add(oilSprite);
    }
    database=firebase.database();
    game=new Game();
    game.getState();
    console.log(oil);
    game.start();
}

function draw(){
    // console.log(playerCount);
    
    if(playerNo==4){
        clear();
        game.update(1);
    }
    if(gameState==1){
        game.play();
    }
}