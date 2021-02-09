var c = document.getElementById('mycanvas');
var ctx = c.getContext('2d');
//Fill Rectangle
// //ctx.fillStyle='red';
// //ctx.fillRect(20,20,200,100);
// //ctx.fillStyle='blue';
// //ctx.fillRect(240,20,200,100);

//Stroke Rectangle
// //ctx.lineWidth=2
// //ctx.strokeStyle='green'
// //ctx.strokeRect(20,150,200,100)

//Font Fill
// //ctx.font='30px Arial'
// //ctx.fillStyle='coral'
// //ctx.fillText('hello world',240,150)

//Font Stroke
// //ctx.font='30px Arial'
// //ctx.strokeStyle='black'
// //ctx.strokeText('helloworld',250,200)

//Triangle
// //ctx.beginPath()
// //ctx.moveTo(250,250)
// //ctx.lineTo(300,250)
// //ctx.lineTo(275,450)
// //ctx.lineTo(250,250)
// //ctx.closePath()
// //ctx.fillStyle='coral'
// //ctx.fill();

// //ctx.beginPath()
// //ctx.moveTo(335,450)
// //ctx.lineTo(310,250)
// //ctx.lineTo(360,250)
// //ctx.lineTo(335,450)
// //ctx.closePath()
// //ctx.fillStyle='teal'
// //ctx.fill();

//arcs/circle
//face
//let centerX=c.width/2
//let centerY=c.height/2
//ctx.beginPath()
//ctx.arc(c.width/2,c.height/2,100,0,2 * Math.PI)
//ctx.stroke()

//smile
//ctx.beginPath()
//ctx.arc(c.width/2,c.height/2,70,0,Math.PI)
//ctx.stroke()

//ctx.moveTo((c.width/2),(c.height/2)-30)
//eyeleft
//ctx.beginPath()
//ctx.arc((c.width/2)-35,(c.height/2)-35,2,0,2*Math.PI)
//ctx.stroke()

//eyeright
//ctx.beginPath()
//ctx.arc((c.width/2)+35,(c.height/2)-35,2,0,2*Math.PI)
//ctx.stroke()

//circle animation basic

let circle={
    x:40,
    y:40,
    size:30,
    dx:4,
    dy:3
}

function drawCircle(){
    ctx.beginPath()
    ctx.arc(circle.x,circle.y,circle.size,0,2*Math.PI)
    ctx.fillStyle='orange'
    ctx.fill()
}

//function animate()
{
//   ctx.clearRect(0,0,c.width,c.height)
 //  drawCircle()
//   circle.x += circle.dx
//   circle.y+=circle.dy
 //  if(circle.x + circle.size > c.width || circle.x -circle.size < 0 )
    {
       circle.dx*=(-1)
    }
//   if(circle.y + circle.size > c.height || circle.y -circle.size < 0 )
    {
       circle.dy*=(-1)
    }
    
    
//   requestAnimationFrame(animate)

}

//animate()



const image = document.getElementById('plrimg')

const player = {
  w: 50,
  h: 70,
  x: 20,
  y: 200,
  speed: 10,
  dx: 0,
  dy: 0
}

function drawPlayer() {
  ctx.drawImage(image, player.x, player.y, player.w, player.h);
}

function clear()
{
    ctx.clearRect(0,0,c.width,c.height)
}
function newpos()
{
    player.x+=player.dx
    player.y+=player.dy
}



function update(){
    clear()
    drawPlayer()
    newpos()
    requestAnimationFrame(update)
}
function moveup(){
    player.dy = -player.speed
}
function movedown(){
    player.dy = player.speed
}
function moveright(){
    player.dx = player.speed
}
function moveleft(){
    player.dx = -player.speed
}

function keyDown(e){
    if(e.key==='ArrowRight'||e.key==='Right')
    {
        moveright()
    }
    else if(e.key==='ArrowLeft'||e.key==='Left')
    {
        moveleft()
    }
    else if(e.key==='ArrowUp'||e.key==='Up')
    {
        moveup()
    }
    else if(e.key==='ArrowDown'||e.key==='Down')
    {
        movedown()
    }
}

function keyUp(e){
    if(e.key=='ArrowRight'||
       e.key=='Right'||
       e.key=='ArrowLeft'||
       e.key=='Left'||
       e.key=='ArrowUp'||
       e.key=='Up'||
       e.key=='ArrowDown'||
       e.key=='Down'){

        player.dx=0
        player.dy=0
       }
}
update()

document.addEventListener('keyUp',keyUp)
document.addEventListener('keyDown',keyDown)



