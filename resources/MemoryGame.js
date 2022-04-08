class MemoryGame {

    level = "EASY"; // EASY, MEDIUM, HARD
    status = "NOT_STARTED"; // STARTED, NOT_STARTED

    cards = ["blue","red", "green", "yellow", "purple", "orange","pink","gray","cyan"];

    sequence = [];

    menu = new Menu(this);
    player = new Player(this);
    score = new Score(this);
    board = new Board(this);

    constructor(){
        this.start();
    }

    start(level = "EASY"){
        this.level = level;
        if(this.status === "STARTED"){
            $.confirm({
                title: 'Are you sure?',
                content: 'Do you want to exit the current game?',
                icon: 'fa fa-question-circle',
                animation: 'scale',
                closeAnimation: 'scale',
                opacity: 0.5,
                buttons: {
                    'confirm': {
                        text: 'yes',
                        btnClass: 'btn-blue',
                        action: ()=>{
                            this.status = "NOT_STARTED";
                            this.loadStartPage();
                        }
                    },
                    cancel: function(){
                        
                    }
                }
            });
        } else this.loadStartPage()
                
    }

    loadStartPage(){
        $("#start-page").show();
        $("#board-page").hide();
        this.menu.acivateMenu();
        this.score.readPositions();
        if(this.player.checkName(false))
            this.player.showName();
    }

    play(){
        this.player.setName();
        if(this.player.checkName(true)) {
            this.status = "STARTED";
            this.board.loadBoard();
        }
    }

}

const memoryGame = new MemoryGame();