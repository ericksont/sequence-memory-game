class Player {

    name = "";

    setName(){
        this.name =  $("#name").val();
    }

    checkName(showMessage){
        
        if(this.name == ''){
            if(showMessage === true)
            $.alert({
                title: 'warning!',
                icon: 'fa fa-warning',
                type: 'orange',
                content: 'Fill out player name',
            });
            return false;
        } else 
            return true;
        
    }

    showField(){
        this.name = "";
        $("#name").show();
        $("#player").hide();
        $("#player h3").text('');
    }

    showName(){
        $("#name").hide();
        $("#player").show();
        $("#player h3").text(this.name);
    }

}