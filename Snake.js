let framesPerSecond = 35;
let SnakeHeight = 30;
let SnakeWidth = 30;
let SnakeX = 360;
let SnakeY = 260;
let speed = 1;
let SnakeLength = [];
let FoodArray = [];
let currentMoveW;
let currentMoveA;
let currentMoveS;
let currentMoveD;
let w;
let a;
let s;
let d;
let intervalW;
let intervalA;
let intervalS;
let intervalD;
let foodShown = false;

let arrayRandomX = [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400,
    420, 440, 460, 480, 500, 520, 540, 560, 580, 600, 620, 640, 660, 680, 700, 720, 740, 760, 780, 800];

let arrayRandomY = [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400,
    420, 440, 460, 480, 500, 520, 540, 560];

function collisionDetection(i) {
    if (SnakeX + (SnakeWidth - 1) >= FoodArray[i].xPos &&
        SnakeX <= FoodArray[i].xPos + (SnakeWidth - 1) &&
        SnakeY + SnakeHeight >= (FoodArray[i].yPos + 1) &&
        (SnakeY + 1) <= FoodArray[i].yPos + SnakeHeight) {
        SnakeLength[1] = new Snake(SnakeX, SnakeY, SnakeWidth, SnakeHeight, 'white');
        return foodShown = false
    }
}

function LoadFood(){
        //Food
    let foodInterval = setInterval(function(){
        if(foodShown === true){
            clearInterval(foodInterval);
        }
        else if (foodShown === false) {
            FoodArray[0] = new Food();
            foodShown = true;
        }
    }, 500)
    FoodArray[0].showFood();
}

class Snake {
    constructor(xPos, yPos, width, height, color) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    show(){
        colorRect(this.xPos, this.yPos, this.width, this.height, this.color);
    }

}


class Food {
    constructor() {
        this.xPos = arrayRandomX[Math.floor(Math.random() * arrayRandomX.length)];
        this.yPos = arrayRandomY[Math.floor(Math.random() * arrayRandomY.length)];
        this.width = 30;
        this.height = 30;
        this.color = 'Pink';
    }

    showFood(){
        colorRect(this.xPos, this.yPos, this.width, this.height, this.color);
    }
}


window.onload = function(){
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    setInterval(function() {
        moveEverything();
        drawEverything();

    }, 1 / framesPerSecond)
}

function drawEverything(){

    colorRect(0, 0, canvas.width, canvas.height, 'black');

    //Snake Head
    SnakeLength[0] = new Snake(SnakeX, SnakeY, SnakeWidth, SnakeHeight, 'white');
    SnakeLength[0].show();

    //Snake Body
    LoadFood();
    collisionDetection(0);
    SnakeLength[1].show();
}

function moveEverything() {

    document.onkeydown = function (event) {
        switch (event.key) {
            case 'w':
                w = true;
                a = false;
                s = false;
                d = false;
                currentMoveD = false;
                currentMoveS = false;
                currentMoveA = false;

                if(currentMoveW === true){
                    break;
                }
                if(w === true) {
                    intervalW = setInterval(function () {
                        if (SnakeY === 0 || w === false) {
                            clearInterval(intervalW)
                        }
                        SnakeY = SnakeY - speed;
                        currentMoveW = w;
                    }, 1)
                }
                break;
            case 'a':
                w = false;
                a = true;
                s = false;
                d = false;
                currentMoveW = false;
                currentMoveS = false;
                currentMoveD = false;
                if(currentMoveA === true){
                    break;
                }

                if(a === true) {
                    intervalA = setInterval(function () {
                        if (SnakeX === 0 || a === false) {
                            clearInterval(intervalA)
                        }
                        SnakeX = SnakeX - speed;
                        currentMoveA = a;
                    }, 1)
                }
                break;
            case 's':
                w = false;
                a = false;
                s = true;
                d = false;
                currentMoveW = false;
                currentMoveA = false;
                currentMoveD = false;

                if(currentMoveS === true){
                    break;
                }
                if(s === true) {
                    intervalS = setInterval(function () {
                        if (SnakeY === 570 || s === false) {
                            clearInterval(intervalS)
                        }
                        SnakeY = SnakeY + speed;
                        currentMoveS = s;
                    }, 1)
                }
                break;
            case 'd':
                w = false;
                a = false;
                s = false;
                d = true;
                currentMoveW = false;
                currentMoveS = false;
                currentMoveA = false;

                if(currentMoveD === true){
                    break;
                }
                if(d === true) {
                    intervalD = setInterval(function () {
                        if (SnakeX === 770 || d === false) {
                            clearInterval(intervalD)
                        }
                        SnakeX = SnakeX + speed;
                        currentMoveD = d;
                    }, 1)
                    break;
                }
        }
    }
}

function colorRect(leftX, topY, width, height, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);
}


