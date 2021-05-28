class Game{
    constructor(){
        
    }
    getState(){
        var refer=database.ref("gameState");
        refer.on("value",function(data){
            gameState=data.val();
        });
    }
    update(state){
     database.ref("/").update({
         gameState:state
     });
    }
    async start(){
    background("white");
    player=new Player();
    player.getCount();
        if(gameState===0){
            database.ref("playerCount").on("value",function(data){
                playerCount=data.val();
                
                console.log("test");
            });
      

            // if(playerCountRef.exists()){
            //     playerCount=playerCountRef.val();
            //     player.getCount();
            // }
            form=new Form();
            form.display();
        }
        car1=createSprite(width/2-300,400,50,50);
        car2=createSprite(width/2-100,400,50,50);
        car3=createSprite(width/2+100,400,50,50);
        car4=createSprite(width/2+300,400,50,50);
        car1.addImage("car1",ci1);
        car2.addImage("car2",ci2);
        car3.addImage("car3",ci3);
        car4.addImage("car4",ci4);
        cars=[car1,car2,car3,car4];
        finished=0;
    }
    play(){
        // imageMode();
        player.getFinishedPlayers();
        Player.playerInfo();
        background(bg);
        var x=0;
    image(ground1,0,height-height*5,width,height*5);

        form.hide();
        var j=0;
        var index=0;
        // console.log(allPlayers);
        if(allPlayers!=undefined){
        for(var i in allPlayers){
            index++;
    // console.log(cars[index-1].y);
            cars[index-1].x=width/2-300+(index-1)*200+allPlayers[i].lane;
            
            cars[index-1].y=displayHeight-allPlayers[i].distance-160;
            if(player.index==index){
                fill("yellow");
                    if(cars[index-1].isTouching(oil)){
                    if(yVelocity>5){
                    yVelocity-=0.5;
                    }else{
                        yVelocity-=0.3;
                    }
                    console.log(yVelocity);
            }
                camera.position.y=cars[index-1].y;
                text(allPlayers[i].name,cars[index-1].x-allPlayers[i].name.length*3,cars[index-1].y+60);
                // cars[index-1].shapeColor="yellow";
            }else{
                fill("#000");
            }
            // textSize();
            // text(allPlayers[i].name + " : " + allPlayers[i].distance,150,camera.position.y-i*100-200);
            j++;
        }}
        if(player.distance<5075){
            if(keyDown("up") && player.index!=null ){
            // player.distance+=5;
            // player.updateName();
            
            yVelocity+=0.5;
            player.distance+=yVelocity;
            if(keyDown("left")){
                xVelocity-=0.1;
                player.lane+=xVelocity;
            }else if(keyDown("right")){
                xVelocity+=0.1;
                player.lane+=xVelocity;
            }else{
                player.lane=0;
                xVelocity=0;
            }
            // console.log(xVelocity);
        }else if(finished==0){
            Player.updateFinishedPlayers();
            finished=1;
            yVelocity=0;
        }else{
            yVelocity=0;
        }
   

        
        player.updateName();
    }
    
    drawSprites();
    }

}