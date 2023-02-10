//Ice Glider
//To Do:

let framesPerSecond = 60;
let squareHeight = 40;
let squareWidth = 40;
let squareX = 0;
let squareY = 0;
let icebergs = [];
let vanish = [];
let vanish2 = [];
let boatSpeed = 20;
let level = 3;
let collisionTop = false;
let collisionBottom = false;
let collisionLeft = false;
let collisionRight = false;
let objectMove = false;
let goal1;
let button1;
let button2;
let buttonAct1 = false;
let buttonAct2 = false;
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
        activate2()
        {
            buttonAct2 = true;
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

        button1 = new button(360, 280, 40, 40, '#5C2D91')
        button1.show();

        goal1 = new goal(760, 280, 40, 40, '#f2f217')
        goal1.show();

        if (buttonAct1 === false) {
            vanish[0] = new iceberg(320,280,40,40,'#000000');
            vanish[0].show();
            vanish[1] = new iceberg(400,280,40,40,'#000000');
            vanish[1].show();
        }
        else if(buttonAct1 === true){
            vanish.splice(0,2);

            vanish[0] = new iceberg(360,320,40,40,'#000000');
            vanish[0].show();
            vanish[1] = new iceberg(360,240,40,40,'#000000');
            vanish[1].show();
        }
    }

    // Start of level 2
    //*********************************************************
    //*********************************************************

    if(level === 2){
        if(newLevel === true){
            squareX = 0;
            squareY = 360;
            newLevel = false;
            buttonAct1 = false;
            buttonAct2 = false;
            vanish.splice(0,vanish.length);
            RockXPos.splice(0,RockXPos.length)
            RockYPos.splice(0,RockYPos.length)
        }
        else {
            let RockXPos = [
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
            let RockYPos = [
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
            for(let i = 0; i < RockYPos.length + 1; i++) {
                icebergs[i] = new iceberg(RockXPos[i], RockYPos[i], 40, 40, '#000000')
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

    // Start of level 3
    //*********************************************************
    //*********************************************************

    if(level === 3){
        if(newLevel === true){
            squareX = 680;
            squareY = 440;
            newLevel = false;
            buttonAct1 = false;
            buttonAct2 = false;
            vanish.splice(0,vanish.length);
            RockXPos.splice(0,RockXPos.length)
            RockYPos.splice(0,RockYPos.length)
        }
        else {
            let RockXPos = [
                40,40,40,40,40,40,40,40,40,40,40,40,40,
                80,80,
                120,120,120,120,120,120,120,120,120,120,120,120,
                160,160,160,160,
                200,200,200,200,200,200,200,200,200,
                240,240,240,240,240,240,240,
                280,280,280,280,280,280,280,280,
                320,320,320,320,320,320,
                360,360,360,360,360,360,360,360,
                400,400,400,400,400,400,
                440,440,440,440,440,440,440,
                480,480,480,480,480,480,480,480,
                520,520,520,520,520,
                560,560,560,560,560,560,560,560,560,560,
                600,600,600,600,600,
                640,640,640,640,640,640,640,
                680,680,680,680,680,680,680,680,
                720,720,720,720,720,720,
                760,760,760,760,760,760,
            ];
            let RockYPos = [
                40,80,120,160,200,240,280,320,360,400,440,480,520,
                40,520,
                40,120,160,200,240,280,320,360,400,440,480,520,
                40,120,440,520,
                40,120,200,240,280,320,360,440,520,
                40,120,280,320,360,440,520,
                40,120,160,200,280,360,440,520,
                40,200,280,360,440,520,
                40,80,120,200,280,360,440,520,
                120,200,280,360,440,520,
                0,40,120,200,280,360,520,
                120,200,280,360,400,440,480,520,
                40,80,120,200,280,
                40,200,280,320,360,400,440,480,520,560,
                40,120,200,280,320,
                40,120,200,400,440,480,520,
                40,120,200,240,280,320,360,400,
                40,120,400,440,480,520,
                120,160,200,240,280,320
            ];
            for(let i = 0; i < RockYPos.length + 1; i++) {
                icebergs[i] = new iceberg(RockXPos[i], RockYPos[i], 40, 40, '#000000')
                icebergs[i].show();
            }

            button1 = new button(280, 320, 40, 40, '#5C2D91')
            button1.show();

            button2 = new button(80, 480, 40, 40, '#00008B')
            button2.show();

            goal1 = new goal(160, 480, 40, 40, '#f2f217')
            goal1.show();

            //Disappearing Icebergs

            if (buttonAct1 === false) {
                vanish[0] = new iceberg(520,160,40,40,'#000000');
                vanish[0].show();
                vanish[1] = new iceberg(480,160,40,40,'#000000');
                vanish[1].show();
                vanish[2] = new iceberg(440,160,40,40,'#000000');
                vanish[2].show();
                vanish[3] = new iceberg(400,160,40,40,'#000000');
                vanish[3].show();
                vanish[4] = new iceberg(360,160,40,40,'#000000');
                vanish[4].show();
                vanish[5] = new iceberg(200,160,40,40,'#000000');
                vanish[5].show();
            }
            else {
                vanish.splice(0,6);
                }
            if (buttonAct2 === false) {
                vanish2[0] = new iceberg(200,400,40,40,'#000000');
                vanish2[0].show();
            }
            else{
                vanish2.splice(0,1);
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

//Detects Square Collision on Rocks
function collisionDetection(i) {
    //Collision on Right
    if(squareX + squareWidth  === icebergs[i].xPos && squareY + squareHeight === icebergs[i].yPos + icebergs[i].height){
        return collisionRight = true;
    }

    // Collision on Left
    if(squareX === icebergs[i].xPos + icebergs[i].width && squareY === icebergs[i].yPos){
        return collisionLeft = true;
       }

    //Collision on Bottom
    if(squareY + squareHeight === icebergs[i].yPos && squareX === icebergs[i].xPos){
        return collisionBottom = true;
        } 

    //Collision on the Top
    if(squareY === icebergs[i].yPos + icebergs[i].height && squareX === icebergs[i].xPos) {
        return collisionTop = true;
    }
}
//Detects Square Collision on Vanishing Rocks for Button 1
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
//Detects Square Collision on Vanishing Rocks for Button 2
function collisionDetectionVanish2(i) {

    //Collision on Right Vanish
    if(squareX + squareWidth  === vanish2[i].xPos && squareY + squareHeight === vanish2[i].yPos + vanish2[i].height){
        return collisionRight = true;
    }

    // Collision on Left Vanish
    if(squareX === vanish2[i].xPos + vanish2[i].width && squareY === vanish2[i].yPos){
        return collisionLeft = true;
    }

    //Collision on Bottom Vanish
    if(squareY + squareHeight === vanish2[i].yPos && squareX === vanish2[i].xPos){
        return collisionBottom = true;
    }

    //Collision on the Top Vanish
    if(squareY === vanish2[i].yPos + vanish2[i].height && squareX === vanish2[i].xPos) {
        return collisionTop = true;
    }
}



window.onload = function(){
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    setInterval(function() {
        //Bug between when this gets executed
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
    if(squareX === button2.xPos && squareY === button2.yPos && buttonAct2 === false){
        button2.activate2();
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

    //Constant search to determine if Collision has occurred for Rocks
    for(let i = 0; i < icebergs.length; i++){
        collisionDetection(i);
    }

    //Constant search to determine if Collision has occurred for Vanishing Rocks on Button 1
    for(let i = 0; i < vanish.length; i++){
        collisionDetectionVanish(i);
    }

    //Constant search to determine if Collision has occurred for Vanishing Rocks on Button 2
    for(let i = 0; i < vanish2.length; i++){
        collisionDetectionVanish2(i);
    }
}
    function colorRect(leftX, topY, width, height, drawColor) {
        canvasContext.fillStyle = drawColor;
        canvasContext.fillRect(leftX, topY, width, height);
    }


