class Menu {

    memoryGame;

    constructor(memoryGame){
        this.memoryGame = memoryGame;
        this.events();
    }

    events(){
        $("#menu-easy").on("click",() => {
            if(this.memoryGame.level !== "EASY")
                this.memoryGame.start("EASY") 
        });
        $("#menu-medium").on("click",()=> { 
            if(this.memoryGame.level !== "MEDIUM")
                this.memoryGame.start("MEDIUM"); 
        });
        $("#menu-hard").on("click",()=> {
            if(this.memoryGame.level !== "HARD")
                this.memoryGame.start("HARD"); 
        });
        $("#start-game").on("click",()=> this.memoryGame.play() );
        $("#player button").on("click",()=> this.memoryGame.player.showField() );
    }

    acivateMenu(){
        
        $(".nav-link").each((key, obj)=>{
            $(obj).addClass('link-dark');
            $(obj).removeClass('active');
        });

        $(`#menu-${this.memoryGame.level.toLowerCase()}`).addClass('active');
    }

}