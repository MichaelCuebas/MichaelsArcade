let canvas;
let canvas2;
let canvasContext;
let canvasContext2;
let canvasColor = 'black';
let scoreColor = '#8B0000';
let bossPatternOne = false;
let bossPatternTwo = false;
let bossPhase1;

//Level 1 Colors
let color1 = '#39E75F';
let color2 = '#4fc3f7';
let color3 = '#B99976';
let color4 = '#FFFFFF';
let color5 = '#FF6863';
let color6 = '#FFE800';
let squareColorChange = 'yellow';

let squareHeight = 20;
let squareThickness = 20;
let squareColor = '#8800C7';
let squareX = 380;
let squareY = 200;
let rapidFire;
let collision = true; //Change based on Testing, True for Gameplay
let showingEndScreen = false;
let showingStartScreen = true;
let startAudio = document.querySelector('#audio')
let level1Audio = document.querySelector('#audioLevel1')
let deathMusic = document.querySelector('#deathMusic')
let demonAudio = document.querySelector('#demonVoice')
let firstBossAudio = document.querySelector('#firstBoss')
let evilLaughAudio = document.querySelector('#evilLaugh')
document.querySelector("#myVideo").setAttribute("src","movingPurpleBackground.mp4");

let arrayRandom = [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400,
    420, 440, 460, 480, 500, 520, 540, 560, 580, 600, 620, 640, 660, 680, 700, 720, 740, 760, 780, 800];
let arrayRandomFull = 2;
let arrayRandomRight = [400, 420, 440, 460, 480, 500, 520, 540, 560, 580, 600, 620, 640, 660, 680, 700, 720, 740, 760, 780, 800];
let arrayRandomRightX = 1;
let arrayRandomLeft = [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380];
let arrayRandomLeftX = 0;
let arrayRandomChoice;

let arrayRandomCircle = [10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230, 250, 270, 290, 310, 330, 350, 370, 390, 410,
    430, 450, 470, 490, 510, 530, 550, 570, 590, 610, 630, 650, 670, 690, 710, 730, 750, 770, 790];

let char1 = [];
let char1x = [200,220,240,260,280,300,320,340,360,380,400,420,];
let char1y = [140,160,180,200,220,240,260,280,300,320,340,360];

let squares = [];
let circles = [];
let circles2 = [];
let circles3 = [];
let circles4 = [];
let circleX = 10;
let circleX2 = 790;
//'#8B0000', '#4D4C5C', '#C0C0C0', '#000046', '#00FEFC', '#8800C7' (Boss Colors)
//'#39E75F', '#4fc3f7', '#B99976', '#FFFFFF', '#FF6863', '#FFE800'(Level 1 colors)
let randomColor = ['#8B0000', '#8800C7'];
let numSquares = 5;
const framesPerSecond = 60;

let seconds = 0;
let score = 0;
let firstBoss, bossLevel, firstBossPart2 = false;
let squareResetLevel1;
let i = 0;
let r = 0;
let m = 0;

function squareResetFunc(a,z,wide,tall,color){
    for (a; a < z; a++) {
        if (squares[a].yPos > 580) {
            if(a < z)
                squares[a] = new square(arrayRandomChoice,-200, squareThickness + wide, squareHeight + tall, color);
        }
    }
}
function circleResetFunc1(){
    for (let i = 0; i < circles.length; i++) {
        if (circles[i].yPos > 580) {
            circles[i].splice(i,1);
        }
    }
}
function circleResetFunc2(){
    for (let i = 0; i < circles2.length; i++) {
        if (circles2[i].yPos > 580) {
            circles2[i].splice(i,1);
        }
    }
}
function squareReset() {
    if (squareResetLevel1 === true) {
        squareResetFunc(0, 30,  0,0,color1);
        squareResetFunc(30, 40, 0,0,color2);
        squareResetFunc(40, 45, 20,0,color2);
        squareResetFunc(45, 50, 0,0,color3);
        squareResetFunc(50, 55, 0,0,color3);
        squareResetFunc(55, 60, 0,0,color4);
        squareResetFunc(60, 65, 20,0,color4);
        squareResetFunc(65, 70, 0,0,color5);
        squareResetFunc(70, 75, 0,20,color5);
        squareResetFunc(75, 80, 0,0,color6);
        squareResetFunc(80, 85, 0,0,color6);
    }
    if(bossPhase1 === true){
        arrayRandomChoice = arrayRandomRightX;
        squareResetFunc(0, 50, 0,0,'#8B0000');
        arrayRandomChoice = arrayRandomLeftX;
        squareResetFunc(50, 100, 0,0,'#8800C7');
        circleResetFunc1();
    }
}

function incrementSeconds() {
    seconds += 1;
}
function ChooseRandomColor(){
    return randomColor[Math.floor(Math.random() * randomColor.length)];
}

function incrementScore() {
    if(showingEndScreen){
        return score;
    }
    else if (showingStartScreen){
        return score;
    }
    else if(showingEndScreen === false) {
        score = score + 1;
    }
}

setInterval(function(){
    incrementSeconds();
}, 1000)

setInterval(function(){
    incrementScore();
}, 10)

function collisionDetection(i) {
    if (collision === true) {
        if (squareX + (squareThickness - 1) >= squares[i].xPos &&
            squareX <= squares[i].xPos + (squares[i].width - 1) &&
            squareY + squareHeight >= (squares[i].yPos + 1) &&
            (squareY + 1) <= squares[i].yPos + squares[i].height && squareColor !== squares[i].color) {
            return showingEndScreen = true;
        }
    }
}

function collisionDetection2(i) {
    if (collision === true) {
        if (squareX + (squareThickness - 1) >= circles[i].xPos &&
            squareX <= circles[i].xPos + ((circles[i].radius * 2) - 1) &&
            squareY + squareHeight >= (circles[i].yPos + 1) &&
            (squareY + 1) <= circles[i].yPos + (circles[i].radius * 2) && squareColor !== circles[i].color) {
            return showingEndScreen = true;
        }
    }
}
function collisionDetection3(i) {
    if (collision === true) {
        if (squareX + (squareThickness - 1) >= circles2[i].xPos &&
            squareX <= circles2[i].xPos + ((circles2[i].radius * 2) - 1) &&
            squareY + squareHeight >= (circles2[i].yPos + 1) &&
            (squareY + 1) <= circles2[i].yPos + (circles2[i].radius * 2) && squareColor !== circles2[i].color) {
            return showingEndScreen = true;
        }
    }
}

function handleMouseClick (){
    if (showingEndScreen) {
        score = 0;
        seconds = 0;
        squares.length = 0;
        showingEndScreen = false;
    }
}

function handleMouseClickStart (){
    if (showingStartScreen) {
        score = 0;
        seconds = 0;
        squares.length = 0;
        showingStartScreen = false;
        document.querySelector("#myVideo").setAttribute("src","droppingSquares.mp4");
    }
}

class square {
    constructor(xPos,yPos, width, height, color) {
        if(arrayRandomChoice === arrayRandomFull) {
            this.xPos = arrayRandom[Math.floor(Math.random() * arrayRandom.length)];
        }
        else if (arrayRandomChoice === arrayRandomRightX){
            this.xPos = arrayRandomRight[Math.floor(Math.random() * arrayRandomRight.length)];
        }
        else if (arrayRandomChoice === arrayRandomLeftX){
            this.xPos = arrayRandomLeft[Math.floor(Math.random() * arrayRandomLeft.length)];
        }
        else{
            this.xPos = xPos;
        }
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = (Math.random()) + .2;
    }

    move() {
        this.yPos = this.yPos + this.speed;
        if(bossLevel === true){
        }
        else if(this.yPos > canvas.height) {
            this.yPos = -20;
        }
    }
    show()
    {
        colorRect(this.xPos, this.yPos, this.width, this.height, this.color);
    }
}

class circle {
    constructor(xPos, color) {
        this.xPos = xPos;
        this.yPos = -20;
        this.radius = 10;
        this.color = color;
        this.speed = 1;
    }

    move() {
        this.yPos = this.yPos + this.speed;
    }

    show()
    {
        colorCircle(this.xPos, this.yPos, this.radius, this.color);
    }
}

let right = true;
let x = 20;
function circleCreation() {
    /* if (circles[i].yPos > 0) {
         circles[i + 1] = new circle(circleX, 'yellow');//#8B0000
         i++
     } //Rapid Fire Code
     */
    if (bossPatternOne === true) {
        if (circleX === 370) {
            right = false;
        } else if (circleX === -10) {
            right = true;
        }
        if (right === true) {
            if (circles[i].yPos > 0) {
                circles[i + 1] = new circle(circleX + x, '#8B0000');
                circles2[i + 1] = new circle(circleX2 - x, '#8800C7');
                i++
                circleX += x
                circleX2 -= x
            }
        } else if (right === false) {
            if (circles[i].yPos > 0) {
                circles[i + 1] = new circle(circleX + x, '#8B0000');
                circles2[i + 1] = new circle(circleX2 - x, '#8800C7');
                i++
                circleX -= x
                circleX2 += x
            }
        }
    }
    if (bossPatternTwo === true) {
        if (circles3[r].yPos > 0) {
            if(m > 10){
                m = 0;
            }
            circles[r + 1] = new circle(90 + m, '#8B0000');
            circles2[r + 1] = new circle(710 + m, '#8800C7');
            circles3[r + 1] = new circle(250 + m, '#8B0000');
            circles4[r + 1] = new circle(550 + m, '#8800C7');
            r++
            m = m + 10;
        }
    }
}
function firstBossDesign(){
    squareResetLevel1 = false;
    bossPhase1 = true;
    rapidFire = true;
    if(bossPatternOne === true) {

        circles[0] = new circle(10, '#8B0000')
        circles2[0] = new circle(790, '#8800C7')
        for (let i = 0; i < 50; i++) {
            arrayRandomChoice = arrayRandomRightX;
            squares[i] = new square(arrayRandomChoice,-200, squareThickness, squareHeight, '#8B0000');
        }
        for (let i = 50; i < 100; i++) {
            arrayRandomChoice = arrayRandomLeftX;
            squares[i] = new square(arrayRandomChoice, -200,squareThickness, squareHeight, '#8800C7');
        }
    }
    if(bossPatternTwo === true){ //THIS ISN'T RUNNING
        for (let i = 0; i < 60; i++) {
            arrayRandomChoice = arrayRandom;
            squares[i] = new square(arrayRandomChoice, -200, squareThickness, squareHeight, 'yellow');
        }
    }
}

//Character Creation
function char1Creation(){
    let z = 0;
    for(let i = 0; i < 12; i++){
        for(let j = 0; j < 12; j++) {
            char1[z] = new square(char1x[j], char1y[i], 20, 20, char1Color[z])
            z += 1;
        }
    }
}

// level 1
function level1() {
    setInterval(function(){
        squareReset();
        circleResetFunc1()
        circleResetFunc2()
    }, 500)
    for (let i = 0; i < 20; i++) {
        squares[i] = new square(arrayRandomFull, -200, squareThickness, squareHeight, '#39E75F');
        squareColor = '#39E75F';
    }
}
function level1Part2(){
    for (let i = 20; i < 30; i++) {
        squares[i] = new square(arrayRandomFull, -200, squareThickness, squareHeight, '#39E75F');
        squareColor = '#39E75F';
    }
}
function level2(){
    for (let i = 30; i < 40; i++) {
        squares[i] = new square(arrayRandomFull, -200, squareThickness, squareHeight, '#4fc3f7');
        squareColor = '#4fc3f7';
    }
}
function level2Part2(){
    for (let i = 40; i < 45; i++) {
        squares[i] = new square(arrayRandomFull,-200, squareThickness + 20, squareHeight, '#4fc3f7');
    }
}

//level 3
function level3(){
    for (let i = 45; i < 50; i++) {
        squares[i] = new square(arrayRandomFull,-200, squareThickness, squareHeight, '#B99976');
        squareColor = '#B99976';
    }
}
function level3Part2(){
    for (let i = 50; i < 55; i++) {
        squares[i] = new square(arrayRandomFull,-200, squareThickness, squareHeight, '#B99976');
    }
}

// level 4
function level4(){
    for (let i = 55; i < 60; i++) {
        squares[i] = new square(arrayRandomFull, -200, squareThickness, squareHeight + 20, '#FFFFFF');
        squareColor = '#FFFFFF';
    }
}
function level4Part2(){
    for (let i = 60; i < 65; i++) {
        squares[i] = new square(arrayRandomFull, -200, squareThickness, squareHeight, '#FFFFFF');
    }
}
// level 5
function level5(){
    for (let i = 65; i < 70; i++) {
        squares[i] = new square(arrayRandomFull,-200,squareThickness + 20, squareHeight, '#FF6863');
        squareColor = '#FF6863';
    }
}
function level5Part2(){
    for (let i = 70; i < 75; i++) {
        squares[i] = new square(arrayRandomFull, -200, squareThickness, squareHeight, '#FF6863');
    }
}

// level 6
function level6(){
    for (let i = 75; i < 80; i++) {
        squares[i] = new square(arrayRandomFull,-200,squareThickness + 20, squareHeight, '#FFE800');
        squareColor = '#FFE800';
    }
}
function level6Part2(){
    for (let i = 80; i < 90; i++) {
        squares[i] = new square(arrayRandomFull,-200, squareThickness, squareHeight, '#FFE800');
    }
}
function FirstBoss() {
    bossLevel = true;
    collision = false;
    demonAudio.volume = 0.6;
    demonAudio.play();
    level1Audio.pause();
    squares.splice(0,90);
    squareColor = 'white';
    scoreColor = '#8B0000';
    document.querySelector("#myVideo").setAttribute("src", 'black');
    document.body.style.backgroundColor = 'black';
    for (let i = 0; i < 50; i++) {
        squares[i] = new square(arrayRandomFull, -200, squareThickness, squareHeight - 400, '#8B0000');
    }
}


function FirstBossPart2() {
    squareColor = '#8B0000';
    collision = false; // change for testing
    firstBossAudio.play();
    document.querySelector("#myVideo").setAttribute("src","movingPurpleBackground.mp4");
    squares.splice(0,squares.length);
    setInterval(function (){
        squareColor = ChooseRandomColor();
    }, 15000);
    firstBossDesign();
}

window.onload = function() {
    canvas2 = document.getElementById('timeScore');
    canvasContext2 = canvas2.getContext('2d');
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    canvas.addEventListener('mousedown',handleMouseClick);
    canvas.addEventListener('mousedown',handleMouseClickStart);


    setInterval(function () {
        drawEverything();
        draw();
        moveEverything();

        switch (seconds) {
            case 0:
                arrayRandomChoice = -1;
                canvasColor = 'black';
                scoreColor = '#39E75F';
                squareColor = '#39E75F';
                startAudio.pause();
                deathMusic.pause();
                level1Audio.play()
                squareResetLevel1 = true;
                arrayRandomChoice = arrayRandomFull;
                squareResetLevel1 = true;
                level1(numSquares);
                break;
            case 15:
                level1Part2(numSquares);
                break;
            case 20:
                level2(numSquares);
                break;
            case 25:
                level2Part2();
                break;
            case 30:
                level3();
                break;
            case 35:
                level3Part2();
                break;
            case 40:
                level4();
                break;
            case 45:
                level4Part2();
                break;
            case 50:
                level5();
                break;
            case 55:
                level5Part2();
                break;
            case 60:
                level6();
                break;
            case 65:
                level6Part2();
                break;
            case 73:
                firstBoss = true;
                squareResetLevel1 = false;
                FirstBoss();
                break;
            case 90: // 73
                arrayRandomFull = false
                firstBossPart2 = true;
                bossPatternOne = true;
                FirstBossPart2();
                break;
            case 103: // 90
                circles3[0] = new circle(100, '#8B0000')
                circles4[0] = new circle(700, '#8800C7')
                bossPhase1 = false;
                bossPatternOne = false;
                bossPatternTwo = true;
                firstBossDesign();
                break;

        }
    }, 1 / framesPerSecond);
}


function moveEverything() {

    document.onkeydown = function (event) {
        switch (event.key) {
            case 'w':
                if (squareY < 10) {
                    break;
                } else {
                    squareY = squareY - 20;
                    break;
                }
            case 'a':
                if (squareX < 10) {
                    break;
                } else {
                    squareX = squareX - 20;
                    break;
                }
            case 's':
                if (squareY > 570) {
                    break;
                } else {
                    squareY = squareY + 20;
                    break;
                }
            case 'd':
                if (squareX > 770) {
                    break;
                } else {
                    squareX = squareX + 20;
                    break;
                }
        }
    }

    for(let i = 0; i < char1.length; i++){
        char1[i].show();
    }
    for(let i = 0; i < squares.length; i++){
        squares[i].move();
        squares[i].show();
        collisionDetection(i);
    }
    for(let i = 0; i < circles.length; i++){
        circles[i].move();
        circles[i].show();
        collisionDetection2(i);
    }
    for(let i = 0; i < circles2.length; i++){
        circles2[i].move();
        circles2[i].show();
        collisionDetection3(i);
    }
    for(let i = 0; i < circles3.length; i++){
        circles3[i].move();
        circles3[i].show();
    }
    for(let i = 0; i < circles4.length; i++){
        circles4[i].move();
        circles4[i].show();
    }
}
function drawEverything() {
    // next line blanks out the screen with black
    colorRect(0, 0, canvas.width, canvas.height, canvasColor);

    colorRect(squareX, squareY, squareThickness, squareHeight, squareColor);

    if(rapidFire === true) {
        circleCreation();
    }

    if(showingEndScreen) {
        startAudio.pause();
        level1Audio.pause();
        firstBossAudio.pause();
        deathMusic.play();
        canvasContext.fillStyle = '#8800C7'
        canvasContext.font = "bold 60px Helvetica, Arial, sans-serif";
        canvasContext.fillText("Your Final Score Is ", 140, 160);
        canvasContext.fillText(score, 340, 300);
        canvasContext.font = "bold 45px Helvetica, Arial, sans-serif";
        canvasContext.fillText("Click to continue...", 210, 500 );
        seconds = -1;
        numSquares = 0;
    }

    if(showingStartScreen) {
        startAudio.play()
        canvasContext.fillStyle = '#8800C7'
        canvasContext.font = "bold 55px Helvetica, Arial, sans-serif";
        canvasContext.fillText("Created by Michael Cuebas", 40, 140);
        canvasContext.fillText("Click to Begin", 200, 290);
        canvasContext.font = "bold 30px Helvetica, Arial, sans-serif";
        canvasContext.fillText("Use 'W' 'A' 'S' 'D' to avoid the falling squares", 90, 400 );
        canvasContext.font = "bold 20px Helvetica, Arial, sans-serif";
        canvasContext.fillText("Falling squares of the same color can be passed through safely", 110, 450 );
        seconds = -1;
        numSquares = 0;
    }
}

function draw(){
    colorRect2(0, 0, canvas2.width, canvas2.height, canvasColor);
    canvasContext2.fillStyle = scoreColor;
    canvasContext2.font = "bold 50px Helvetica, Arial, sans-serif";
    canvasContext2.fillText("Score ", 80, 50, );
    canvasContext2.fillStyle = "";
    canvasContext2.fillText(score, 80, 120 );
}
function colorRect(leftX, topY, width, height, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);
}
function colorRect2(leftX, topY, width, height, drawColor){
    canvasContext2.fillStyle = drawColor;
    canvasContext2.fillRect(leftX, topY, width, height)
}
function colorCircle(centerX, centerY, radius, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0,Math.PI*2, true);
    canvasContext.fill();
}
