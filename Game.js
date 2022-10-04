let framesPerSecond = 60;
let squareHeight = 40;
let squareWidth = 40;
let squareX = 0;
let squareY = 0;
let icebergs = [];
let boatSpeed = 10;
let level = 1;
let collisionTop = false;
let collisionBottom = false;
let collisionLeft = false;
let collisionRight = false;
let objectMove = false;

function loadLevels(){
    // level 1
    if(level === 1){
        icebergs[0] = new iceberg(400, 0, 40, 40, 'white')
        icebergs[0].show();
        icebergs[1] = new iceberg(400, 560, 40, 40, 'white')
        icebergs[1].show();
        icebergs[2] = new iceberg(0, 40, 40, 40, 'white')
        icebergs[2].show();
        icebergs[3] = new iceberg(0, 80, 40, 40, 'white')
        icebergs[3].show();
        icebergs[4] = new iceberg(0, 120, 40, 40, 'white')
        icebergs[4].show();
        icebergs[5] = new iceberg(0, 160, 40, 40, 'white')
        icebergs[5].show();
        icebergs[6] = new iceberg(0, 200, 40, 40, 'white')
        icebergs[6].show();
        icebergs[7] = new iceberg(0, 240, 40, 40, 'white')
        icebergs[7].show();
        icebergs[8] = new iceberg(760, 240, 40, 40, 'white')
        icebergs[8].show();
    }
    // level 2
    else if(level === 2){
        icebergs[0] = new iceberg(760, 0, 40, 40, 'white')
        icebergs[0].show();
        icebergs[1] = new iceberg(120, 560, 40, 40, 'white')
        icebergs[1].show();

    }
}

function moveD(){
    if (squareX === 760 || collisionRight === true) {
    }
    else {
        let refreshInternal = setInterval(function () {
            if (squareX === 760 || collisionRight === true) {
                clearInterval(refreshInternal)
                objectMove = false;
            } else {
                squareX = squareX + boatSpeed;
                collisionLeft = false;
                collisionTop = false;
                collisionBottom = false;
                objectMove = true;
            }
        }, 1)
    }
}

function moveS(){
    if (squareY === 560 || collisionBottom === true) {
    } else {
        let refreshInternalS = setInterval(function() {
            if(squareY === 560 || collisionBottom === true){
                clearInterval(refreshInternalS)
                objectMove = false;
            }
            else {
                squareY = squareY + boatSpeed;
                collisionLeft = false;
                collisionRight = false;
                collisionTop = false;
                objectMove = true;
            }
        },1)

    }
}

function moveA(){
    if (squareX === 0 || collisionLeft === true) {
    } else {
        let refreshInternalA = setInterval(function () {
            if (squareX === 0 || collisionLeft === true) {
                clearInterval(refreshInternalA)
                objectMove = false;
            } else {
                squareX = squareX - boatSpeed;
                collisionBottom = false;
                collisionRight = false;
                collisionTop = false;
                objectMove = true;
            }
        }, 1)
    }
}

function moveW(){
    if (squareY === 0 || collisionTop === true) {
    } else {
        let refreshInternalW = setInterval(function () {
            if (squareY === 0 || collisionTop === true) {
                clearInterval(refreshInternalW)
                objectMove = false;
            } else {
                squareY = squareY - boatSpeed;
                collisionBottom = false;
                collisionRight = false;
                collisionLeft = false;
                objectMove = true;
            }
        }, 1)
    }
}

function collisionDetection(i) {
    //Collision on Right
    if(squareX + squareWidth  === icebergs[i].xPos && squareY + squareHeight === icebergs[i].yPos + icebergs[i].height){
        return collisionRight = true;
    }

    // Collision on Left
    if(squareX === icebergs[i].xPos + icebergs[i].width && squareY === icebergs[i].yPos){
        return collisionLeft = true;
       } 

    //Collision on Bottom?
    if(squareY + squareHeight === icebergs[i].yPos && squareX === icebergs[i].xPos){
        return collisionBottom = true;
        } 

    //Collision on the Top?
    if(squareY === icebergs[i].yPos + icebergs[i].height && squareX === icebergs[i].xPos) {
        return collisionTop = true;
    }
}


class iceberg {
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

window.onload = function(){
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    setInterval(function() {
        moveEverything();
        drawEverything();

    }, 1 / framesPerSecond)
}

function drawEverything(){

    colorRect(0, 0, canvas.width, canvas.height, '#49e8ff');
    colorRect(squareX, squareY, squareWidth, squareHeight, '#000080');

    loadLevels();
}

function moveEverything() {

    document.onkeydown = function (event) {
        switch (event.key) {
            case 'w':
                if(objectMove === false) {
                    moveW();
                }
                break;
            case 'a':
                if(objectMove === false) {
                    moveA();
                }
                break;
            case 's':
                if(objectMove === false) {
                    moveS();
                }
                break;
            case 'd':
                if(objectMove === false) {
                    moveD();
                }
                break;
        }
    }
    for(let i = 0; i < icebergs.length; i++){
        collisionDetection(i);
    }
}
    function colorRect(leftX, topY, width, height, drawColor) {
        canvasContext.fillStyle = drawColor;
        canvasContext.fillRect(leftX, topY, width, height);
    }

