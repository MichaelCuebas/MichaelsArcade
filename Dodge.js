    let canvas;
    let canvas2;
    let canvasContext;
    let canvasContext2;

    let squareHeight = 20;
    let squareThickness = 20;
    let squareX = 380;
    let squareY = 280;
    let showingEndScreen = false;
    let showingStartScreen = true;

    let arrayRandom = [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400,
        420, 440, 460, 480, 500, 520, 540, 560, 580, 600, 620, 640, 660, 680, 700, 720, 740, 760, 780, 800];

    let squares = [];
    let numSquares = 5;
    const framesPerSecond = 35;

    let seconds = 0;
    let score = 0;

    function incrementSeconds() {
        seconds += 1;
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
        if (squareX + (squareThickness - 1) >= squares[i].xPos &&
            squareX <= squares[i].xPos + (squares[i].width - 1) &&
            squareY + squareHeight >= (squares[i].yPosStart + 1) &&
            (squareY + 1) <= squares[i].yPosStart + squares[i].height) {
            return showingEndScreen = true;
        }
    }

    function handleMouseClick (){
        if (showingEndScreen) {
            score = 0;
            seconds = 0;
            squares.length = 0;
            showingEndScreen = false;
        }
    };

    function handleMouseClickStart (){
        if (showingStartScreen) {
            score = 0;
            seconds = 0;
            squares.length = 0;
            showingStartScreen = false;
        }
    };


    class square {
        constructor(width, height, color) {
            this.xPos = arrayRandom[Math.floor(Math.random() * arrayRandom.length)];
            this.yPosStart = -400;
            this.width = width;
            this.height = height;
            this.color = color;
            this.speed = (Math.random() * 1) + .2;
        }

        move() {
            this.yPosStart = this.yPosStart + this.speed;
            if(this.yPosStart > canvas.height) {
                this.yPosStart = -20;
            }
        }
            show()
            {
                colorRect(this.xPos, this.yPosStart, this.width, this.height, this.color);
            }
    }

// level 1
    function level1(){
        for (let i = 0; i < 20; i++) {
            squares[i] = new square(squareThickness, squareHeight, 'green');
        }
    }
    function level1Part2(){
        for (let i = 20; i < 40; i++) {
            squares[i] = new square(squareThickness, squareHeight, 'green');
        }
    }

// level 2
    function level2(){
        for (let i = 40; i < 55; i++) {
            squares[i] = new square(squareThickness, squareHeight, 'blue');
        }
    }
    function level2Part2(){
        for (let i = 55; i < 70; i++) {
            squares[i] = new square(squareThickness + 20, squareHeight, 'blue');
        }
    }

//level 3
    function level3(){
        for (let i = 70; i < 80; i++) {
            squares[i] = new square(squareThickness, squareHeight, 'purple');
        }
    }
    function level3Part2(){
        for (let i = 80; i < 85; i++) {
            squares[i] = new square(squareThickness, squareHeight, 'purple');
        }
    }

// level 4
    function level4(){
        for (let i = 85; i < 95; i++) {
            squares[i] = new square(squareThickness, squareHeight + 20, 'orange');
        }
    }
    function level4Part2(){
        for (let i = 95; i < 105; i++) {
            squares[i] = new square(squareThickness, squareHeight, 'orange');
        }
    }
// level 5
    function level5(){
        for (let i = 105; i < 115; i++) {
            squares[i] = new square(squareThickness + 20, squareHeight, 'red');
        }
    }
    function level5Part2(){
        for (let i = 115; i < 125; i++) {
            squares[i] = new square(squareThickness, squareHeight, 'red');
        }
    }

// level 6
    function level6(){
        for (let i = 125; i < 130; i++) {
            squares[i] = new square(squareThickness + 20, squareHeight, '#88d8c0');
        }
    }
    function level6Part2(){
        for (let i = 130; i < 150; i++) {
            squares[i] = new square(squareThickness, squareHeight, '#88d8c0');
        }
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
                    level1(numSquares);
                    break;
                case 12:
                    level1Part2(numSquares);
                    break;
                case 18:
                    score += 18;
                    level2(numSquares);
                    break;
                case 28:
                    level2Part2();
                    break;
                case 30:
                    score += 18;
                    level3();
                    break;
                case 40:
                    level3Part2();
                    break;
                case 55:
                    score += 18;
                    level4();
                    break;
                case 65:
                    level4Part2();
                    break;
                case 70:
                    score += 18;
                    level5();
                    break;
                case 85:
                    level5Part2();
                    break;
                case 90:
                    score += 18;
                    level6();
                    break;
                case 105:
                    level6Part2();
                    break;
            }
        }, 1 / framesPerSecond);
    }


        function moveEverything() {

            document.onkeydown = function (event) {
                switch (event.key) {
                    case 'w':
                        if (squareY < 10) {
                            squareY = squareY;
                            break;
                        } else {
                            squareY = squareY - 20;
                            break;
                        }
                    case 'a':
                        if (squareX < 10) {
                            squareX = squareX;
                            break;
                        } else {
                            squareX = squareX - 20;
                            break;
                        }
                    case 's':
                        if (squareY > 570) {
                            squareY = squareY;
                            break;
                        } else {
                            squareY = squareY + 20;
                            break;
                        }
                    case 'd':
                        if (squareX > 770) {
                            squareX = squareX;
                            break;
                        } else {
                            squareX = squareX + 20;
                            break;
                        }
                }
            }
            for(let i = 0; i < squares.length; i++){
                squares[i].move();
                }

            for(let i = 0; i < squares.length; i++) {
                collisionDetection(i);
            }
    }

        function drawEverything() {
            // next line blanks out the screen with black
            colorRect(0, 0, canvas.width, canvas.height, 'black');

            colorRect(squareX, squareY, squareThickness, squareHeight, 'white');

            for (let i = 0; i < squares.length; i++) {
                squares[i].show();
            }

            if(showingEndScreen) {
                canvasContext.fillStyle = 'red'
                canvasContext.font = "bold 60px Helvetica, Arial, sans-serif";
                canvasContext.fillText("Your Final Score Is ", 140, 160);
                canvasContext.fillText(score, 340, 300);
                canvasContext.font = "bold 45px Helvetica, Arial, sans-serif";
                canvasContext.fillText("Click to continue...", 210, 500 );

                seconds = -1;
                numSquares = 0;
                }

            if(showingStartScreen) {
                canvasContext.fillStyle = '#88d8c0'
                canvasContext.font = "bold 55px Helvetica, Arial, sans-serif";
                canvasContext.fillText("Created by Michael Cuebas", 40, 200);
                canvasContext.fillText("Click to Begin", 200, 350);
                canvasContext.font = "bold 30px Helvetica, Arial, sans-serif";
                canvasContext.fillText("Use 'W' 'S' 'A' 'D' to avoid the falling squares", 90, 500 );
                seconds = -1;
                numSquares = 0;
            }

        }

        function draw(){
            colorRect2(0, 0, canvas2.width, canvas2.height, 'black');
            canvasContext2.fillStyle = "green";
            canvasContext2.font = "bold 50px Helvetica, Arial, sans-serif";
            canvasContext2.fillText("Score ", 80, 50, );
            canvasContext2.fillStyle = "#88d8c0";
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
