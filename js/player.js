class Player {
    constructor() {
        this.distance = 0;
        this.name = null;
        this.index = null;
    }

    static getPlayerinfo() {
        var player_infoRef = database.ref("player");
        player_infoRef.on("value", (data)=> {
            all_player = data.val();
        });
    }

    update() {
        var player_index = "player/player" + this.index;
        database.ref(player_index).set({ name: this.name, distance: this.distance });
    }

    updateCount(count) {
        database.ref("/").update({ player_count: count });
    }

    getCount() {
        var count_ref = database.ref("player_count");
        count_ref.on("value", (data)=> {
            player_count = data.val();
        });
    }



    display() {



    }
}
