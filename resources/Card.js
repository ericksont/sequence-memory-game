class Card{
    async blink(id) {
        return await new Promise(()=>{
            $(`#${id}`).fadeOut(200).fadeIn(200);
        });
    }

    events(){
        $("#board-colors label").on('click',event=>{
            this.blink(event.currentTarget.id);
        })
    }
}