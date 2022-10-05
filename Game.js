let framesPerSecond = 60;
let squareHeight = 40;
let squareWidth = 40;
let squareX = 0;
let squareY = 0;
let icebergs = [];
let boatSpeed = 20;
let level = 1;
let collisionTop = false;
let collisionBottom = false;
let collisionLeft = false;
let collisionRight = false;
let objectMove = false;
let goal1;
let button1;
let newLevel = false;

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

class button {
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
    activate(){

    }
}

class goal {
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

    levelCleared(){
            newLevel = true;
            level = level + 1;
            icebergs.length = 0;
            collisionRight = false;
            collisionLeft = false;
            collisionBottom = false;
            collisionTop = false;
    }
}

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
        goal1 = new goal(760, 280, 40, 40, 'pink')
        goal1.show();
    }
    // level 2
    else if(level === 2){
        if(newLevel === true){
            squareX = 0;
            squareY = 300;
            newLevel = false;
        }
        else {
            icebergs[0] = new iceberg(120, 560, 40, 40, 'white')
            icebergs[0].show();
            icebergs[1] = new iceberg(40, 300, 40, 40, 'white')
            icebergs[1].show();
            icebergs[2] = new iceberg(0, 340, 40, 40, 'white')
            icebergs[2].show();
            icebergs[3] = new iceberg(200, 0, 40, 40, 'white')
            icebergs[3].show();
            icebergs[4] = new iceberg(160, 380, 40, 40, 'white')
            icebergs[4].show();
            icebergs[5] = new iceberg(200, 520, 40, 40, 'white')
            icebergs[5].show();
            icebergs[6] = new iceberg(240, 420, 40, 40, 'white')
            icebergs[6].show();
            icebergs[7] = new iceberg(360, 340, 40, 40, 'white')
            icebergs[7].show();
            icebergs[8] = new iceberg(240, 560, 40, 40, 'white')
            icebergs[8].show();
            button1 = new button(200, 40, 40, 40, 'yellow')
            button1.show();


            goal1 = new goal(760, 400, 40, 40, 'pink')
            goal1.show();
        }

    }
}

function moveD(){
    if (squareX === 760 || collisionRight === true) {
    }
    else {
        let refreshInternal = setInterval(function () {
            if (squareX === 760 || collisionRight === true || newLevel === true) {
                clearInterval(refreshInternal)
                objectMove = false;
            } else {
                    squareX = squareX + boatSpeed;
                    collisionLeft = false;
                    collisionTop = false;
                    collisionBottom = false;
                    objectMove = true;
                }
        }, 6)
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
        },6)

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
        }, 6)
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
        }, 6)
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
    if(squareX === goal1.xPos && squareY === goal1.yPos){
        goal1.levelCleared();
    }
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


