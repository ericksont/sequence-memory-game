class MemoryGame {

    level = "EASY"; // EASY, MEDIUM, HARD
    status = "NOT_STARTED"; // STARTED, NOT_STARTED

    constructor(){
        objScore.readPositions();
    }

    start(level = "EASY"){
        this.level = level;
        
        if(this.status === "STARTED"){
            //$.confirm();
            // and go to homepage
        } else loadStartPage()
                
    }

    loadStartPage(){
        // -- chek if the na is loaded in localstorage
        // -- if true check if they need change
        menu.acivateMenu();
        objScore.readPositions()
    }

    play(){
        
        // check if exist a name player

        this.status = "STARTED";
    }

}

const memoryGame = new MemoryGame();