let canvas=document.getElementById('frame')
let ctx=canvas.getContext('2d')

let counter=3
for(let i=5;i<=490;i+=70)
{
  
  let x=i
  let y=0
  let w=70
  let h=20
  if(counter%2!==0){
    ctx.fillStyle='black'
 }

 else{
    ctx.fillStyle='yellow'
 }

  ctx.fillRect(x,y,w,h)
  counter+=1
}

counter =3
for(let j=5;j<=490;j+=70)
{
    let x=480
    let y=j
    let w=20
    let h=70
    if(counter%2!==0){
        ctx.fillStyle='black'
     }
    
     else{
        ctx.fillStyle='yellow'
     }
    
      ctx.fillRect(x,y,w,h)
      counter+=1
}

counter=3
for(let i=5;i<=490;i+=70)
{
  
  let x=i
  let y=480
  let w=70
  let h=20
  if(counter%2!==0){
    ctx.fillStyle='black'
 }

 else{
    ctx.fillStyle='yellow'
 }

  ctx.fillRect(x,y,w,h)
  counter+=1
}
counter =3
for(let j=5;j<=490;j+=70)
{
    let x=0
    let y=j
    let w=20
    let h=70
    if(counter%2!==0){
        ctx.fillStyle='black'
     }
    
     else{
        ctx.fillStyle='yellow'
     }
    
      ctx.fillRect(x,y,w,h)
      counter+=1
}

let circle={
    x:45,
    y:104,
    size:25,
    dx:4,
    dy:4

}
function drawCircle(){
    ctx.beginPath()
ctx.arc(circle.x,circle.y,circle.size,0,2*Math.PI)
ctx.fillStyle='orangered'
ctx.fill()
}

//function update(){
   //ctx.clearRect(20,20,480,480)
    drawCircle()
    if(circle.x+circle.size>480 || circle.x-circle.size<20)
    {
       circle.dx=circle.dx*-1
    }
    if(circle.y+circle.size>480 || circle.y-circle.size<20)
    {
      circle.dy=circle.dy*-1
    }
    circle.x+=circle.dx
    circle.y+=circle.dy
    requestAnimationFrame(update)
}
update()