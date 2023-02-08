//Ice Glider
//To Do:
//Create Vector for XPos for level 1

//Create second Vector for YPos for level 1
//Create CSV file for level info (Might not need or need for each level)
//Create for loop to create blocks in specific locations
let framesPerSecond = 35;
let squareHeight = 40;
let squareWidth = 40;
let squareX = 0;
let squareY = 0;
let icebergs = [];
let vanish = [];
let boatSpeed = 20;
let level = 1; //Change to lv. 1
let collisionTop = false;
let collisionBottom = false;
let collisionLeft = false;
let collisionRight = false;
let objectMove = false;
let goal1;
let button1;
let buttonAct1 = false;
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
        activate1()
        {
            buttonAct1 = true;
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
            boatSpeed = 0;
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

    // Start of level 1
    //*******************************************************
    //*******************************************************

    if(level === 1){
        let RockXPos = [
            0,0,0,0,0,0,
            40,40,40,40,40,40,40,40,
            80,80,80,80,
            120,120,120,120,
            160,160,160,160,
            200,200,200,200,
            240,240,240,240,
            280,280,280,280,
            320,320,320,320,320,320,320,320,320,320,320,320,
            400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,
            440,440,440,440,
            480,480,480,480,
            520,520,520,520,
            560,560,560,560,
            600,600,600,600,
            640,640,640,640,
            680,680,680,680,
            720,720,720,720,
            760,760,760,760,760,760,760,760,760,760,760,760,760,760,
        ];
        let RockYPos = [
            40,80,120,160,200,240,
            40,240,320,360,400,440,480,520,
            40,240,320,520,
            40,240,320,520,
            40,240,320,520,
            40,240,320,520,
            40,240,320,520,
            40,240,320,520,
            40,80,120,160,200,240,320,360,400,440,480,520,
            0,40,80,120,160,200,240,320,360,400,440,480,520,560,600,
            240,320,0,560,
            240,320,0,560,
            240,320,0,560,
            240,320,0,560,
            240,320,0,560,
            240,320,0,560,
            240,320,0,560,
            240,320,0,560,
            0,40,80,120,160,200,240,320,360,400,440,480,520,560,
        ];
        for(let i = 0; i < RockYPos.length + 1; i++){
            icebergs[i] = new iceberg(RockXPos[i], RockYPos[i], 40, 40, '#000000')
            icebergs[i].show();
        }
        goal1 = new goal(760, 280, 40, 40, '#f2f217')
        goal1.show();
    }

    // Start of level 2
    //*********************************************************
    //*********************************************************

    if(level === 2){
        if(newLevel === true){
            squareX = 0;
            squareY = 360;
            newLevel = false;
        }
        else {
            let RockXPos2 = [
                0,
                40,40,40,40,40,40,40,40,40,40,40,40,40,
                80,80,80,80,80,80,
                120,120,120,120,120,120,120,120,120,120,120,120,120,
                160,160,160,160,160,160,160,160,160,160,
                200,200,200,200,200,200,200,200,200,
                240,240,240,240,240,
                280,280,280,280,280,280,280,280,280,280,280,280,
                320,320,320,320,
                360,360,360,360,360,360,360,360,360,360,360,360,360,
                400,400,400,400,400,
                440,440,440,440,440,440,440,440,440,440,440,440,
                480,480,480,
                520,520,520,520,520,520,520,520,520,520,520,520,520,
                560,560,560,560,560,560,560,560,
                600,600,600,600,600,600,600,600,600,600,600,600,
                640,640,640,640,640,640,640,640,640,640,640,640,
                680,680,680,680,680,
                720,720,720,720,720,720,720,720,720,720,720,720,720,720,
                760,760,760,
            ];
            let RockYPos2 = [
                400,
                40,80,120,160,200,240,280,320,360,400,440,520,600,
                40,80,120,160,520,600,
                40,80,120,160,240,280,320,360,400,440,480,520,600,
                40,240,280,320,360,400,440,480,520,600,
                40,120,160,200,240,280,480,520,600,
                40,400,480,520,600,
                40,80,120,160,200,240,280,320,400,480,520,600,
                400,480,520,600,
                0, 40,80,120,160,200,240,280,320,400,480,520,600,
                0,400,480,520,600,
                0,80,120,160,200,240,280,320,360,400,480,520,
                0,200,400,
                0,40,80,120,200,280,320,400,440,480,520,560,600,
                0,80,120,200,280,320,560,600,
                0,80,120,200,280,320,360,400,440,480,560,600,
                0,80,120,200,280,320,360,400,440,480,560,600,
                0,200,480,560,600,
                0,80,120,160,200,240,280,320,360,400,440,480,560,600,
                0,560,600,
            ];
            for(let i = 0; i < RockYPos2.length + 1; i++) {
                icebergs[i] = new iceberg(RockXPos2[i], RockYPos2[i], 40, 40, '#000000')
                icebergs[i].show();
            }

            button1 = new button(0, 440, 40, 40, '#5C2D91')
            button1.show();

            goal1 = new goal(680, 440, 40, 40, '#f2f217')
            goal1.show();

            //Disappearing Icebergs

            if (buttonAct1 === false) {
                vanish[0] = new iceberg(200,400,40,40,'#000000');
                vanish[0].show();
                vanish[1] = new iceberg(360,360,40,40,'#000000');
                vanish[1].show();
                vanish[2] = new iceberg(760,80,40,40,'#000000');
                vanish[2].show();
            }
            else if(buttonAct1 === true){
                vanish.splice(0,3);
            }
        }
        let refreshInternal2 = setInterval(function () {
                boatSpeed = 20;
                clearInterval(refreshInternal2)
        }, 200)
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

function collisionDetectionVanish(i) {

    //Collision on Right Vanish
    if(squareX + squareWidth  === vanish[i].xPos && squareY + squareHeight === vanish[i].yPos + vanish[i].height){
        return collisionRight = true;
    }

    // Collision on Left Vanish
    if(squareX === vanish[i].xPos + vanish[i].width && squareY === vanish[i].yPos){
        return collisionLeft = true;
    }

    //Collision on Bottom Vanish
    if(squareY + squareHeight === vanish[i].yPos && squareX === vanish[i].xPos){
        return collisionBottom = true;
    }

    //Collision on the Top Vanish
    if(squareY === vanish[i].yPos + vanish[i].height && squareX === vanish[i].xPos) {
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

    colorRect(0, 0, canvas.width, canvas.height, '#F43A07');
    colorRect(squareX, squareY, squareWidth, squareHeight, '#EDEDF4');
    loadLevels();

    if(squareX === goal1.xPos && squareY === goal1.yPos){
        goal1.levelCleared();
    }
    if(squareX === button1.xPos && squareY === button1.yPos && buttonAct1 === false){
        button1.activate1();
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

    for(let i = 0; i < vanish.length; i++){
        collisionDetectionVanish(i);
    }
}
    function colorRect(leftX, topY, width, height, drawColor) {
        canvasContext.fillStyle = drawColor;
        canvasContext.fillRect(leftX, topY, width, height);
    }


