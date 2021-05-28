class Form{
    constructor(){
        this.input=createInput("Name").attribute("maxlength",10);
        this.button=createButton("Play");
        this.greeting=createElement("h3");
        this.reset=createButton("Reset");
    }
    display(){
        var title=createElement("h2");
        title.html("Car Racing Game");
        title.position(width/2,10);
        this.input.position(width/2,height/2-200);
        this.reset.position(50,50);
        // this.input.size(10);
        this.button.position(width/2+130,height/2-100);
        this.reset.mousePressed(()=>{
            player.updateCount(0);       
            game.update(0);     
        });
        this.button.mousePressed(() =>{
            this.input.hide();
            this.button.hide();
            var name=this.input.value();
            this.greeting.html("Hello, " + name);
            this.greeting.position(width/2,height/2-200);
            if(playerNo<4){
            playerNo++;
        }
            player.index=playerNo;
            console.log(playerNo);
            player.updateCount(playerNo);
            player.name=name;
            player.updateName();
        });
    }
    hide(){
        this.greeting.hide();
        // this.input.hide();
        // this.gre.hide();
    }
}