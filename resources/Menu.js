class Menu {

    constructor(){
        this.events();
    }

    events(){
        $("#menu-easy").on("click",(event)=>{
            this.acivateMenu(event.currentTarget);
            
        });

        $("#menu-medium").on("click",(event)=>{
            this.acivateMenu(event.currentTarget);
            
        });

        $("#menu-hard").on("click",(event)=>{
            this.acivateMenu(event.currentTarget);
            
        });

        $("#start-game").on("click",(event)=>{
            
            const name = $("#id").val();

            if(memoryGame.status === "STARTED"){
                //$.confirm();
            } else {
                memoryGame.start();
            }
            
            
        });

    }

    acivateMenu(obj){
        $(".nav-link").each((key, obj)=>{
            $(obj).addClass('link-dark');
            $(obj).removeClass('active');
        });

        $(obj).addClass('active');
    }

}

const menu = new Menu();