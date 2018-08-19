var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
//ctx.fillStyle = "#ffffff";

//60

var sneak = {
    "x": 0,
    "y": 0
}




function renderArena(ctx) {

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, 400, 400);//x y w h

ctx.fillStyle = 'white';
ctx.fillRect(sneak.x, sneak.y, 20, 20);
}
renderArena(ctx)





document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    
    if (keyName === "ArrowRight") {
        sneak.x += 20;
    }
    if (keyName === "ArrowLeft") {
        sneak.x -= 20;
    }
    if (keyName === "ArrowDown") {
        sneak.y += 20;
    }
    if (keyName === "ArrowUp") {
        sneak.y -= 20;
    }
    console.log(keyName);
    renderArena(ctx)
    //console.log(keyName);
});


