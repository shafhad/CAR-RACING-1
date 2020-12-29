class Game {
    constructor() {

    }

    getState() {
        var gameRef = database.ref("gameState");
        gameRef.on("value", function (data) { gameState = data.val() });
    }

    update(state) {
        database.ref('/').update({ gameState: state });
    }

    async start() {
        if (gameState == 0) {
            player = new Player();
            var player_countRef = await database.ref("player_count").once("value");
            if (player_countRef.exists()) {
                player_count = player_countRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(200, 200, 20, 20);
        car2 = createSprite(300, 200, 20, 20);
        car3 = createSprite(400, 200, 20, 20);
        car4 = createSprite(100, 200, 20, 20);
        cars = [car1, car2, car3, car4];

    }
    play() {
        form.hide();
        image(track2);
        drawSprites();
        Player.getPlayerinfo();
        if (keyWentDown(UP_ARROW)) {
            //player.distance = player.distance + 50;
            player.distance += 50;
            player.update();
        }

        if (all_player !== undefined) {
            var pos = 200;
            var i = 0;
            var x = 0;
            var y = 0;
            for (var plr in all_player) {
                pos += 20;
                y = windowHeight - all_player[plr].distance;
                x = x + 200;

                i++;
                cars[i - 1].x = x;
                cars[i - 1].y = y;
                if (i == plr) {
                    console.log("hello");
                    camera.position.x = windowWidth / 2;
                    camera.position.y = cars[i - 1].y;
                    cars[i - 1].shapeColor = "red";
                }

            }
        }




    }
}



