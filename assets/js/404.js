//32smmin
const canvas = document.getElementById("canvas1");

const ctx = canvas.getContext("2d");

//set canvas width same as in html style
const CANVAS_WIDTH = canvas.width = 600; //global variables
const CANVAS_HEIGHT = canvas.height = 600;
const spriteWidth = 3460 / 5 //3460 / 5;  //image full width divided by sprite columns
const spriteHeight = 599;
let gameFrame = 0;
let playerState = "idle";
const staggerFrames = 5; //to slowdown animation
const spriteAnimations = [
    {
        name: "idle",
        frames: 4,
        url:'assets/img/Jetpackman/spritesheets/__jet_pack_man_no_weapon_white_helmet_flying.png',
        loc: [
            {x: 0, y: 0},
            {x: 692, y: 0},
            {x: 1384, y: 0},
            {x: 2076, y: 0},
            {x: 0, y: 599},
            {x: 692, y: 599},
            {x: 1384, y: 599},
            {x: 2076, y: 599},
            {x: 0, y: 1198},
            {x: 692, y: 1198},
            {x: 1384, y: 1198},
            {x: 2076, y: 1198}
        ]
    }
]



const playerImage = new Image();
playerImage.src = 'assets/img/Jetpackman/spritesheets/__jet_pack_man_no_weapon_white_helmet_flying.png';

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); //clear canvas
    let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[0].loc.length  //how many frames
    let frameX = spriteAnimations[0].loc[position].x;
    let frameY = spriteAnimations[0].loc[position].y;
    //source image, rectangular area we want to cutout(sourseX, sourseY, sourceWidth, sourceHeight) where to draw cropped image(Destination: dx, dy, dw, dh
    // ctx.drawImage(playerImage, sx, sy, sw, sh, dx, dy, dw, dh);  this is sample of code. Not commented out code!
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, -15, 0, spriteWidth, spriteHeight);  // image source , top, left, witdth, height,
    gameFrame++;
    requestAnimationFrame(animate);
}

animate();