class Form {
    constructor() {
        this.input = createInput("-----Name-----");
        this.button = createButton("Play");
        
        this.title = createElement("h1");
        this.greet = createElement("h2");
        this.msg = createElement("h3");

    }
    hide() {
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.greet.hide();
        this.msg.hide();

    }

    display() {
       // this.button.width(100);
        this.button.style("background-color","#FEA834");
        this.button.style("border","2px solid red");
        this.button.style("border-radius","9px");
        this.button.style("width","150px");
        this.button.style("height","50px");
        this.input.style("width","250px");
        this.input.style("height","30px");
        this.input.style("border","3px solid black");
        this.input.style("border-radius","3px solid black");
        this.title.html("Multiplayer Car Racing Game");
        this.title.position(width/2-210, 125);
        this.input.position(width/2-150, 190);
        this.button.position(550, 250);


        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            this.title.hide();
            player.name = this.input.value();
            
            player_count++;
            player.updateCount(player_count);
            player.index = player_count;
            player.update();
            
            this.greet.html("Welcome To The Horizon Chase Turbo Game " + player.name);
            this.greet.position(380, 125);
            this.msg.html("Please wait for other players to join as it is a 4 player game");
            this.msg.position(400, 145);
        });
    }
}