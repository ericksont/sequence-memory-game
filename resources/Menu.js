class Menu {

    constructor(){
        this.events();
    }

    events(){
        $("#menu-easy").on("click",() => memoryGame.start("EASY") );
        $("#menu-medium").on("click",()=> memoryGame.start("MEDIUM") );
        $("#menu-hard").on("click",()=> memoryGame.start("HARD") );
        $("#start-game").on("click",()=> memoryGame.play() );
    }

    acivateMenu(){
        $(".nav-link").each((key, obj)=>{
            $(obj).addClass('link-dark');
            $(obj).removeClass('active');
        });

        $(`#menu-${memoryGame.level.toLowerCase()}`).addClass('active');
    }

}

const menu = new Menu();