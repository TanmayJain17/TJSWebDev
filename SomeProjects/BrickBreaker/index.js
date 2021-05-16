//init function

function inIt(){
    let canvas = document.getElementById('myCanvas')
    let pen = canvas.getContext('2d')
    let W = canvas.width
    let H = canvas.height

    let handler = {
        handColor:'aqua',
        handWidth:25,
        handHeight:4,
        handY:H-5,
        handSpeed:7,
        handX:0
}
    let ball = {
        ballSpeed:3,
        ballColor:"black",
        ballRadius:3,
        ballSpeedX:5,
        ballSpeedY:5,
        ballX:(Math.random() * W-7)+4,
        ballY:4
    }
    function keyPressed(event){
        if(event.key == "ArrowRight"){
            if(handler.handX>W-handler.handWidth){
                handler.handX = W-(handler.handWidth+3)
            }
            handler.handX += handler.handSpeed
        }
        if(event.key == "ArrowLeft"){
            handler.handX -= handler.handSpeed
            if(handler.handX<0){
                handler.handX = 0
            }
        }
    }

    document.addEventListener('keydown',keyPressed)
    function draw(){
        
        //pen.fillRect(40,40,handler.handWidth,handler.handHeight)
        pen.clearRect(0,0,W,H)
        pen.beginPath();
        pen.fillStyle = "white"
        pen.arc(ball.ballX, ball.ballY, ball.ballRadius, 0, 2 * Math.PI);
        pen.stroke();
        pen.fillRect(handler.handX,H-5,handler.handWidth,handler.handHeight)
    }
    function update(){
        if(ball.ballY>(H-ball.ballRadius)){
            window.alert("You Lose")
            clearTimeout(intervalId)
        }
        if(ball.ballY+ball.ballRadius>=(handler.handY) && ((ball.ballX>=(handler.handX)) && (ball.ballX<=(handler.handX+handler.handWidth)))){
            ball.ballSpeedY *= -1;
        }
        if(/*ball.ballY>=(H-ball.ballRadius)||*/ball.ballY<=(ball.ballRadius)){
            ball.ballSpeedY *= -1;
        }
        
        if(ball.ballX>=(W-ball.ballRadius)||ball.ballX<=(ball.ballRadius)){
            ball.ballSpeedX *= -1;
        }
        
        ball.ballX +=ball.ballSpeedX
        ball.ballY +=ball.ballSpeedY
        
        
    }
    
    function gameLoop(){
        draw()
        update()
    }
    let intervalId = setInterval(()=>{
        gameLoop()
    },100)
}

inIt()

