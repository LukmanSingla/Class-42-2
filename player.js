class Player{
    constructor(){ 
        this.index=null;
        this.distance=0;
        this.name="";
        this.lane=0;
    }
    getFinishedPlayers(){
        database.ref("finishedPlayers").on("value",(data) =>{
            finishedPlayers=data.val();
        })
    }
    static updateFinishedPlayers(){
        database.ref("/").update({
           finishedPlayers:finishedPlayers+1
        })
    }
    getCount(){
        database.ref("playerCount").on("value",(data)=>{
        playerNo=data.val(); 
        });
    }
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }
    updateName(){
        database.ref("players/player " + this.index).update({
            distance:this.distance,
            name:this.name,
            lane:this.lane
        });
    }
    static playerInfo(){
        database.ref("players").on("value",(data) =>{
            allPlayers=data.val();
        });
    }
}