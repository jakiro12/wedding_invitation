const parentTagSection_1=document.querySelector('.section_1')
const canvas = document.getElementById('logoCanvas');
const ctx = canvas.getContext('2d');
const biggreenLeaveImage=new Image();
const littleStickGreenImage=new Image();
const mediumStickGreenImage= new Image();
const mediumStickGreenImage_1=new Image();
const whiteLeaveImage=new Image();
const tinyGreenLeaveImage=new Image();
const tinyGreenLeaveImage_2= new Image();
const redPointsLeaveImage=new Image();
const roseImage = new Image();
roseImage.src = 'rosa.png';
biggreenLeaveImage.src='big_green_leave.png'
littleStickGreenImage.src='little_stick_green.png'
mediumStickGreenImage.src='medium_stick_green.png'
mediumStickGreenImage_1.src='medium_stick_green_1.png'
whiteLeaveImage.src='white_leave.png'
tinyGreenLeaveImage.src='tiny_leave.png'
tinyGreenLeaveImage_2.src='tiny_leave_2.png'
redPointsLeaveImage.src='red_points_leave.png'
const angleRotation=4; // Angulo de Rotacion de las animaciones




const containerWidth = document.getElementById('container_canvas').clientWidth;
const containerHeight = document.getElementById('container_canvas').clientHeight;

canvas.width = containerWidth > 430 ? 430 : containerWidth ;
canvas.height = containerHeight < 300 ?  870 : containerHeight;

const circlesDatesContainer=document.querySelectorAll('.section_1--counter > div')
const canvasCirclesAnimation=document.querySelector(".circle_times_animation_1")
const canvasCirclesAnimation_2=document.querySelector(".circle_times_animation_2")
const canvasCirclesAnimation_3=document.querySelector(".circle_times_animation_3")
const canvasCirclesAnimation_4=document.querySelector(".circle_times_animation_4")

const circles_animations_ctx=canvasCirclesAnimation.getContext("2d")
const circles_animations_ctx_2=canvasCirclesAnimation_2.getContext("2d")
const circles_animations_ctx_3=canvasCirclesAnimation_3.getContext("2d")
const circles_animations_ctx_4=canvasCirclesAnimation_4.getContext("2d")




canvasCirclesAnimation.width=circlesDatesContainer[0].clientWidth + 20;
canvasCirclesAnimation.height=circlesDatesContainer[0].clientHeight + 20;
canvasCirclesAnimation_2.width=circlesDatesContainer[1].clientWidth + 20;
canvasCirclesAnimation_2.height=circlesDatesContainer[1].clientHeight + 20;
canvasCirclesAnimation_3.width=circlesDatesContainer[2].clientWidth + 20;
canvasCirclesAnimation_3.height=circlesDatesContainer[2].clientHeight + 20;
canvasCirclesAnimation_4.width=circlesDatesContainer[3].clientWidth + 20;
canvasCirclesAnimation_4.height=circlesDatesContainer[3].clientHeight + 20;
let centerXCirclesAnimation=canvasCirclesAnimation.width / 2
let centerYCirclesAnimation=canvasCirclesAnimation.height/2

let centerXCirclesAnimation_2=canvasCirclesAnimation_2.width / 2;
let centerYCirclesAnimation_2 = canvasCirclesAnimation_2.height / 2;

let centerXCirclesAnimation_3=canvasCirclesAnimation_3.width / 2;
let centerYCirclesAnimation_3 = canvasCirclesAnimation_3.height / 2;

let centerXCirclesAnimation_4=canvasCirclesAnimation_4.width / 2;
let centerYCirclesAnimation_4 = canvasCirclesAnimation_4.height / 2;
let angleLeaveCircles = 0;
function animate_circles() {
  circles_animations_ctx.clearRect(0, 0, canvasCirclesAnimation.width , canvasCirclesAnimation.height);

  let roseSize=20;
  let tinyLeaveSize=5;
  let mediumStickLeaveSize=20;
  let greenBigLeaveSize=10;
  let littleStickLeaveSize=15;
  let whiteLeaveSize=5;
  let redPointsLeaveSize=5;

  circles_animations_ctx.save();
  circles_animations_ctx.translate(centerXCirclesAnimation - 30, centerYCirclesAnimation + 5);
  circles_animations_ctx.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 280 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx.drawImage(mediumStickGreenImage, -mediumStickLeaveSize/2, -mediumStickLeaveSize/2, mediumStickLeaveSize, mediumStickLeaveSize);
  circles_animations_ctx.restore();

  circles_animations_ctx.save();
  circles_animations_ctx.translate(centerXCirclesAnimation - 25, centerYCirclesAnimation  + 10);
  circles_animations_ctx.rotate((Math.sin((angleLeaveCircles) * Math.PI / 240) * angleRotation + 280 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
  circles_animations_ctx.restore();

  

  circles_animations_ctx.save();
  circles_animations_ctx.translate(centerXCirclesAnimation - 10, centerYCirclesAnimation + 20);
  circles_animations_ctx.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 180 ) * Math.PI / 180); 
  circles_animations_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
  circles_animations_ctx.restore();

  circles_animations_ctx.save();
  circles_animations_ctx.translate(centerXCirclesAnimation - 15, centerYCirclesAnimation + 30);
  circles_animations_ctx.rotate((Math.sin(angleLeaveCircles * Math.PI / 240) * angleRotation + 280 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
  circles_animations_ctx.restore();

  circles_animations_ctx.save();
  circles_animations_ctx.translate(centerXCirclesAnimation - 15, centerYCirclesAnimation + 30);
  circles_animations_ctx.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize + 0, whiteLeaveSize + 0);
  circles_animations_ctx.restore();

  circles_animations_ctx.save();
  circles_animations_ctx.translate(centerXCirclesAnimation - 15, centerYCirclesAnimation + 30);
  circles_animations_ctx.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
  circles_animations_ctx.restore()

  circles_animations_ctx.save();
  circles_animations_ctx.translate( centerXCirclesAnimation - 25, centerYCirclesAnimation + 20);
  circles_animations_ctx.rotate( Math.PI * 1.6)
  circles_animations_ctx.drawImage(roseImage, -roseSize/2, -roseSize/2, roseSize, roseSize);
  circles_animations_ctx.restore();


// Rosa superior

  circles_animations_ctx.save();
  circles_animations_ctx.translate(centerXCirclesAnimation + 30, centerYCirclesAnimation - 15);
  circles_animations_ctx.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 100 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx.drawImage(mediumStickGreenImage, -mediumStickLeaveSize/2, -mediumStickLeaveSize/2, mediumStickLeaveSize, mediumStickLeaveSize);
  circles_animations_ctx.restore();

  circles_animations_ctx.save();
  circles_animations_ctx.translate(centerXCirclesAnimation + 25, centerYCirclesAnimation - 15 );
  circles_animations_ctx.rotate((Math.sin((angleLeaveCircles) * Math.PI / 240) * angleRotation + 100 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
  circles_animations_ctx.restore();

  circles_animations_ctx.save();
  circles_animations_ctx.translate(centerXCirclesAnimation + 10, centerYCirclesAnimation - 20);
  circles_animations_ctx.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 0 ) * Math.PI / 180); 
  circles_animations_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
  circles_animations_ctx.restore();

  circles_animations_ctx.save();
  circles_animations_ctx.translate(centerXCirclesAnimation + 5, centerYCirclesAnimation - 35);
  circles_animations_ctx.rotate((Math.sin(angleLeaveCircles * Math.PI / 240) * angleRotation + 80 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
  circles_animations_ctx.restore();

  circles_animations_ctx.save();
  circles_animations_ctx.translate(centerXCirclesAnimation + 10, centerYCirclesAnimation - 30);
  circles_animations_ctx.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 60 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize,whiteLeaveSize);
  circles_animations_ctx.restore();

  circles_animations_ctx.save();
  circles_animations_ctx.translate(centerXCirclesAnimation + 10, centerYCirclesAnimation - 30);
  circles_animations_ctx.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 60 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize,redPointsLeaveSize);
  circles_animations_ctx.restore()

  circles_animations_ctx.save();
  circles_animations_ctx.translate( centerXCirclesAnimation + 20, centerYCirclesAnimation - 25);
  circles_animations_ctx.rotate( Math.PI * 0.6)
  circles_animations_ctx.drawImage(roseImage, -roseSize/2, -roseSize/2, roseSize, roseSize);
  circles_animations_ctx.restore();

  angleLeaveCircles += 1

    requestAnimationFrame(animate_circles)
}

animate_circles();

function animate_circles_2() {
  circles_animations_ctx_2.clearRect(0, 0, canvasCirclesAnimation.width , canvasCirclesAnimation.height);

  let roseSize=20;
  let tinyLeaveSize=5;
  let mediumStickLeaveSize=20;
  let greenBigLeaveSize=10;
  let littleStickLeaveSize=15;
  let whiteLeaveSize=5;
  let redPointsLeaveSize=5;

 
  circles_animations_ctx_2.save();
  circles_animations_ctx_2.translate(centerXCirclesAnimation - 30, centerYCirclesAnimation + 5);
  circles_animations_ctx_2.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 280 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_2.drawImage(mediumStickGreenImage, -mediumStickLeaveSize/2, -mediumStickLeaveSize/2, mediumStickLeaveSize, mediumStickLeaveSize);
  circles_animations_ctx_2.restore();

  circles_animations_ctx_2.save();
  circles_animations_ctx_2.translate(centerXCirclesAnimation - 25, centerYCirclesAnimation  + 10);
  circles_animations_ctx_2.rotate((Math.sin((angleLeaveCircles) * Math.PI / 240) * angleRotation + 280 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_2.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
  circles_animations_ctx_2.restore();

  

  circles_animations_ctx_2.save();
  circles_animations_ctx_2.translate(centerXCirclesAnimation - 10, centerYCirclesAnimation + 20);
  circles_animations_ctx_2.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 180 ) * Math.PI / 180); 
  circles_animations_ctx_2.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
  circles_animations_ctx_2.restore();

  circles_animations_ctx_2.save();
  circles_animations_ctx_2.translate(centerXCirclesAnimation - 15, centerYCirclesAnimation + 30);
  circles_animations_ctx_2.rotate((Math.sin(angleLeaveCircles * Math.PI / 240) * angleRotation + 280 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_2.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
  circles_animations_ctx_2.restore();

  circles_animations_ctx_2.save();
  circles_animations_ctx_2.translate(centerXCirclesAnimation - 15, centerYCirclesAnimation + 30);
  circles_animations_ctx_2.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_2.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize + 0, whiteLeaveSize + 0);
  circles_animations_ctx_2.restore();

  circles_animations_ctx_2.save();
  circles_animations_ctx_2.translate(centerXCirclesAnimation - 15, centerYCirclesAnimation + 30);
  circles_animations_ctx_2.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_2.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
  circles_animations_ctx_2.restore()

  circles_animations_ctx_2.save();
  circles_animations_ctx_2.translate( centerXCirclesAnimation - 25, centerYCirclesAnimation + 20);
  circles_animations_ctx_2.rotate( Math.PI * 1.6)
  circles_animations_ctx_2.drawImage(roseImage, -roseSize/2, -roseSize/2, roseSize, roseSize);
  circles_animations_ctx_2.restore();


// Rosa superior

  circles_animations_ctx_2.save();
  circles_animations_ctx_2.translate(centerXCirclesAnimation + 30, centerYCirclesAnimation - 15);
  circles_animations_ctx_2.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 100 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_2.drawImage(mediumStickGreenImage, -mediumStickLeaveSize/2, -mediumStickLeaveSize/2, mediumStickLeaveSize, mediumStickLeaveSize);
  circles_animations_ctx_2.restore();

  circles_animations_ctx_2.save();
  circles_animations_ctx_2.translate(centerXCirclesAnimation + 25, centerYCirclesAnimation - 15 );
  circles_animations_ctx_2.rotate((Math.sin((angleLeaveCircles) * Math.PI / 240) * angleRotation + 100 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_2.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
  circles_animations_ctx_2.restore();

  circles_animations_ctx_2.save();
  circles_animations_ctx_2.translate(centerXCirclesAnimation + 10, centerYCirclesAnimation - 20);
  circles_animations_ctx_2.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 0 ) * Math.PI / 180); 
  circles_animations_ctx_2.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
  circles_animations_ctx_2.restore();

  circles_animations_ctx_2.save();
  circles_animations_ctx_2.translate(centerXCirclesAnimation + 5, centerYCirclesAnimation - 35);
  circles_animations_ctx_2.rotate((Math.sin(angleLeaveCircles * Math.PI / 240) * angleRotation + 80 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_2.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
  circles_animations_ctx_2.restore();

  circles_animations_ctx_2.save();
  circles_animations_ctx_2.translate(centerXCirclesAnimation + 10, centerYCirclesAnimation - 30);
  circles_animations_ctx_2.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 60 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_2.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize,whiteLeaveSize);
  circles_animations_ctx_2.restore();

  circles_animations_ctx_2.save();
  circles_animations_ctx_2.translate(centerXCirclesAnimation + 10, centerYCirclesAnimation - 30);
  circles_animations_ctx_2.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 60 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_2.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize,redPointsLeaveSize);
  circles_animations_ctx_2.restore()

  circles_animations_ctx_2.save();
  circles_animations_ctx_2.translate( centerXCirclesAnimation + 20, centerYCirclesAnimation - 25);
  circles_animations_ctx_2.rotate( Math.PI * 0.6)
  circles_animations_ctx_2.drawImage(roseImage, -roseSize/2, -roseSize/2, roseSize, roseSize);
  circles_animations_ctx_2.restore();

  angleLeaveCircles += 1

    requestAnimationFrame(animate_circles_2)
}

animate_circles_2();

function animate_circles_3() {
  circles_animations_ctx_3.clearRect(0, 0, canvasCirclesAnimation.width , canvasCirclesAnimation.height);

  let roseSize=20;
  let tinyLeaveSize=5;
  let mediumStickLeaveSize=20;
  let greenBigLeaveSize=10;
  let littleStickLeaveSize=15;
  let whiteLeaveSize=5;
  let redPointsLeaveSize=5;

 
  circles_animations_ctx_3.save();
  circles_animations_ctx_3.translate(centerXCirclesAnimation - 30, centerYCirclesAnimation + 5);
  circles_animations_ctx_3.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 280 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_3.drawImage(mediumStickGreenImage, -mediumStickLeaveSize/2, -mediumStickLeaveSize/2, mediumStickLeaveSize, mediumStickLeaveSize);
  circles_animations_ctx_3.restore();

  circles_animations_ctx_3.save();
  circles_animations_ctx_3.translate(centerXCirclesAnimation - 25, centerYCirclesAnimation  + 10);
  circles_animations_ctx_3.rotate((Math.sin((angleLeaveCircles) * Math.PI / 240) * angleRotation + 280 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_3.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
  circles_animations_ctx_3.restore();

  

  circles_animations_ctx_3.save();
  circles_animations_ctx_3.translate(centerXCirclesAnimation - 10, centerYCirclesAnimation + 20);
  circles_animations_ctx_3.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 180 ) * Math.PI / 180); 
  circles_animations_ctx_3.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
  circles_animations_ctx_3.restore();

  circles_animations_ctx_3.save();
  circles_animations_ctx_3.translate(centerXCirclesAnimation - 15, centerYCirclesAnimation + 30);
  circles_animations_ctx_3.rotate((Math.sin(angleLeaveCircles * Math.PI / 240) * angleRotation + 280 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_3.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
  circles_animations_ctx_3.restore();

  circles_animations_ctx_3.save();
  circles_animations_ctx_3.translate(centerXCirclesAnimation - 15, centerYCirclesAnimation + 30);
  circles_animations_ctx_3.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_3.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize + 0, whiteLeaveSize + 0);
  circles_animations_ctx_3.restore();

  circles_animations_ctx_3.save();
  circles_animations_ctx_3.translate(centerXCirclesAnimation - 15, centerYCirclesAnimation + 30);
  circles_animations_ctx_3.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_3.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
  circles_animations_ctx_3.restore()

  circles_animations_ctx_3.save();
  circles_animations_ctx_3.translate( centerXCirclesAnimation - 25, centerYCirclesAnimation + 20);
  circles_animations_ctx_3.rotate( Math.PI * 1.6)
  circles_animations_ctx_3.drawImage(roseImage, -roseSize/2, -roseSize/2, roseSize, roseSize);
  circles_animations_ctx_3.restore();


// Rosa superior

  circles_animations_ctx_3.save();
  circles_animations_ctx_3.translate(centerXCirclesAnimation + 30, centerYCirclesAnimation - 15);
  circles_animations_ctx_3.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 100 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_3.drawImage(mediumStickGreenImage, -mediumStickLeaveSize/2, -mediumStickLeaveSize/2, mediumStickLeaveSize, mediumStickLeaveSize);
  circles_animations_ctx_3.restore();

  circles_animations_ctx_3.save();
  circles_animations_ctx_3.translate(centerXCirclesAnimation + 25, centerYCirclesAnimation - 15 );
  circles_animations_ctx_3.rotate((Math.sin((angleLeaveCircles) * Math.PI / 240) * angleRotation + 100 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_3.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
  circles_animations_ctx_3.restore();

  circles_animations_ctx_3.save();
  circles_animations_ctx_3.translate(centerXCirclesAnimation + 10, centerYCirclesAnimation - 20);
  circles_animations_ctx_3.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 0 ) * Math.PI / 180); 
  circles_animations_ctx_3.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
  circles_animations_ctx_3.restore();

  circles_animations_ctx_3.save();
  circles_animations_ctx_3.translate(centerXCirclesAnimation + 5, centerYCirclesAnimation - 35);
  circles_animations_ctx_3.rotate((Math.sin(angleLeaveCircles * Math.PI / 240) * angleRotation + 80 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_3.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
  circles_animations_ctx_3.restore();

  circles_animations_ctx_3.save();
  circles_animations_ctx_3.translate(centerXCirclesAnimation + 10, centerYCirclesAnimation - 30);
  circles_animations_ctx_3.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 60 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_3.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize,whiteLeaveSize);
  circles_animations_ctx_3.restore();

  circles_animations_ctx_3.save();
  circles_animations_ctx_3.translate(centerXCirclesAnimation + 10, centerYCirclesAnimation - 30);
  circles_animations_ctx_3.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 60 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_3.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize,redPointsLeaveSize);
  circles_animations_ctx_3.restore()

  circles_animations_ctx_3.save();
  circles_animations_ctx_3.translate( centerXCirclesAnimation + 20, centerYCirclesAnimation - 25);
  circles_animations_ctx_3.rotate( Math.PI * 0.6)
  circles_animations_ctx_3.drawImage(roseImage, -roseSize/2, -roseSize/2, roseSize, roseSize);
  circles_animations_ctx_3.restore();

  angleLeaveCircles += 1

    requestAnimationFrame(animate_circles_3)
}

animate_circles_3();

function animate_circles_4() {
  circles_animations_ctx_4.clearRect(0, 0, canvasCirclesAnimation.width , canvasCirclesAnimation.height);

  let roseSize=20;
  let tinyLeaveSize=5;
  let mediumStickLeaveSize=20;
  let greenBigLeaveSize=10;
  let littleStickLeaveSize=15;
  let whiteLeaveSize=5;
  let redPointsLeaveSize=5;

 
  circles_animations_ctx_4.save();
  circles_animations_ctx_4.translate(centerXCirclesAnimation - 30, centerYCirclesAnimation + 5);
  circles_animations_ctx_4.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 280 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_4.drawImage(mediumStickGreenImage, -mediumStickLeaveSize/2, -mediumStickLeaveSize/2, mediumStickLeaveSize, mediumStickLeaveSize);
  circles_animations_ctx_4.restore();

  circles_animations_ctx_4.save();
  circles_animations_ctx_4.translate(centerXCirclesAnimation - 25, centerYCirclesAnimation  + 10);
  circles_animations_ctx_4.rotate((Math.sin((angleLeaveCircles) * Math.PI / 240) * angleRotation + 280 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_4.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
  circles_animations_ctx_4.restore();

  

  circles_animations_ctx_4.save();
  circles_animations_ctx_4.translate(centerXCirclesAnimation - 10, centerYCirclesAnimation + 20);
  circles_animations_ctx_4.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 180 ) * Math.PI / 180); 
  circles_animations_ctx_4.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
  circles_animations_ctx_4.restore();

  circles_animations_ctx_4.save();
  circles_animations_ctx_4.translate(centerXCirclesAnimation - 15, centerYCirclesAnimation + 30);
  circles_animations_ctx_4.rotate((Math.sin(angleLeaveCircles * Math.PI / 240) * angleRotation + 280 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_4.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
  circles_animations_ctx_4.restore();

  circles_animations_ctx_4.save();
  circles_animations_ctx_4.translate(centerXCirclesAnimation - 15, centerYCirclesAnimation + 30);
  circles_animations_ctx_4.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_4.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize + 0, whiteLeaveSize + 0);
  circles_animations_ctx_4.restore();

  circles_animations_ctx_4.save();
  circles_animations_ctx_4.translate(centerXCirclesAnimation - 15, centerYCirclesAnimation + 30);
  circles_animations_ctx_4.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_4.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
  circles_animations_ctx_4.restore()

  circles_animations_ctx_4.save();
  circles_animations_ctx_4.translate( centerXCirclesAnimation - 25, centerYCirclesAnimation + 20);
  circles_animations_ctx_4.rotate( Math.PI * 1.6)
  circles_animations_ctx_4.drawImage(roseImage, -roseSize/2, -roseSize/2, roseSize, roseSize);
  circles_animations_ctx_4.restore();


// Rosa superior

  circles_animations_ctx_4.save();
  circles_animations_ctx_4.translate(centerXCirclesAnimation + 30, centerYCirclesAnimation - 15);
  circles_animations_ctx_4.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 100 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_4.drawImage(mediumStickGreenImage, -mediumStickLeaveSize/2, -mediumStickLeaveSize/2, mediumStickLeaveSize, mediumStickLeaveSize);
  circles_animations_ctx_4.restore();

  circles_animations_ctx_4.save();
  circles_animations_ctx_4.translate(centerXCirclesAnimation + 25, centerYCirclesAnimation - 15 );
  circles_animations_ctx_4.rotate((Math.sin((angleLeaveCircles) * Math.PI / 240) * angleRotation + 100 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_4.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
  circles_animations_ctx_4.restore();

  circles_animations_ctx_4.save();
  circles_animations_ctx_4.translate(centerXCirclesAnimation + 10, centerYCirclesAnimation - 20);
  circles_animations_ctx_4.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 0 ) * Math.PI / 180); 
  circles_animations_ctx_4.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
  circles_animations_ctx_4.restore();

  circles_animations_ctx_4.save();
  circles_animations_ctx_4.translate(centerXCirclesAnimation + 5, centerYCirclesAnimation - 35);
  circles_animations_ctx_4.rotate((Math.sin(angleLeaveCircles * Math.PI / 240) * angleRotation + 80 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_4.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
  circles_animations_ctx_4.restore();

  circles_animations_ctx_4.save();
  circles_animations_ctx_4.translate(centerXCirclesAnimation + 10, centerYCirclesAnimation - 30);
  circles_animations_ctx_4.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 60 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_4.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize,whiteLeaveSize);
  circles_animations_ctx_4.restore();

  circles_animations_ctx_4.save();
  circles_animations_ctx_4.translate(centerXCirclesAnimation + 10, centerYCirclesAnimation - 30);
  circles_animations_ctx_4.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 60 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx_4.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize,redPointsLeaveSize);
  circles_animations_ctx_4.restore()

  circles_animations_ctx_4.save();
  circles_animations_ctx_4.translate( centerXCirclesAnimation + 20, centerYCirclesAnimation - 25);
  circles_animations_ctx_4.rotate( Math.PI * 0.6)
  circles_animations_ctx_4.drawImage(roseImage, -roseSize/2, -roseSize/2, roseSize, roseSize);
  circles_animations_ctx_4.restore();

  angleLeaveCircles += 1

    requestAnimationFrame(animate_circles_4)
}

animate_circles_4();

let angle = 0;  // Ángulo inicial de rotación

/*Seccion 2, otro canvas aparte */
const parent_section_2_canvas = document.querySelector('.section_2');
const canvas_section_2 = document.getElementById('section_canvas_2');
const section_2_ctx = canvas_section_2.getContext("2d");

const get_width_section_2 = parent_section_2_canvas.clientWidth;
const get_height_section_2 = parent_section_2_canvas.clientHeight;
canvas_section_2.width = get_width_section_2 > 430 ? 430 : get_width_section_2 ;
canvas_section_2.height = get_height_section_2 < 300 ?  870 : get_height_section_2;

const centerX = canvas_section_2.width / 2;
const centerY = canvas_section_2.height / 2;


let angleLeave = 0;
function animate_1() {
  section_2_ctx.clearRect(0, 0, canvas_section_2.width, canvas_section_2.height);
    let roseCornerSize = 95;
    let roseBorderCircleSize = 80;
    let greenBigLeaveCornerSize = 75;
    let greenBigLeaveSize = 60;
    let littleStickLeaveSize=75;
    let littleStickLeaveCornerSize=70;
    let mediumStickLeaveSize=80;
    let mediumStickLeaveCornerSize=75;
    let whiteLeaveSize=60;
    let whiteLeaveCornerSize=65;
    let tinyLeaveSize=50;
    let tinyLeaveCornerSize=85;
    let redPointsLeaveSize=50;
    // Primera Linea
    section_2_ctx.strokeStyle = '#9b5a01';
    section_2_ctx.lineWidth = 2;  
    section_2_ctx.save();  
    section_2_ctx.translate(0, 100);  
    section_2_ctx.rotate(-13 * Math.PI / 180);  
    section_2_ctx.beginPath();
    section_2_ctx.moveTo(0, 0);
    section_2_ctx.lineTo(650, 0);
    section_2_ctx.stroke();
    section_2_ctx.restore();  

    // Segunda línea
    section_2_ctx.strokeStyle = '#9b5a01';
    section_2_ctx.lineWidth = 2;  
    section_2_ctx.save();  
    section_2_ctx.translate(0, 20);  
    section_2_ctx.rotate(13 * Math.PI / 180);  
    section_2_ctx.beginPath();
    section_2_ctx.moveTo(0, 0);
    section_2_ctx.lineTo(650, 0);
    section_2_ctx.stroke();
    section_2_ctx.restore();  
    // Tercera linea
    section_2_ctx.strokeStyle = '#9b5a01';
    section_2_ctx.lineWidth = 2;  
    section_2_ctx.save();  
    section_2_ctx.translate(0, centerY*2 - 10);  
    section_2_ctx.rotate(-13 * Math.PI / 180);  
    section_2_ctx.beginPath();
    section_2_ctx.moveTo(0, 0);
    section_2_ctx.lineTo(650, 0);
    section_2_ctx.stroke();
    section_2_ctx.restore();  
    //Cuarta Linea
    section_2_ctx.strokeStyle = '#9b5a01';
    section_2_ctx.lineWidth = 2;  
    section_2_ctx.save();  
    section_2_ctx.translate(0, centerY*2 - 140);  
    section_2_ctx.rotate(13 * Math.PI / 180);  
    section_2_ctx.beginPath();
    section_2_ctx.moveTo(0, 0);
    section_2_ctx.lineTo(650, 0);
    section_2_ctx.stroke();
    section_2_ctx.restore();  

    section_2_ctx.save();
    section_2_ctx.translate(centerX + 90, centerY - 110);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 260) * angleRotation + 30 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX + 145, centerY - 70);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 100 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX + 140, centerY - 90);
    section_2_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 100 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX + 70, centerY - 155);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 85 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX + 95, centerY - 152);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 85 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX + 95, centerY - 152);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 85 ) * Math.PI / 180);  
    section_2_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX + 95, centerY - 90);
    section_2_ctx.rotate(Math.PI / 2);
    section_2_ctx.drawImage(roseImage, -70, -70, roseBorderCircleSize, roseBorderCircleSize);
    section_2_ctx.restore();

    //Rosa del Lado izquierdo inferior
    section_2_ctx.save();
    section_2_ctx.translate(centerX - 95, centerY + 95);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
    section_2_ctx.restore();
    
    section_2_ctx.save();
    section_2_ctx.translate(centerX - 150, centerY + 55);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 300 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX - 65, centerY + 145);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 260 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_2_ctx.restore();
    
    section_2_ctx.save();
    section_2_ctx.translate(centerX - 95, centerY + 130);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
    section_2_ctx.restore();


    section_2_ctx.save();
    section_2_ctx.translate(centerX - 145, centerY + 75);
    section_2_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 300 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX - 95, centerY + 130);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX - 90, centerY + 90);
    section_2_ctx.rotate(Math.PI * 1.6);
    section_2_ctx.drawImage(roseImage, -70, -70, roseBorderCircleSize, roseBorderCircleSize);
    section_2_ctx.restore();

// Corner rosa
    section_2_ctx.save();
    section_2_ctx.translate(150, 55);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 30 ) * Math.PI / 180);  
    section_2_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(60, 170);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 140 ) * Math.PI / 180);  
    section_2_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate( 50, 125);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 10 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate( 90,  145);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 280 ) * Math.PI / 180);  
    section_2_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveCornerSize / 2), -(littleStickLeaveCornerSize / 2), littleStickLeaveCornerSize, littleStickLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(130, 80);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 270 ) * Math.PI / 180);  
    section_2_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveCornerSize / 2), -(tinyLeaveCornerSize / 2), tinyLeaveCornerSize, tinyLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate( 100, 60);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(120,120);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(60, 65 );
    section_2_ctx.rotate((Math.sin((angleLeave) * Math.PI / 280) * angleRotation - 20 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveCornerSize / 2), -(greenBigLeaveCornerSize / 2), greenBigLeaveCornerSize, greenBigLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate( 70, 90);
    section_2_ctx.rotate(Math.PI / 1);
    section_2_ctx.drawImage(roseImage, -(roseCornerSize/2) , -(roseCornerSize/2), roseCornerSize, roseCornerSize);
    section_2_ctx.restore();
    //Rosa Inferior
    section_2_ctx.save();
    section_2_ctx.translate( centerX*2 - 160, centerY*2 - 50);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 230 ) * Math.PI / 180);  
    section_2_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX*2 - 40, centerY*2 - 150);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 320 ) * Math.PI / 180);  
    section_2_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX*2 - 140, centerY*2 - 70 );
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 80 ) * Math.PI / 180);  
    section_2_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveCornerSize / 2), -(tinyLeaveCornerSize / 2), tinyLeaveCornerSize, tinyLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX*2 - 110, centerY*2 - 40);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 10 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate( centerX*2 - 90,  centerY*2 - 140) ;
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 100 ) * Math.PI / 180);  
    section_2_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveCornerSize / 2), -(littleStickLeaveCornerSize / 2), littleStickLeaveCornerSize, littleStickLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX*2 - 50, centerY*2 - 100);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX*2 - 130,  centerY*2 - 120);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 60 ) * Math.PI / 180);  
    section_2_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX*2 - 55,centerY*2 - 65 );
    section_2_ctx.rotate((Math.sin((angleLeave) * Math.PI / 280) * angleRotation + 140 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveCornerSize / 2), -(greenBigLeaveCornerSize / 2), greenBigLeaveCornerSize, greenBigLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX*2 - 75, centerY*2 - 80);
    section_2_ctx.rotate(Math.PI * 0.15);
    section_2_ctx.drawImage(roseImage, -(roseCornerSize/2) , -(roseCornerSize/2), roseCornerSize, roseCornerSize);
    section_2_ctx.restore();

    angleLeave += 0.1; // Incrementar el ángulo para la animación

    requestAnimationFrame(animate_1);
}
animate_1()

let executeTextSection_2=false
window.addEventListener("scroll", function() {
  const box2Top = parent_section_2_canvas.getBoundingClientRect().top + parent_section_2_canvas.offsetHeight/2;
  const bothCircles=this.document.querySelectorAll('.section_2 > div')
  const allImageAnimate=this.document.querySelectorAll('.section_2 > img')
  if (box2Top <= window.innerHeight && box2Top >= 0 && !executeTextSection_2) {
      canvas_section_2.classList.add('scale_section_2');
      allImageAnimate[0].classList.add('section_2_text')
      bothCircles[0].classList.add('section_2-outer_circle')
      bothCircles[1].classList.add('section_2-inner_circle')
      allImageAnimate[1].classList.add('img_bg_stain_1')
      allImageAnimate[2].classList.add('img_bg_stain_2')
      executeTextSection_2=true
  } 
});


/* Tercera Seccion del Canvas */
const parent_section_3_canvas = document.querySelector('.section_3');
const canvas_section_3 = document.getElementById('section_canvas_3');
const section_3_ctx = canvas_section_3.getContext('2d');
const get_width_section_3 = parent_section_3_canvas.clientWidth;
const get_height_section_3 = parent_section_3_canvas.clientHeight;

canvas_section_3.width = get_width_section_3 > 430 ? 430 : get_width_section_3 ;
canvas_section_3.height = get_height_section_3 < 300 ? 870 : get_height_section_3;

const width_squares= 250;
const height_squares=250;

const middle_height=get_height_section_3 /2
const middle_width= get_width_section_3 / 2


const initialImageSize=0;
function animate_section_3() {
  section_3_ctx.clearRect(0, 0, canvas_section_3.width, canvas_section_3.height);
  let greenBigLeaveSize = 55;
  let littleStickLeaveSize=95;
  let mediumStickLeaveSize=90;
  let whiteLeaveSize=50;
  let redPointsLeaveSize=50;
  let roseBorderCircleSize = 65;
  let tinyLeaveSize=90;
  
    section_3_ctx.save();
    section_3_ctx.translate( centerX - 150,  centerY - 175 );
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 0 ) * Math.PI / 180);  
    section_3_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX - 50 , centerY - 230 );
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 200) * angleRotation  +  30 ) * Math.PI / 180);  
    section_3_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX - 80 , centerY - 210 )
    section_3_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 100 ) * Math.PI / 180);  
    section_3_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
    section_3_ctx.restore(); 

    section_3_ctx.save();
    section_3_ctx.translate( centerX - 130 , centerY - 205 );
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation - 10 ) * Math.PI / 180);  
    section_3_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX - 130 ,  centerY - 205 );
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation - 10 ) * Math.PI / 180);  
    section_3_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize,redPointsLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX - 90 , centerY - 160 );
    section_3_ctx.rotate(Math.PI * 2.2);
    section_3_ctx.drawImage(roseImage, -70, -70, roseBorderCircleSize,roseBorderCircleSize);
    section_3_ctx.restore();

    //Rosa inferior
    section_3_ctx.save();
    section_3_ctx.translate( centerX + 150,  centerY + 25 );
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation - 190 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_3_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX + 60 , centerY + 65);
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation  - 160 ) * Math.PI / 180);  
    section_3_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX  + 80 , centerY + 65 );
    section_3_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 240 ) * Math.PI / 180);  
    section_3_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate( centerX + 130, centerY + 45);
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 180 ) * Math.PI / 180); 
    section_3_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX + 130,  centerY + 45);
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 180 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_3_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX + 100 , centerY + 60);
    section_3_ctx.rotate(Math.PI * 1.2);
    section_3_ctx.drawImage(roseImage, -roseBorderCircleSize/2, -roseBorderCircleSize/2, roseBorderCircleSize, roseBorderCircleSize);
    section_3_ctx.restore();
    //Flores Laterales
    section_3_ctx.save();
    section_3_ctx.translate(tinyLeaveSize/2 + 40, centerY*2 - 130 );
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 220 ) * Math.PI / 180);  
    section_3_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate( littleStickLeaveSize/2 + 40,  centerY*2 - 80);
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation - 110 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_3_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(redPointsLeaveSize/2 + 40,  centerY*2 - 90);
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 180 ) * Math.PI / 180);  
    section_3_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize*2, redPointsLeaveSize*2);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate( whiteLeaveSize/2 , centerY*2 - 90 );
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 200 ) * Math.PI / 180);  
    section_3_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize*2, whiteLeaveSize*2);
    section_3_ctx.restore();


    section_3_ctx.save();
    section_3_ctx.translate(centerX*2 - 80 , centerY*2 - 130 );
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 140 ) * Math.PI / 180);  
    section_3_ctx.drawImage(tinyGreenLeaveImage_2, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
    section_3_ctx.restore();
    
    section_3_ctx.save();
    section_3_ctx.translate(centerX*2 - 80 ,  centerY*2 - 80);
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation - 0 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_3_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX*2 - 60 ,  centerY*2 - 130);
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 0 ) * Math.PI / 180);  
    section_3_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize*2, redPointsLeaveSize*2);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX*2 - whiteLeaveSize/2 , centerY*2 - 130 );
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 20 ) * Math.PI / 180);  
    section_3_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize*2, whiteLeaveSize*2);
    section_3_ctx.restore();

    angleLeave += 1; 
    
      requestAnimationFrame(animate_section_3);
    
   
}
animate_section_3()

let executeTextSection_3=false

window.addEventListener("scroll", function() {
  const box2Top = parent_section_3_canvas.getBoundingClientRect().top + parent_section_3_canvas.offsetHeight /2;
  const squaresImage=this.document.querySelectorAll('.section_3 > div')
  const imageAnimate=this.document.querySelectorAll('.section_3 > img')
  const canvasVisibility=this.document.querySelector('.section_3 > canvas')
  if (box2Top <= window.innerHeight && box2Top >= 0 && !executeTextSection_3 ) {
    squaresImage[0].classList.add('first_square')
    squaresImage[1].classList.add('second_square')
    imageAnimate[0].classList.add('img_wedding')
    imageAnimate[1].classList.add('section_3--recent_wedding')
    imageAnimate[2].classList.add('img_bg_stain_1')
    imageAnimate[3].classList.add('img_bg_stain_2')
    canvasVisibility.classList.add('canvas_section_3')
    executeTextSection_3=true
    } 
});
// Seccion 4 
const parent_section_4_canvas = document.querySelector('.section_4');
const canvas_section_4 = document.getElementById('section_canvas_4');
const section_4_ctx = canvas_section_4.getContext('2d');


const get_width_section_4 = parent_section_4_canvas.offsetWidth;
const get_height_section_4 = parent_section_4_canvas.offsetHeight;

canvas_section_4.width = get_width_section_4 > 430 ? 430 : get_width_section_4 ;
canvas_section_4.height = get_height_section_4 < 300 ?  870 : get_height_section_4;


function animate_section_4() {
  section_4_ctx.clearRect(0, 0, canvas_section_4.width, canvas_section_4.height);
  let roseCornerSize = 95;
  let roseBorderCircleSize = 80;
  let greenBigLeaveCornerSize = 75;
  let greenBigLeaveSize = 60;
  let littleStickLeaveSize=75;
  let littleStickLeaveCornerSize=70;
  let mediumStickLeaveSize=80;
  let mediumStickLeaveCornerSize=75;
  let whiteLeaveSize=60;
  let whiteLeaveCornerSize=65;
  let tinyLeaveSize=50;
  let tinyLeaveCornerSize=85;
  let redPointsLeaveSize=50;
  // Primera Linea
  section_4_ctx.strokeStyle = '#9b5a01';
  section_4_ctx.lineWidth = 2;  
  section_4_ctx.save();  
  section_4_ctx.translate(0, 100);  
  section_4_ctx.rotate(-13 * Math.PI / 180);  
  section_4_ctx.beginPath();
  section_4_ctx.moveTo(0, 0);
  section_4_ctx.lineTo(650, 0);
  section_4_ctx.stroke();
  section_4_ctx.restore();  

  // Segunda línea
  section_4_ctx.strokeStyle = '#9b5a01';
  section_4_ctx.lineWidth = 2;  
  section_4_ctx.save();  
  section_4_ctx.translate(0, 20);  
  section_4_ctx.rotate(13 * Math.PI / 180);  
  section_4_ctx.beginPath();
  section_4_ctx.moveTo(0, 0);
  section_4_ctx.lineTo(650, 0);
  section_4_ctx.stroke();
  section_4_ctx.restore();  
  // Tercera linea
  section_4_ctx.strokeStyle = '#9b5a01';
  section_4_ctx.lineWidth = 2;  
  section_4_ctx.save();  
  section_4_ctx.translate(0, centerY*2 - 10);  
  section_4_ctx.rotate(-13 * Math.PI / 180);  
  section_4_ctx.beginPath();
  section_4_ctx.moveTo(0, 0);
  section_4_ctx.lineTo(650, 0);
  section_4_ctx.stroke();
  section_4_ctx.restore();  
  //Cuarta Linea
  section_4_ctx.strokeStyle = '#9b5a01';
  section_4_ctx.lineWidth = 2;  
  section_4_ctx.save();  
  section_4_ctx.translate(0, centerY*2 - 140);  
  section_4_ctx.rotate(13 * Math.PI / 180);  
  section_4_ctx.beginPath();
  section_4_ctx.moveTo(0, 0);
  section_4_ctx.lineTo(650, 0);
  section_4_ctx.stroke();
  section_4_ctx.restore();  

  section_4_ctx.save();
  section_4_ctx.translate(centerX + 90, centerY - 110);
  section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 260) * angleRotation + 30 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_4_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
  section_4_ctx.restore();

  section_4_ctx.save();
  section_4_ctx.translate(centerX + 145, centerY - 70);
  section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 100 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_4_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
  section_4_ctx.restore();

  section_4_ctx.save();
  section_4_ctx.translate(centerX + 140, centerY - 90);
  section_4_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 100 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_4_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
  section_4_ctx.restore();

  section_4_ctx.save();
  section_4_ctx.translate(centerX + 70, centerY - 155);
  section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 85 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_4_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
  section_4_ctx.restore();

  section_4_ctx.save();
  section_4_ctx.translate(centerX + 95, centerY - 152);
  section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 85 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_4_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
  section_4_ctx.restore();

  section_4_ctx.save();
  section_4_ctx.translate(centerX + 95, centerY - 152);
  section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 85 ) * Math.PI / 180);  
  section_4_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
  section_4_ctx.restore();

  section_4_ctx.save();
  section_4_ctx.translate(centerX + 95, centerY - 90);
  section_4_ctx.rotate(Math.PI / 2);
  section_4_ctx.drawImage(roseImage, -70, -70, roseBorderCircleSize, roseBorderCircleSize);
  section_4_ctx.restore();

  //Rosa del Lado izquierdo inferior
  section_4_ctx.save();
  section_4_ctx.translate(centerX - 95, centerY + 95);
  section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_4_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
  section_4_ctx.restore();
  
  section_4_ctx.save();
  section_4_ctx.translate(centerX - 150, centerY + 55);
  section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 300 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_4_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
  section_4_ctx.restore();

  section_4_ctx.save();
  section_4_ctx.translate(centerX - 65, centerY + 145);
  section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 260 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_4_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
  section_4_ctx.restore();
  
  section_4_ctx.save();
  section_4_ctx.translate(centerX - 95, centerY + 130);
  section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_4_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
  section_4_ctx.restore();


  section_4_ctx.save();
  section_4_ctx.translate(centerX - 145, centerY + 75);
  section_4_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 300 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_4_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
  section_4_ctx.restore();

  section_4_ctx.save();
  section_4_ctx.translate(centerX - 95, centerY + 130);
  section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_4_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
  section_4_ctx.restore();

  section_4_ctx.save();
  section_4_ctx.translate(centerX - 90, centerY + 90);
  section_4_ctx.rotate(Math.PI * 1.6);
  section_4_ctx.drawImage(roseImage, -70, -70, roseBorderCircleSize, roseBorderCircleSize);
  section_4_ctx.restore();

// Corner rosa
  section_4_ctx.save();
  section_4_ctx.translate(150, 55);
  section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 30 ) * Math.PI / 180);  
  section_4_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
  section_4_ctx.restore();

  section_4_ctx.save();
  section_4_ctx.translate(60, 170);
  section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 140 ) * Math.PI / 180);  
  section_4_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
  section_4_ctx.restore();

  section_4_ctx.save();
  section_4_ctx.translate( 50, 125);
  section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 10 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_4_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
  section_4_ctx.restore();

  section_4_ctx.save();
  section_4_ctx.translate( 90,  145);
  section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 280 ) * Math.PI / 180);  
  section_4_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveCornerSize / 2), -(littleStickLeaveCornerSize / 2), littleStickLeaveCornerSize, littleStickLeaveCornerSize);
  section_4_ctx.restore();

  section_4_ctx.save();
  section_4_ctx.translate(130, 80);
  section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 270 ) * Math.PI / 180);  
  section_4_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveCornerSize / 2), -(tinyLeaveCornerSize / 2), tinyLeaveCornerSize, tinyLeaveCornerSize);
  section_4_ctx.restore();

  section_4_ctx.save();
  section_4_ctx.translate( 100, 60);
  section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_4_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
  section_4_ctx.restore();

  section_4_ctx.save();
  section_4_ctx.translate(120,120);
  section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_4_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
  section_4_ctx.restore();

  section_4_ctx.save();
  section_4_ctx.translate(60, 65 );
  section_4_ctx.rotate((Math.sin((angleLeave) * Math.PI / 280) * angleRotation - 20 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_4_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveCornerSize / 2), -(greenBigLeaveCornerSize / 2), greenBigLeaveCornerSize, greenBigLeaveCornerSize);
  section_4_ctx.restore();

  section_4_ctx.save();
  section_4_ctx.translate( 70, 90);
  section_4_ctx.rotate(Math.PI / 1);
  section_4_ctx.drawImage(roseImage, -(roseCornerSize/2) , -(roseCornerSize/2), roseCornerSize, roseCornerSize);
  section_4_ctx.restore();
  //Rosa Inferior
  section_4_ctx.save();
  section_4_ctx.translate( centerX*2 - 160, centerY*2 - 50);
  section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 230 ) * Math.PI / 180);  
  section_4_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
  section_4_ctx.restore();

  section_4_ctx.save();
  section_4_ctx.translate(centerX*2 - 40, centerY*2 - 150);
  section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 320 ) * Math.PI / 180);  
  section_4_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
  section_4_ctx.restore();

  section_4_ctx.save();
  section_4_ctx.translate(centerX*2 - 140, centerY*2 - 70 );
  section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 80 ) * Math.PI / 180);  
  section_4_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveCornerSize / 2), -(tinyLeaveCornerSize / 2), tinyLeaveCornerSize, tinyLeaveCornerSize);
  section_4_ctx.restore();

  section_4_ctx.save();
  section_4_ctx.translate(centerX*2 - 110, centerY*2 - 40);
  section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 10 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_4_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
  section_4_ctx.restore();

  section_4_ctx.save();
  section_4_ctx.translate( centerX*2 - 90,  centerY*2 - 140) ;
  section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 100 ) * Math.PI / 180);  
  section_4_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveCornerSize / 2), -(littleStickLeaveCornerSize / 2), littleStickLeaveCornerSize, littleStickLeaveCornerSize);
  section_4_ctx.restore();

  section_4_ctx.save();
  section_4_ctx.translate(centerX*2 - 50, centerY*2 - 100);
  section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_4_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
  section_4_ctx.restore();

  section_4_ctx.save();
  section_4_ctx.translate(centerX*2 - 130,  centerY*2 - 120);
  section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 60 ) * Math.PI / 180);  
  section_4_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
  section_4_ctx.restore();

  section_4_ctx.save();
  section_4_ctx.translate(centerX*2 - 55,centerY*2 - 65 );
  section_4_ctx.rotate((Math.sin((angleLeave) * Math.PI / 280) * angleRotation + 140 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_4_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveCornerSize / 2), -(greenBigLeaveCornerSize / 2), greenBigLeaveCornerSize, greenBigLeaveCornerSize);
  section_4_ctx.restore();

  section_4_ctx.save();
  section_4_ctx.translate(centerX*2 - 75, centerY*2 - 80);
  section_4_ctx.rotate(Math.PI * 0.15);
  section_4_ctx.drawImage(roseImage, -(roseCornerSize/2) , -(roseCornerSize/2), roseCornerSize, roseCornerSize);
  section_4_ctx.restore();

    angleLeave += 1; // Incrementar el ángulo para la  animación

    requestAnimationFrame(animate_section_4);
}
animate_section_4();
let executeTextSection_4=false
window.addEventListener("scroll", function() {
  const box2Top = parent_section_4_canvas.getBoundingClientRect().top + parent_section_4_canvas.offsetHeight/2;
  const textAnimate=document.querySelector('.section_4 > p')
  const bothCircles=this.document.querySelectorAll('.section_4 > span')
  const canvasVisibility=this.document.querySelector('.section_4 > canvas')
  const animateImages=this.document.querySelectorAll('.section_4 > img')
  if (box2Top <= window.innerHeight && box2Top >= 0 && !executeTextSection_4) {
    bothCircles[0].classList.add('section_4-outer_circle')
    bothCircles[1].classList.add('section_4-inner_circle')
    textAnimate.classList.add('phrase_bible')
    canvasVisibility.classList.add('scale_section_4')
    animateImages[0].classList.add('img_bg_stain_1')
    animateImages[1].classList.add('img_bg_stain_2')
    executeTextSection_4=true
  }   
});

//Seccion 5
const parent_section_5_canvas = document.querySelector('.section_5');
const canvas_section_5 = document.getElementById('section_canvas_5');
const section_5_ctx = canvas_section_5.getContext('2d');


const get_width_section_5 = parent_section_5_canvas.offsetWidth;
const get_height_section_5 = parent_section_5_canvas.offsetHeight;

canvas_section_5.width = get_width_section_5 > 430 ? 430 : get_width_section_5 ;
canvas_section_5.height = get_height_section_5 < 300 ?  870 :  get_height_section_5 ;
let angleRotationSection5=5;
function animate_section_5() {
  section_5_ctx.clearRect(0, 0, canvas_section_5.width, canvas_section_5.height);
  let greenBigLeaveSize = 55;
  let littleStickLeaveSize=95;
  let mediumStickLeaveSize=90;
  let whiteLeaveSize=50;
  let redPointsLeaveSize=50;
  let roseSize = 65;

  
    section_5_ctx.save();
    section_5_ctx.translate( centerX + 40 ,  70 );
    section_5_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 240 ) * Math.PI / 180);  
    section_5_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_5_ctx.restore();

    section_5_ctx.save();
    section_5_ctx.translate(centerX - 60 , 80 );
    section_5_ctx.rotate((Math.sin(angleLeave * Math.PI / 200) * angleRotation  +  200 ) * Math.PI / 180);  
    section_5_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
    section_5_ctx.restore();

    section_5_ctx.save();
    section_5_ctx.translate(centerX - 25 , 60 )
    section_5_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 220 ) * Math.PI / 180);  
    section_5_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
    section_5_ctx.restore(); 

    section_5_ctx.save();
    section_5_ctx.translate( centerX + 30 , 60 );
    section_5_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 180 ) * Math.PI / 180);  
    section_5_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
    section_5_ctx.restore();

    section_5_ctx.save();
    section_5_ctx.translate(centerX + 30 ,  45 );
    section_5_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 180 ) * Math.PI / 180);  
    section_5_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize,redPointsLeaveSize);
    section_5_ctx.restore();

    section_5_ctx.save();
    section_5_ctx.translate(centerX  , 60 );
    section_5_ctx.rotate(Math.PI * 2.4);
    section_5_ctx.drawImage(roseImage, -roseSize/2, -roseSize/2, roseSize,roseSize);
    section_5_ctx.restore();
    // Rosa inferior
    section_5_ctx.save();
    section_5_ctx.translate( centerX - 40 , centerY*2 - 70 );
    section_5_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 60 ) * Math.PI / 180);  
    section_5_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_5_ctx.restore();

    section_5_ctx.save();
    section_5_ctx.translate(centerX + 60 ,centerY*2 - 80 );
    section_5_ctx.rotate((Math.sin(angleLeave * Math.PI / 200) * angleRotation  +  20 ) * Math.PI / 180);  
    section_5_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
    section_5_ctx.restore();

    section_5_ctx.save();
    section_5_ctx.translate(centerX + 25 ,centerY*2 - 60 )
    section_5_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 20 ) * Math.PI / 180);  
    section_5_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
    section_5_ctx.restore(); 

    section_5_ctx.save();
    section_5_ctx.translate( centerX - 30 ,centerY*2 - 60 );
    section_5_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 10 ) * Math.PI / 180);  
    section_5_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
    section_5_ctx.restore();

    section_5_ctx.save();
    section_5_ctx.translate(centerX - 30 ,centerY*2 -  45 );
    section_5_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 10 ) * Math.PI / 180);  
    section_5_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize,redPointsLeaveSize);
    section_5_ctx.restore();

    section_5_ctx.save();
    section_5_ctx.translate(centerX  , centerY*2 - 60 );
    section_5_ctx.rotate(Math.PI * 1.2);
    section_5_ctx.drawImage(roseImage, -roseSize/2, -roseSize/2, roseSize,roseSize);
    section_5_ctx.restore();

    angleLeave += 0.1; 

    requestAnimationFrame(animate_section_5);
}
animate_section_5()


let executeTextSection_5=false
window.addEventListener("scroll", function() {
  const box2Top = parent_section_5_canvas.getBoundingClientRect().top + parent_section_5_canvas.offsetHeight/2;
  const canvasVisibility=this.document.querySelector('.section_5 > canvas')
  const sectionVisibility=this.document.querySelector('.section_5 > section')
  const animateImages=this.document.querySelectorAll('.section_5 > img')
  if (box2Top <= window.innerHeight && box2Top >= 0 && !executeTextSection_5) {
   animateImages[0].classList.add('img_bg_stain_1')
   animateImages[1].classList.add('img_bg_stain_2')
   sectionVisibility.classList.add('scale_section_5')
   canvasVisibility.classList.add('canvas_section_3')
   executeTextSection_5=true
  }   
});

// Seccion 6
const parent_section_6_canvas = document.querySelector('.section_6');
const canvas_section_6 = document.getElementById('section_canvas_6');
const section_6_ctx = canvas_section_6.getContext('2d');


const get_width_section_6 = parent_section_6_canvas.offsetWidth ;
const get_height_section_6 = parent_section_6_canvas.offsetHeight ;

canvas_section_6.width = get_width_section_6 > 430 ? 430 : get_width_section_6;
canvas_section_6.height = get_height_section_6 < 300 ?  870 : get_height_section_6 ;


function animate_section_6() {
  section_6_ctx.clearRect(0, 0, canvas_section_6.width, canvas_section_6.height);
  let roseCornerSize = 100;
    let greenBigLeaveCornerSize = 80;
    let littleStickLeaveCornerSize=75;
    let mediumStickLeaveCornerSize=80;
    let whiteLeaveCornerSize=70;
    let tinyLeaveCornerSize=90;
    let redPointsLeaveSize=60;
    // Primera Linea
    section_6_ctx.strokeStyle = '#9b5a01';
    section_6_ctx.lineWidth = 2;  
    section_6_ctx.save();  
    section_6_ctx.translate(0, 150);  
    section_6_ctx.rotate(-13 * Math.PI / 180);  
    section_6_ctx.beginPath();
    section_6_ctx.moveTo(0, 0);
    section_6_ctx.lineTo(650, 0);
    section_6_ctx.stroke();
    section_6_ctx.restore();  

    // Segunda línea
    section_6_ctx.strokeStyle = '#9b5a01';
    section_6_ctx.lineWidth = 2;  
    section_6_ctx.save();  
    section_6_ctx.translate(0, 40);  
    section_6_ctx.rotate(13 * Math.PI / 180);  
    section_6_ctx.beginPath();
    section_6_ctx.moveTo(0, 0);
    section_6_ctx.lineTo(650, 0);
    section_6_ctx.stroke();
    section_6_ctx.restore();  
    // Tercera linea
    section_6_ctx.strokeStyle = '#9b5a01';
    section_6_ctx.lineWidth = 2;  
    section_6_ctx.save();  
    section_6_ctx.translate(0, centerY*2 - 20);  
    section_6_ctx.rotate(-13 * Math.PI / 180);  
    section_6_ctx.beginPath();
    section_6_ctx.moveTo(0, 0);
    section_6_ctx.lineTo(650, 0);
    section_6_ctx.stroke();
    section_6_ctx.restore();  
    //Cuarta Linea
    section_6_ctx.strokeStyle = '#9b5a01';
    section_6_ctx.lineWidth = 2;  
    section_6_ctx.save();  
    section_6_ctx.translate(0, centerY*2 - 150);  
    section_6_ctx.rotate(13 * Math.PI / 180);  
    section_6_ctx.beginPath();
    section_6_ctx.moveTo(0, 0);
    section_6_ctx.lineTo(650, 0);
    section_6_ctx.stroke();
    section_6_ctx.restore();  
    //Rosa Esquina
    section_6_ctx.save();
    section_6_ctx.translate(150, 85);
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 30 ) * Math.PI / 180);  
    section_6_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(60, 200);
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 140 ) * Math.PI / 180);  
    section_6_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate( 40, 150);
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 10 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_6_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate( 90,  175);
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 280 ) * Math.PI / 180);  
    section_6_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveCornerSize / 2), -(littleStickLeaveCornerSize / 2), littleStickLeaveCornerSize, littleStickLeaveCornerSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(130, 110);
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 270 ) * Math.PI / 180);  
    section_6_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveCornerSize / 2), -(tinyLeaveCornerSize / 2), tinyLeaveCornerSize, tinyLeaveCornerSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate( 100, 90);
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_6_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(120,150);
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_6_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(60, 95 );
    section_6_ctx.rotate((Math.sin((angleLeave) * Math.PI / 280) * angleRotation - 20 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_6_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveCornerSize / 2), -(greenBigLeaveCornerSize / 2), greenBigLeaveCornerSize, greenBigLeaveCornerSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate( 70, 120);
    section_6_ctx.rotate(Math.PI / 1);
    section_6_ctx.drawImage(roseImage, -(roseCornerSize/2) , -(roseCornerSize/2), roseCornerSize, roseCornerSize);
    section_6_ctx.restore();
    //Rosa Inferior
    section_6_ctx.save();
    section_6_ctx.translate( centerX*2 - 160, centerY*2 - 80);
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 230 ) * Math.PI / 180);  
    section_6_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(centerX*2 - 40, centerY*2 - 180);
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 320 ) * Math.PI / 180);  
    section_6_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(centerX*2 - 140, centerY*2 - 100 );
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 80 ) * Math.PI / 180);  
    section_6_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveCornerSize / 2), -(tinyLeaveCornerSize / 2), tinyLeaveCornerSize, tinyLeaveCornerSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(centerX*2 - 110, centerY*2 - 70);
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 10 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_6_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate( centerX*2 - 90,  centerY*2 - 170) ;
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 100 ) * Math.PI / 180);  
    section_6_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveCornerSize / 2), -(littleStickLeaveCornerSize / 2), littleStickLeaveCornerSize, littleStickLeaveCornerSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(centerX*2 - 50, centerY*2 - 130);
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_6_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(centerX*2 - 130,  centerY*2 - 150);
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 60 ) * Math.PI / 180);  
    section_6_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(centerX*2 - 55,centerY*2 - 95 );
    section_6_ctx.rotate((Math.sin((angleLeave) * Math.PI / 280) * angleRotation + 140 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_6_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveCornerSize / 2), -(greenBigLeaveCornerSize / 2), greenBigLeaveCornerSize, greenBigLeaveCornerSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(centerX*2 - 75, centerY*2 - 110);
    section_6_ctx.rotate(Math.PI * 0.15);
    section_6_ctx.drawImage(roseImage, -(roseCornerSize/2) , -(roseCornerSize/2), roseCornerSize, roseCornerSize);
    section_6_ctx.restore();
   

    angleLeave += 1; 
    
      requestAnimationFrame(animate_section_6);
    
   
}
animate_section_6()     


let executeTextSection_6=false
window.addEventListener("scroll", function() {
  const box2Top = parent_section_6_canvas.getBoundingClientRect().top + parent_section_6_canvas.offsetHeight/2;
  const animateCanvas=this.document.querySelector('.section_6 > canvas')
  const imageAnimate=this.document.querySelectorAll('.section_6 > img')
  const imageInvitationAnimate=this.document.querySelector('.section_6 > section > img')
  if (box2Top <= window.innerHeight && box2Top >= 0 && !executeTextSection_6) {
   imageAnimate[0].classList.add('img_bg_stain_1')
   imageAnimate[1].classList.add('img_bg_stain_2')
   animateCanvas.classList.add('scale_section_6')
   imageInvitationAnimate.classList.add('scale_section_6')
   executeTextSection_6=true
  }   
});
// Seccion 7
const parent_section_7_canvas = document.querySelector('.section_7');
const canvas_section_7 = document.getElementById('section_canvas_7');
const section_7_ctx = canvas_section_7.getContext('2d');


const get_width_section_7 = parent_section_7_canvas.offsetWidth;
const get_height_section_7 = parent_section_7_canvas.offsetHeight ;

canvas_section_7.width = get_width_section_7  > 430 ? 430 : get_width_section_7 ;
canvas_section_7.height = get_height_section_7 < 300 ?   870 : get_height_section_7; 
let angleRotationSection_7=3
function animate_section_7(){
  section_7_ctx.clearRect(0, 0, canvas_section_7.width, canvas_section_7.height);
  let greenBigLeaveSize = 55;
  let littleStickLeaveSize=95;
  let mediumStickLeaveSize=90;
  let whiteLeaveSize=50;
  let redPointsLeaveSize=50;
  let roseSize = 65;

  
    section_7_ctx.save();
    section_7_ctx.translate( centerX + 40 ,  80 );
    section_7_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 240 ) * Math.PI / 180);  
    section_7_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_7_ctx.restore();

    section_7_ctx.save();
    section_7_ctx.translate(centerX - 60 , 90 );
    section_7_ctx.rotate((Math.sin(angleLeave * Math.PI / 200) * angleRotation  +  200 ) * Math.PI / 180);  
    section_7_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
    section_7_ctx.restore();

    section_7_ctx.save();
    section_7_ctx.translate(centerX - 25 , 70 )
    section_7_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 220 ) * Math.PI / 180);  
    section_7_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
    section_7_ctx.restore(); 

    section_7_ctx.save();
    section_7_ctx.translate( centerX + 30 , 70 );
    section_7_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 180 ) * Math.PI / 180);  
    section_7_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
    section_7_ctx.restore();

    section_7_ctx.save();
    section_7_ctx.translate(centerX + 30 ,  55 );
    section_7_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 180 ) * Math.PI / 180);  
    section_7_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize,redPointsLeaveSize);
    section_7_ctx.restore();

    section_7_ctx.save();
    section_7_ctx.translate(centerX  , 70 );
    section_7_ctx.rotate(Math.PI * 2.4);
    section_7_ctx.drawImage(roseImage, -roseSize/2, -roseSize/2, roseSize,roseSize);
    section_7_ctx.restore();
    // Rosa inferior
    section_7_ctx.save();
    section_7_ctx.translate( centerX - 40 , centerY*2 - 80 );
    section_7_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 60 ) * Math.PI / 180);  
    section_7_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_7_ctx.restore();

    section_7_ctx.save();
    section_7_ctx.translate(centerX + 60 ,centerY*2 - 90 );
    section_7_ctx.rotate((Math.sin(angleLeave * Math.PI / 200) * angleRotation  +  20 ) * Math.PI / 180);  
    section_7_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
    section_7_ctx.restore();

    section_7_ctx.save();
    section_7_ctx.translate(centerX + 25 ,centerY*2 - 70 )
    section_7_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 20 ) * Math.PI / 180);  
    section_7_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
    section_7_ctx.restore(); 

    section_7_ctx.save();
    section_7_ctx.translate( centerX - 30 ,centerY*2 - 70 );
    section_7_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 10 ) * Math.PI / 180);  
    section_7_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
    section_7_ctx.restore();

    section_7_ctx.save();
    section_7_ctx.translate(centerX - 30 ,centerY*2 -  55 );
    section_7_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 10 ) * Math.PI / 180);  
    section_7_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize,redPointsLeaveSize);
    section_7_ctx.restore();

    section_7_ctx.save();
    section_7_ctx.translate(centerX  , centerY*2 - 70 );
    section_7_ctx.rotate(Math.PI * 1.2);
    section_7_ctx.drawImage(roseImage, -roseSize/2, -roseSize/2, roseSize,roseSize);
    section_7_ctx.restore();


  requestAnimationFrame(animate_section_7)
}
animate_section_7()
let executeTextSection_7= false
window.addEventListener("scroll", function() {
  const box2Top = parent_section_7_canvas.getBoundingClientRect().top + parent_section_7_canvas.offsetHeight/2;
  const animateSection=this.document.querySelector('.section_7 > section')
  const animateCanvas=this.document.querySelector('.section_7 > canvas')
  const animateImages=this.document.querySelectorAll('.section_7 > img')
  if (box2Top <= window.innerHeight && box2Top >= 0 && !executeTextSection_7) {
   animateSection.classList.add('scale_section_5')
   animateCanvas.classList.add('canvas_section_3')
   animateImages[0].classList.add('img_bg_stain_1')
   animateImages[1].classList.add('img_bg_stain_2')
   executeTextSection_7=true
  }   
});

//Seccion 8
const parent_section_8_canvas = document.querySelector('.section_8');
const canvas_section_8 = document.getElementById('section_canvas_8');
const section_8_ctx = canvas_section_8.getContext('2d');


const get_width_section_8 = parent_section_8_canvas.offsetWidth ;
const get_height_section_8 = parent_section_8_canvas.offsetHeight ;

canvas_section_8.width = get_width_section_8 > 430 ? 430 : get_width_section_8;
canvas_section_8.height = get_height_section_8 < 300 ?  870 : get_height_section_8;

function animate_section_8(){
  section_8_ctx.clearRect(0, 0, canvas_section_8.width, canvas_section_8.height);
  let roseCornerSize = 100;
  let greenBigLeaveCornerSize = 75;
  let littleStickLeaveCornerSize=85;
  let mediumStickLeaveCornerSize=80;
  let whiteLeaveCornerSize=70;
  let tinyLeaveCornerSize=80;
  let redPointsLeaveSize=60;
  // Primera Linea
  section_8_ctx.strokeStyle = '#9b5a01';
  section_8_ctx.lineWidth = 2;  
  section_8_ctx.save();  
  section_8_ctx.translate(0, 100);  
  section_8_ctx.rotate(-13 * Math.PI / 180);  
  section_8_ctx.beginPath();
  section_8_ctx.moveTo(0, 0);
  section_8_ctx.lineTo(650, 0);
  section_8_ctx.stroke();
  section_8_ctx.restore();  

  // Segunda línea
  section_8_ctx.strokeStyle = '#9b5a01';
  section_8_ctx.lineWidth = 2;  
  section_8_ctx.save();  
  section_8_ctx.translate(0, 20);  
  section_8_ctx.rotate(13 * Math.PI / 180);  
  section_8_ctx.beginPath();
  section_8_ctx.moveTo(0, 0);
  section_8_ctx.lineTo(650, 0);
  section_8_ctx.stroke();
  section_8_ctx.restore();  
  // Tercera linea
  section_8_ctx.strokeStyle = '#9b5a01';
  section_8_ctx.lineWidth = 2;  
  section_8_ctx.save();  
  section_8_ctx.translate(0, centerY*2 - 10);  
  section_8_ctx.rotate(-13 * Math.PI / 180);  
  section_8_ctx.beginPath();
  section_8_ctx.moveTo(0, 0);
  section_8_ctx.lineTo(650, 0);
  section_8_ctx.stroke();
  section_8_ctx.restore();  
  //Cuarta Linea
  section_8_ctx.strokeStyle = '#9b5a01';
  section_8_ctx.lineWidth = 2;  
  section_8_ctx.save();  
  section_8_ctx.translate(0, centerY*2 - 140);  
  section_8_ctx.rotate(13 * Math.PI / 180);  
  section_8_ctx.beginPath();
  section_8_ctx.moveTo(0, 0);
  section_8_ctx.lineTo(650, 0);
  section_8_ctx.stroke();
  section_8_ctx.restore();  
  //Rosa Esquina
  section_8_ctx.save();
    section_8_ctx.translate(150, 55);
    section_8_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 30 ) * Math.PI / 180);  
    section_8_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_8_ctx.restore();

    section_8_ctx.save();
    section_8_ctx.translate(60, 170);
    section_8_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 140 ) * Math.PI / 180);  
    section_8_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_8_ctx.restore();

    section_8_ctx.save();
    section_8_ctx.translate( 50, 125);
    section_8_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 10 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_8_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_8_ctx.restore();

    section_8_ctx.save();
    section_8_ctx.translate( 90,  145);
    section_8_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 280 ) * Math.PI / 180);  
    section_8_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveCornerSize / 2), -(littleStickLeaveCornerSize / 2), littleStickLeaveCornerSize, littleStickLeaveCornerSize);
    section_8_ctx.restore();

    section_8_ctx.save();
    section_8_ctx.translate(130, 80);
    section_8_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 270 ) * Math.PI / 180);  
    section_8_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveCornerSize / 2), -(tinyLeaveCornerSize / 2), tinyLeaveCornerSize, tinyLeaveCornerSize);
    section_8_ctx.restore();

    section_8_ctx.save();
    section_8_ctx.translate( 100, 60);
    section_8_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_8_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_8_ctx.restore();

    section_8_ctx.save();
    section_8_ctx.translate(120,120);
    section_8_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_8_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_8_ctx.restore();

    section_8_ctx.save();
    section_8_ctx.translate(60, 65 );
    section_8_ctx.rotate((Math.sin((angleLeave) * Math.PI / 280) * angleRotation - 20 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_8_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveCornerSize / 2), -(greenBigLeaveCornerSize / 2), greenBigLeaveCornerSize, greenBigLeaveCornerSize);
    section_8_ctx.restore();

    section_8_ctx.save();
    section_8_ctx.translate( 70, 90);
    section_8_ctx.rotate(Math.PI / 1);
    section_8_ctx.drawImage(roseImage, -(roseCornerSize/2) , -(roseCornerSize/2), roseCornerSize, roseCornerSize);
    section_8_ctx.restore();
    //Rosa Inferior
    section_8_ctx.save();
    section_8_ctx.translate( centerX*2 - 160, centerY*2 - 50);
    section_8_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 230 ) * Math.PI / 180);  
    section_8_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_8_ctx.restore();

    section_8_ctx.save();
    section_8_ctx.translate(centerX*2 - 40, centerY*2 - 150);
    section_8_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 320 ) * Math.PI / 180);  
    section_8_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_8_ctx.restore();

    section_8_ctx.save();
    section_8_ctx.translate(centerX*2 - 140, centerY*2 - 70 );
    section_8_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 80 ) * Math.PI / 180);  
    section_8_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveCornerSize / 2), -(tinyLeaveCornerSize / 2), tinyLeaveCornerSize, tinyLeaveCornerSize);
    section_8_ctx.restore();

    section_8_ctx.save();
    section_8_ctx.translate(centerX*2 - 110, centerY*2 - 40);
    section_8_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 10 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_8_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_8_ctx.restore();

    section_8_ctx.save();
    section_8_ctx.translate( centerX*2 - 90,  centerY*2 - 140) ;
    section_8_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 100 ) * Math.PI / 180);  
    section_8_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveCornerSize / 2), -(littleStickLeaveCornerSize / 2), littleStickLeaveCornerSize, littleStickLeaveCornerSize);
    section_8_ctx.restore();

    section_8_ctx.save();
    section_8_ctx.translate(centerX*2 - 50, centerY*2 - 100);
    section_8_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_8_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_8_ctx.restore();

    section_8_ctx.save();
    section_8_ctx.translate(centerX*2 - 130,  centerY*2 - 120);
    section_8_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 60 ) * Math.PI / 180);  
    section_8_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_8_ctx.restore();

    section_8_ctx.save();
    section_8_ctx.translate(centerX*2 - 55,centerY*2 - 65 );
    section_8_ctx.rotate((Math.sin((angleLeave) * Math.PI / 280) * angleRotation + 140 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_8_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveCornerSize / 2), -(greenBigLeaveCornerSize / 2), greenBigLeaveCornerSize, greenBigLeaveCornerSize);
    section_8_ctx.restore();

    section_8_ctx.save();
    section_8_ctx.translate(centerX*2 - 75, centerY*2 - 80);
    section_8_ctx.rotate(Math.PI * 0.15);
    section_8_ctx.drawImage(roseImage, -(roseCornerSize/2) , -(roseCornerSize/2), roseCornerSize, roseCornerSize);
    section_8_ctx.restore();

  requestAnimationFrame(animate_section_8)
}
animate_section_8()
let executeTextSection_8=false
window.addEventListener("scroll", function() {
  const box2Top = parent_section_8_canvas.getBoundingClientRect().top + parent_section_8_canvas.offsetHeight/2;
  const animateSection=this.document.querySelector('.section_8 > section')
  const animateCanvas=this.document.querySelector('.section_8 > canvas')
  const animateImages=this.document.querySelectorAll('.section_8 > img')
  if (box2Top <= window.innerHeight && box2Top >= 0 ) {
   animateSection.classList.add('scale_section_8')
   animateCanvas.classList.add('scale_section_8_canvas')
   animateImages[0].classList.add('img_bg_stain_1')
   animateImages[1].classList.add('img_bg_stain_2')
   executeTextSection_8=true
  }   
});
//Seccion 9
const parent_section_9_canvas = document.querySelector('.section_9');
const canvas_section_9 = document.getElementById('section_canvas_9');
const section_9_ctx = canvas_section_9.getContext('2d');


const get_width_section_9 = parent_section_9_canvas.offsetWidth ;
const get_height_section_9 = parent_section_9_canvas.offsetHeight ;

canvas_section_9.width = get_width_section_9 > 430 ? 430 : get_width_section_9 ;
canvas_section_9.height = get_height_section_9 < 300 ?  870 : get_height_section_9 ;

function animate_section_9(){
  section_9_ctx.clearRect(0, 0, canvas_section_9.width, canvas_section_9.height);
  let greenBigLeaveSize = 55;
  let littleStickLeaveSize=95;
  let mediumStickLeaveSize=90;
  let whiteLeaveSize=50;
  let redPointsLeaveSize=50;
  let roseSize = 65;

  
    section_9_ctx.save();
    section_9_ctx.translate( centerX + 40 ,  70 );
    section_9_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 240 ) * Math.PI / 180);  
    section_9_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_9_ctx.restore();

    section_9_ctx.save();
    section_9_ctx.translate(centerX - 60 , 80 );
    section_9_ctx.rotate((Math.sin(angleLeave * Math.PI / 200) * angleRotation  +  200 ) * Math.PI / 180);  
    section_9_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
    section_9_ctx.restore();

    section_9_ctx.save();
    section_9_ctx.translate(centerX - 25 , 60 )
    section_9_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 220 ) * Math.PI / 180);  
    section_9_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
    section_9_ctx.restore(); 

    section_9_ctx.save();
    section_9_ctx.translate( centerX + 30 , 60 );
    section_9_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 180 ) * Math.PI / 180);  
    section_9_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
    section_9_ctx.restore();

    section_9_ctx.save();
    section_9_ctx.translate(centerX + 30 ,  45 );
    section_9_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 180 ) * Math.PI / 180);  
    section_9_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize,redPointsLeaveSize);
    section_9_ctx.restore();

    section_9_ctx.save();
    section_9_ctx.translate(centerX  , 60 );
    section_9_ctx.rotate(Math.PI * 2.4);
    section_9_ctx.drawImage(roseImage, -roseSize/2, -roseSize/2, roseSize,roseSize);
    section_9_ctx.restore();
    // Rosa inferior
    section_9_ctx.save();
    section_9_ctx.translate( centerX - 40 , centerY*2 - 70 );
    section_9_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 60 ) * Math.PI / 180);  
    section_9_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_9_ctx.restore();

    section_9_ctx.save();
    section_9_ctx.translate(centerX + 60 ,centerY*2 - 80 );
    section_9_ctx.rotate((Math.sin(angleLeave * Math.PI / 200) * angleRotation  +  20 ) * Math.PI / 180);  
    section_9_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
    section_9_ctx.restore();

    section_9_ctx.save();
    section_9_ctx.translate(centerX + 25 ,centerY*2 - 60 )
    section_9_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 20 ) * Math.PI / 180);  
    section_9_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
    section_9_ctx.restore(); 

    section_9_ctx.save();
    section_9_ctx.translate( centerX - 30 ,centerY*2 - 60 );
    section_9_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 10 ) * Math.PI / 180);  
    section_9_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
    section_9_ctx.restore();

    section_9_ctx.save();
    section_9_ctx.translate(centerX - 30 ,centerY*2 -  45 );
    section_9_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 10 ) * Math.PI / 180);  
    section_9_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize,redPointsLeaveSize);
    section_9_ctx.restore();

    section_9_ctx.save();
    section_9_ctx.translate(centerX  , centerY*2 - 60 );
    section_9_ctx.rotate(Math.PI * 1.2);
    section_9_ctx.drawImage(roseImage, -roseSize/2, -roseSize/2, roseSize,roseSize);
    section_9_ctx.restore();

  
  requestAnimationFrame(animate_section_9)
}
animate_section_9()
let executeTextSection_9=false
window.addEventListener("scroll", function() {
  const box2Top = parent_section_9_canvas.getBoundingClientRect().top + parent_section_9_canvas.offsetHeight/2;
  const animateSection=this.document.querySelector('.section_9 > section')
  const animateCanvas=this.document.querySelector('.section_9 > canvas') 
  const animateImages=this.document.querySelectorAll('.section_9 > img')
  if (box2Top <= window.innerHeight && box2Top >= 0 && !executeTextSection_9) {
   animateCanvas.classList.add('animate_section_9_canvas')
   animateSection.classList.add('animate_section_9') 
   animateImages[0].classList.add('img_bg_stain_1')
   animateImages[1].classList.add('img_bg_stain_2')
   executeTextSection_9=true
  }   
});
//Seccion 10
const parent_section_10_canvas = document.querySelector('.section_10');
const canvas_section_10 = document.getElementById('section_canvas_10');
const section_10_ctx = canvas_section_10.getContext('2d');


const get_width_section_10 = parent_section_10_canvas.offsetWidth ;
const get_height_section_10 = parent_section_10_canvas.offsetHeight ;

canvas_section_10.width = get_width_section_10 > 430 ? 430 : get_width_section_10 ;
canvas_section_10.height = get_height_section_10 < 300 ?  870 : get_height_section_10 ;
function animate_section_10(){
  section_10_ctx.clearRect(0, 0, canvas_section_10.width, canvas_section_10.height);
  let roseCornerSize = 95;
    let roseBorderCircleSize = 75;
    let greenBigLeaveCornerSize = 75;
    let greenBigLeaveSize = 60;
    let littleStickLeaveSize=75;
    let littleStickLeaveCornerSize=70;
    let mediumStickLeaveSize=80;
    let mediumStickLeaveCornerSize=75;
    let whiteLeaveSize=60;
    let whiteLeaveCornerSize=65;
    let tinyLeaveSize=50;
    let tinyLeaveCornerSize=80;
    let redPointsLeaveSize=60;
    
    section_10_ctx.strokeStyle = '#9b5a01';
    section_10_ctx.lineWidth = 2;  
    section_10_ctx.save();  
    section_10_ctx.translate(0, 100);  
    section_10_ctx.rotate(-13 * Math.PI / 180);  
    section_10_ctx.beginPath();
    section_10_ctx.moveTo(0, 0);
    section_10_ctx.lineTo(650, 0);
    section_10_ctx.stroke();
    section_10_ctx.restore();  
  
    // Segunda línea
    section_10_ctx.strokeStyle = '#9b5a01';
    section_10_ctx.lineWidth = 2;  
    section_10_ctx.save();  
    section_10_ctx.translate(0, 20);  
    section_10_ctx.rotate(13 * Math.PI / 180);  
    section_10_ctx.beginPath();
    section_10_ctx.moveTo(0, 0);
    section_10_ctx.lineTo(650, 0);
    section_10_ctx.stroke();
    section_10_ctx.restore();  
    // Tercera linea
    section_10_ctx.strokeStyle = '#9b5a01';
    section_10_ctx.lineWidth = 2;  
    section_10_ctx.save();  
    section_10_ctx.translate(0, centerY*2 - 10);  
    section_10_ctx.rotate(-13 * Math.PI / 180);  
    section_10_ctx.beginPath();
    section_10_ctx.moveTo(0, 0);
    section_10_ctx.lineTo(650, 0);
    section_10_ctx.stroke();
    section_10_ctx.restore();  
    //Cuarta Linea
    section_10_ctx.strokeStyle = '#9b5a01';
    section_10_ctx.lineWidth = 2;  
    section_10_ctx.save();  
    section_10_ctx.translate(0, centerY*2 - 140);  
    section_10_ctx.rotate(13 * Math.PI / 180);  
    section_10_ctx.beginPath();
    section_10_ctx.moveTo(0, 0);
    section_10_ctx.lineTo(650, 0);
    section_10_ctx.stroke();
    section_10_ctx.restore();  
    
    section_10_ctx.save();
    section_10_ctx.translate(centerX + 90, centerY - 110);
    section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 260) * angleRotation + 30 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_10_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
    section_10_ctx.restore();

    section_10_ctx.save();
    section_10_ctx.translate(centerX + 145, centerY - 70);
    section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 100 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_10_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
    section_10_ctx.restore();

    section_10_ctx.save();
    section_10_ctx.translate(centerX + 140, centerY - 90);
    section_10_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 100 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_10_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
    section_10_ctx.restore();

    section_10_ctx.save();
    section_10_ctx.translate(centerX + 70, centerY - 155);
    section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 85 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_10_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_10_ctx.restore();

    section_10_ctx.save();
    section_10_ctx.translate(centerX + 95, centerY - 152);
    section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 85 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_10_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
    section_10_ctx.restore();

    section_10_ctx.save();
    section_10_ctx.translate(centerX + 95, centerY - 152);
    section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 85 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_10_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_10_ctx.restore();

    section_10_ctx.save();
    section_10_ctx.translate(centerX + 95, centerY - 90);
    section_10_ctx.rotate(Math.PI / 2);
    section_10_ctx.drawImage(roseImage, -70, -70, roseBorderCircleSize, roseBorderCircleSize);
    section_10_ctx.restore();

    //Rosa del Lado izquierdo inferior
    section_10_ctx.save();
    section_10_ctx.translate(centerX - 95, centerY + 95);
    section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_10_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
    section_10_ctx.restore();
    
    section_10_ctx.save();
    section_10_ctx.translate(centerX - 150, centerY + 55);
    section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 300 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_10_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
    section_10_ctx.restore();

    section_10_ctx.save();
    section_10_ctx.translate(centerX - 65, centerY + 145);
    section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 260 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_10_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_10_ctx.restore();
    
    section_10_ctx.save();
    section_10_ctx.translate(centerX - 95, centerY + 130);
    section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_10_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
    section_10_ctx.restore();


    section_10_ctx.save();
    section_10_ctx.translate(centerX - 145, centerY + 75);
    section_10_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 300 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_10_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
    section_10_ctx.restore();

    section_10_ctx.save();
    section_10_ctx.translate(centerX - 95, centerY + 130);
    section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_10_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_10_ctx.restore();

    section_10_ctx.save();
    section_10_ctx.translate(centerX - 90, centerY + 90);
    section_10_ctx.rotate(Math.PI * 1.6);
    section_10_ctx.drawImage(roseImage, -70, -70, roseBorderCircleSize, roseBorderCircleSize);
    section_10_ctx.restore();

// Corner rosa
section_10_ctx.save();
    section_10_ctx.translate(150, 55);
    section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 30 ) * Math.PI / 180);  
    section_10_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_10_ctx.restore();

    section_10_ctx.save();
    section_10_ctx.translate(60, 170);
    section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 140 ) * Math.PI / 180);  
    section_10_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_10_ctx.restore();

    section_10_ctx.save();
    section_10_ctx.translate( 50, 125);
    section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 10 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_10_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_10_ctx.restore();

    section_10_ctx.save();
    section_10_ctx.translate( 90,  145);
    section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 280 ) * Math.PI / 180);  
    section_10_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveCornerSize / 2), -(littleStickLeaveCornerSize / 2), littleStickLeaveCornerSize, littleStickLeaveCornerSize);
    section_10_ctx.restore();

    section_10_ctx.save();
    section_10_ctx.translate(130, 80);
    section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 270 ) * Math.PI / 180);  
    section_10_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveCornerSize / 2), -(tinyLeaveCornerSize / 2), tinyLeaveCornerSize, tinyLeaveCornerSize);
    section_10_ctx.restore();

    section_10_ctx.save();
    section_10_ctx.translate( 100, 60);
    section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_10_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_10_ctx.restore();

    section_10_ctx.save();
    section_10_ctx.translate(120,120);
    section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_10_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_10_ctx.restore();

    section_10_ctx.save();
    section_10_ctx.translate(60, 65 );
    section_10_ctx.rotate((Math.sin((angleLeave) * Math.PI / 280) * angleRotation - 20 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_10_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveCornerSize / 2), -(greenBigLeaveCornerSize / 2), greenBigLeaveCornerSize, greenBigLeaveCornerSize);
    section_10_ctx.restore();

    section_10_ctx.save();
    section_10_ctx.translate( 70, 90);
    section_10_ctx.rotate(Math.PI / 1);
    section_10_ctx.drawImage(roseImage, -(roseCornerSize/2) , -(roseCornerSize/2), roseCornerSize, roseCornerSize);
    section_10_ctx.restore();
    //Rosa Inferior
    section_10_ctx.save();
    section_10_ctx.translate( centerX*2 - 160, centerY*2 - 50);
    section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 230 ) * Math.PI / 180);  
    section_10_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_10_ctx.restore();

    section_10_ctx.save();
    section_10_ctx.translate(centerX*2 - 40, centerY*2 - 150);
    section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 320 ) * Math.PI / 180);  
    section_10_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_10_ctx.restore();

    section_10_ctx.save();
    section_10_ctx.translate(centerX*2 - 140, centerY*2 - 70 );
    section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 80 ) * Math.PI / 180);  
    section_10_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveCornerSize / 2), -(tinyLeaveCornerSize / 2), tinyLeaveCornerSize, tinyLeaveCornerSize);
    section_10_ctx.restore();

    section_10_ctx.save();
    section_10_ctx.translate(centerX*2 - 110, centerY*2 - 40);
    section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 10 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_10_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_10_ctx.restore();

    section_10_ctx.save();
    section_10_ctx.translate( centerX*2 - 90,  centerY*2 - 140) ;
    section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 100 ) * Math.PI / 180);  
    section_10_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveCornerSize / 2), -(littleStickLeaveCornerSize / 2), littleStickLeaveCornerSize, littleStickLeaveCornerSize);
    section_10_ctx.restore();

    section_10_ctx.save();
    section_10_ctx.translate(centerX*2 - 50, centerY*2 - 100);
    section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_10_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_10_ctx.restore();

    section_10_ctx.save();
    section_10_ctx.translate(centerX*2 - 130,  centerY*2 - 120);
    section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 60 ) * Math.PI / 180);  
    section_10_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_10_ctx.restore();

    section_10_ctx.save();
    section_10_ctx.translate(centerX*2 - 55,centerY*2 - 65 );
    section_10_ctx.rotate((Math.sin((angleLeave) * Math.PI / 280) * angleRotation + 140 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_10_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveCornerSize / 2), -(greenBigLeaveCornerSize / 2), greenBigLeaveCornerSize, greenBigLeaveCornerSize);
    section_10_ctx.restore();

    section_10_ctx.save();
    section_10_ctx.translate(centerX*2 - 75, centerY*2 - 80);
    section_10_ctx.rotate(Math.PI * 0.15);
    section_10_ctx.drawImage(roseImage, -(roseCornerSize/2) , -(roseCornerSize/2), roseCornerSize, roseCornerSize);
    section_10_ctx.restore();

  requestAnimationFrame(animate_section_10)
}
animate_section_10()
let executeTextSection_10=false
window.addEventListener("scroll", function() {
  const box2Top = parent_section_10_canvas.getBoundingClientRect().top + parent_section_10_canvas.offsetHeight/2;
  const animateCanvas=this.document.querySelector('.section_10 > canvas')
  const animateImages=this.document.querySelectorAll('.section_10 > img')
  const bothCircles=this.document.querySelectorAll('.section_10 > div')
  const textAnimate=this.document.querySelector('.section_10 > main')
  if (box2Top <= window.innerHeight && box2Top >= 0 && !executeTextSection_10) {
   animateCanvas.classList.add('animate_section_9_canvas')
   animateImages[0].classList.add('img_bg_stain_1')
   animateImages[1].classList.add('img_bg_stain_2')
   bothCircles[0].classList.add('section_4-outer_circle')
    bothCircles[1].classList.add('section_4-inner_circle')
    textAnimate.classList.add('phrase_section_10')
   executeTextSection_10=true
  }   
});
//Seccion 11
const parent_section_11_canvas = document.querySelector('.section_11');
const canvas_section_11 = document.getElementById('section_canvas_11');
const section_11_ctx = canvas_section_11.getContext('2d');


const get_width_section_11 = parent_section_11_canvas.offsetWidth ;
const get_height_section_11 = parent_section_11_canvas.offsetHeight ;

canvas_section_11.width = get_width_section_11 > 430 ? 430 : get_width_section_11 ;
canvas_section_11.height = get_height_section_11 < 300 ?  870 : get_height_section_11;
function animate_section_11(){
  section_11_ctx.clearRect(0, 0, canvas_section_11.width, canvas_section_11.height);
  let greenBigLeaveSize = 55;
  let littleStickLeaveSize=95;
  let mediumStickLeaveSize=90;
  let whiteLeaveSize=50;
  let redPointsLeaveSize=50;
  let roseBorderCircleSize = 65;
  let tinyLeaveSize=90;
  
    section_11_ctx.save();
    section_11_ctx.translate( centerX - 150,  centerY - 175 );
    section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 0 ) * Math.PI / 180);  
    section_11_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_11_ctx.restore();

    section_11_ctx.save();
    section_11_ctx.translate(centerX - 50 , centerY - 230 );
    section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 200) * angleRotation  +  30 ) * Math.PI / 180);  
    section_11_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
    section_11_ctx.restore();

    section_11_ctx.save();
    section_11_ctx.translate(centerX - 80 , centerY - 210 )
    section_11_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 100 ) * Math.PI / 180);  
    section_11_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
    section_11_ctx.restore(); 

    section_11_ctx.save();
    section_11_ctx.translate( centerX - 130 , centerY - 205 );
    section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation - 10 ) * Math.PI / 180);  
    section_11_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
    section_11_ctx.restore();

    section_11_ctx.save();
    section_11_ctx.translate(centerX - 130 ,  centerY - 205 );
    section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation - 10 ) * Math.PI / 180);  
    section_11_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize,redPointsLeaveSize);
    section_11_ctx.restore();

    section_11_ctx.save();
    section_11_ctx.translate(centerX - 90 , centerY - 160 );
    section_11_ctx.rotate(Math.PI * 2.2);
    section_11_ctx.drawImage(roseImage, -70, -70, roseBorderCircleSize,roseBorderCircleSize);
    section_11_ctx.restore();

    //Rosa inferior
    section_11_ctx.save();
    section_11_ctx.translate( centerX + 150,  centerY + 25 );
    section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation - 190 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_11_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_11_ctx.restore();

    section_11_ctx.save();
    section_11_ctx.translate(centerX + 60 , centerY + 65);
    section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation  - 160 ) * Math.PI / 180);  
    section_11_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
    section_11_ctx.restore();

    section_11_ctx.save();
    section_11_ctx.translate(centerX  + 80 , centerY + 65 );
    section_11_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 240 ) * Math.PI / 180);  
    section_11_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
    section_11_ctx.restore();

    section_11_ctx.save();
    section_11_ctx.translate( centerX + 130, centerY + 45);
    section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 180 ) * Math.PI / 180); 
    section_11_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
    section_11_ctx.restore();

    section_11_ctx.save();
    section_11_ctx.translate(centerX + 130,  centerY + 45);
    section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 180 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_11_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_11_ctx.restore();

    section_11_ctx.save();
    section_11_ctx.translate(centerX + 100 , centerY + 60);
    section_11_ctx.rotate(Math.PI * 1.2);
    section_11_ctx.drawImage(roseImage, -roseBorderCircleSize/2, -roseBorderCircleSize/2, roseBorderCircleSize, roseBorderCircleSize);
    section_11_ctx.restore();
    //Flores Laterales
    section_11_ctx.save();
    section_11_ctx.translate(tinyLeaveSize/2 + 40, centerY*2 - 130 );
    section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 220 ) * Math.PI / 180);  
    section_11_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
    section_11_ctx.restore();

    section_11_ctx.save();
    section_11_ctx.translate( littleStickLeaveSize/2 + 40,  centerY*2 - 80);
    section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation - 110 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_11_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_11_ctx.restore();

    section_11_ctx.save();
    section_11_ctx.translate(redPointsLeaveSize/2 + 40,  centerY*2 - 90);
    section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 180 ) * Math.PI / 180);  
    section_11_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize*2, redPointsLeaveSize*2);
    section_11_ctx.restore();

    section_11_ctx.save();
    section_11_ctx.translate( whiteLeaveSize/2 , centerY*2 - 90 );
    section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 200 ) * Math.PI / 180);  
    section_11_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize*2, whiteLeaveSize*2);
    section_11_ctx.restore();


    section_11_ctx.save();
    section_11_ctx.translate(centerX*2 - 80 , centerY*2 - 130 );
    section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 140 ) * Math.PI / 180);  
    section_11_ctx.drawImage(tinyGreenLeaveImage_2, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
    section_11_ctx.restore();
    
    section_11_ctx.save();
    section_11_ctx.translate(centerX*2 - 80 ,  centerY*2 - 80);
    section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation - 0 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_11_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_11_ctx.restore();

    section_11_ctx.save();
    section_11_ctx.translate(centerX*2 - 60 ,  centerY*2 - 130);
    section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 0 ) * Math.PI / 180);  
    section_11_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize*2, redPointsLeaveSize*2);
    section_11_ctx.restore();

    section_11_ctx.save();
    section_11_ctx.translate(centerX*2 - whiteLeaveSize/2 , centerY*2 - 130 );
    section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 20 ) * Math.PI / 180);  
    section_11_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize*2, whiteLeaveSize*2);
    section_11_ctx.restore();

  angleLeave += 1; // Incrementar el ángulo para la animación
  requestAnimationFrame(animate_section_11)
}
animate_section_11()
let executeTextSection_11=false
window.addEventListener("scroll", function() {
  const box2Top = parent_section_11_canvas.getBoundingClientRect().top + parent_section_11_canvas.offsetHeight/2 ;
  const bothSquares=this.document.querySelectorAll('.section_11 > div')
  const animateCanvas=this.document.querySelector('.section_11 > canvas')
  const animateImages=this.document.querySelectorAll('.section_11 > img')
  if (box2Top <= window.innerHeight && box2Top >= 0 && !executeTextSection_11) {
      animateCanvas.classList.add('scale_section_2');
      bothSquares[0].classList.add('first_square')
      bothSquares[1].classList.add('second_square')
      animateImages[0].classList.add('img_wedding')
    animateImages[1].classList.add('section_11--recent_wedding')
    animateImages[2].classList.add('img_bg_stain_1')
    animateImages[3].classList.add('img_bg_stain_2')
      executeTextSection_11=true
  } 
});
const parent_section_12_canvas = document.querySelector('.section_12');


let executeTextSection_12=false
window.addEventListener("scroll", function() {
  const box2Top = parent_section_12_canvas.getBoundingClientRect().top + parent_section_12_canvas.offsetHeight/2 ;
  if (box2Top <= window.innerHeight && box2Top >= 0 && !executeTextSection_11) {
      executeTextSection_12=true
  } 
});
const parent_section_13_canvas = document.querySelector('.section_13');
const canvas_section_13 = document.getElementById('section_canvas_13');
const section_13_ctx = canvas_section_13.getContext('2d');


const get_width_section_13 = parent_section_13_canvas.offsetWidth ;
const get_height_section_13 = parent_section_13_canvas.offsetHeight ;

canvas_section_13.width = get_width_section_13 > 430 ? 430 : get_width_section_13 ;
canvas_section_13.height = get_height_section_13 < 300 ?  870 : get_height_section_13;

function animate_section_13(){
  section_13_ctx.clearRect(0, 0, canvas_section_13.width, canvas_section_13.height);
  let roseCornerSize = 100;
  let greenBigLeaveCornerSize = 75;
  let littleStickLeaveCornerSize=75;
  let mediumStickLeaveCornerSize=75;
  let whiteLeaveCornerSize=65;
  let tinyLeaveCornerSize=80;
  let redPointsLeaveSize=50;
  // Primera Linea
  section_13_ctx.strokeStyle = '#9b5a01';
    section_13_ctx.lineWidth = 2;  
    section_13_ctx.save();  
    section_13_ctx.translate(0, 100);  
    section_13_ctx.rotate(-13 * Math.PI / 180);  
    section_13_ctx.beginPath();
    section_13_ctx.moveTo(0, 0);
    section_13_ctx.lineTo(650, 0);
    section_13_ctx.stroke();
    section_13_ctx.restore();  

    // Segunda línea
    section_13_ctx.strokeStyle = '#9b5a01';
    section_13_ctx.lineWidth = 2;  
    section_13_ctx.save();  
    section_13_ctx.translate(0, 20);  
    section_13_ctx.rotate(13 * Math.PI / 180);  
    section_13_ctx.beginPath();
    section_13_ctx.moveTo(0, 0);
    section_13_ctx.lineTo(650, 0);
    section_13_ctx.stroke();
    section_13_ctx.restore();  
    // Tercera linea
    section_13_ctx.strokeStyle = '#9b5a01';
    section_13_ctx.lineWidth = 2;  
    section_13_ctx.save();  
    section_13_ctx.translate(0, centerY*2 - 10);  
    section_13_ctx.rotate(-13 * Math.PI / 180);  
    section_13_ctx.beginPath();
    section_13_ctx.moveTo(0, 0);
    section_13_ctx.lineTo(650, 0);
    section_13_ctx.stroke();
    section_13_ctx.restore();  
    //Cuarta Linea
    section_13_ctx.strokeStyle = '#9b5a01';
    section_13_ctx.lineWidth = 2;  
    section_13_ctx.save();  
    section_13_ctx.translate(0, centerY*2 - 140);  
    section_13_ctx.rotate(13 * Math.PI / 180);  
    section_13_ctx.beginPath();
    section_13_ctx.moveTo(0, 0);
    section_13_ctx.lineTo(650, 0);
    section_13_ctx.stroke();
    section_13_ctx.restore();  

  //Rosa Esquina
  section_13_ctx.save();
  section_13_ctx.translate(150, 55);
  section_13_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 30 ) * Math.PI / 180);  
  section_13_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
  section_13_ctx.restore();

  section_13_ctx.save();
  section_13_ctx.translate(60, 170);
  section_13_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 140 ) * Math.PI / 180);  
  section_13_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
  section_13_ctx.restore();

  section_13_ctx.save();
  section_13_ctx.translate( 50, 125);
  section_13_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 10 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_13_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
  section_13_ctx.restore();

  section_13_ctx.save();
  section_13_ctx.translate( 90,  145);
  section_13_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 280 ) * Math.PI / 180);  
  section_13_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveCornerSize / 2), -(littleStickLeaveCornerSize / 2), littleStickLeaveCornerSize, littleStickLeaveCornerSize);
  section_13_ctx.restore();

  section_13_ctx.save();
  section_13_ctx.translate(130, 80);
  section_13_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 270 ) * Math.PI / 180);  
  section_13_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveCornerSize / 2), -(tinyLeaveCornerSize / 2), tinyLeaveCornerSize, tinyLeaveCornerSize);
  section_13_ctx.restore();

  section_13_ctx.save();
  section_13_ctx.translate( 100, 60);
  section_13_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_13_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
  section_13_ctx.restore();

  section_13_ctx.save();
  section_13_ctx.translate(120,120);
  section_13_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_13_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
  section_13_ctx.restore();

  section_13_ctx.save();
  section_13_ctx.translate(60, 65 );
  section_13_ctx.rotate((Math.sin((angleLeave) * Math.PI / 280) * angleRotation - 20 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_13_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveCornerSize / 2), -(greenBigLeaveCornerSize / 2), greenBigLeaveCornerSize, greenBigLeaveCornerSize);
  section_13_ctx.restore();

  section_13_ctx.save();
  section_13_ctx.translate( 70, 90);
  section_13_ctx.rotate(Math.PI / 1);
  section_13_ctx.drawImage(roseImage, -(roseCornerSize/2) , -(roseCornerSize/2), roseCornerSize, roseCornerSize);
  section_13_ctx.restore();
  //Rosa Inferior
  section_13_ctx.save();
  section_13_ctx.translate( centerX*2 - 160, centerY*2 - 50);
  section_13_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 230 ) * Math.PI / 180);  
  section_13_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
  section_13_ctx.restore();

  section_13_ctx.save();
  section_13_ctx.translate(centerX*2 - 40, centerY*2 - 150);
  section_13_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 320 ) * Math.PI / 180);  
  section_13_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
  section_13_ctx.restore();

  section_13_ctx.save();
  section_13_ctx.translate(centerX*2 - 140, centerY*2 - 70 );
  section_13_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 80 ) * Math.PI / 180);  
  section_13_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveCornerSize / 2), -(tinyLeaveCornerSize / 2), tinyLeaveCornerSize, tinyLeaveCornerSize);
  section_13_ctx.restore();

  section_13_ctx.save();
  section_13_ctx.translate(centerX*2 - 110, centerY*2 - 40);
  section_13_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 10 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_13_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
  section_13_ctx.restore();

  section_13_ctx.save();
  section_13_ctx.translate( centerX*2 - 90,  centerY*2 - 140) ;
  section_13_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 100 ) * Math.PI / 180);  
  section_13_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveCornerSize / 2), -(littleStickLeaveCornerSize / 2), littleStickLeaveCornerSize, littleStickLeaveCornerSize);
  section_13_ctx.restore();

  section_13_ctx.save();
  section_13_ctx.translate(centerX*2 - 50, centerY*2 - 100);
  section_13_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_13_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
  section_13_ctx.restore();

  section_13_ctx.save();
  section_13_ctx.translate(centerX*2 - 130,  centerY*2 - 120);
  section_13_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 60 ) * Math.PI / 180);  
  section_13_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
  section_13_ctx.restore();

  section_13_ctx.save();
  section_13_ctx.translate(centerX*2 - 55,centerY*2 - 65 );
  section_13_ctx.rotate((Math.sin((angleLeave) * Math.PI / 280) * angleRotation + 140 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_13_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveCornerSize / 2), -(greenBigLeaveCornerSize / 2), greenBigLeaveCornerSize, greenBigLeaveCornerSize);
  section_13_ctx.restore();

  section_13_ctx.save();
  section_13_ctx.translate(centerX*2 - 75, centerY*2 - 80);
  section_13_ctx.rotate(Math.PI * 0.15);
  section_13_ctx.drawImage(roseImage, -(roseCornerSize/2) , -(roseCornerSize/2), roseCornerSize, roseCornerSize);
  section_13_ctx.restore();


  requestAnimationFrame(animate_section_13)
}
animate_section_13()
let executeTextSection_13=false
window.addEventListener("scroll", function() {
  const box2Top = parent_section_13_canvas.getBoundingClientRect().top + parent_section_13_canvas.offsetHeight/2;
  const animateSection=this.document.querySelector('.section_13 > section')
  const animateCanvas=this.document.querySelector('.section_13 > canvas')
  const animateImages=this.document.querySelectorAll('.section_13 > img')
  if (box2Top <= window.innerHeight && box2Top >= 0 ) {
   animateImages[1].classList.add('img_bg_stain_1')
   animateImages[2].classList.add('img_bg_stain_2')
   executeTextSection_13=true
  }   
});

const parent_section_14_canvas = document.querySelector('.section_14');
const canvas_section_14 = document.getElementById('section_canvas_14');
const section_14_ctx = canvas_section_14.getContext('2d');


const get_width_section_14 = parent_section_14_canvas.offsetWidth ;
const get_height_section_14 = parent_section_14_canvas.offsetHeight ;

canvas_section_14.width = get_width_section_14 > 430 ? 430 : get_width_section_14 ;
canvas_section_14.height = get_height_section_14 < 300 ?  870 : get_height_section_14 ;
function animate_section_14(){
  section_14_ctx.clearRect(0, 0, canvas_section_14.width, canvas_section_14.height);
    let roseBorderCircleSize = 80;
    let greenBigLeaveSize = 60;
    let littleStickLeaveSize=75;
    let mediumStickLeaveSize=80;
    let whiteLeaveSize=60;
    let tinyLeaveSize=50;
    let redPointsLeaveSize=50;
        
    section_14_ctx.save();
    section_14_ctx.translate(centerX + 90, centerY - 180);
    section_14_ctx.rotate((Math.sin(angleLeave * Math.PI / 260) * angleRotation + 30 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_14_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
    section_14_ctx.restore();

    section_14_ctx.save();
    section_14_ctx.translate(centerX + 145, centerY - 140);
    section_14_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 100 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_14_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
    section_14_ctx.restore();

    section_14_ctx.save();
    section_14_ctx.translate(centerX + 140, centerY - 150);
    section_14_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 100 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_14_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
    section_14_ctx.restore();

    section_14_ctx.save();
    section_14_ctx.translate(centerX + 70, centerY - 225);
    section_14_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 85 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_14_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_14_ctx.restore();

    section_14_ctx.save();
    section_14_ctx.translate(centerX + 95, centerY - 222);
    section_14_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 85 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_14_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
    section_14_ctx.restore();

    section_14_ctx.save();
    section_14_ctx.translate(centerX + 95, centerY - 222);
    section_14_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 85 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_14_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_14_ctx.restore();

    section_14_ctx.save();
    section_14_ctx.translate(centerX + 95, centerY - 150);
    section_14_ctx.rotate(Math.PI / 2);
    section_14_ctx.drawImage(roseImage, -70, -70, roseBorderCircleSize, roseBorderCircleSize);
    section_14_ctx.restore();

    //Rosa del Lado izquierdo inferior
    section_14_ctx.save();
    section_14_ctx.translate(centerX - 105, centerY + 25);
    section_14_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_14_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
    section_14_ctx.restore();
    
    section_14_ctx.save();
    section_14_ctx.translate(centerX - 160, centerY - 15);
    section_14_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 300 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_14_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
    section_14_ctx.restore();

    section_14_ctx.save();
    section_14_ctx.translate(centerX - 75, centerY + 75);
    section_14_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 260 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_14_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_14_ctx.restore();
    
    section_14_ctx.save();
    section_14_ctx.translate(centerX - 105, centerY + 60);
    section_14_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_14_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
    section_14_ctx.restore();


    section_14_ctx.save();
    section_14_ctx.translate(centerX - 155, centerY + 5);
    section_14_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 300 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_14_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
    section_14_ctx.restore();

    section_14_ctx.save();
    section_14_ctx.translate(centerX - 105, centerY + 60);
    section_14_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_14_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_14_ctx.restore();

    section_14_ctx.save();
    section_14_ctx.translate(centerX - 100, centerY + 20);
    section_14_ctx.rotate(Math.PI * 1.6);
    section_14_ctx.drawImage(roseImage, -70, -70, roseBorderCircleSize, roseBorderCircleSize);
    section_14_ctx.restore();
    //Flore laterales
    section_14_ctx.save();
    section_14_ctx.translate(tinyLeaveSize/2 + 40, centerY*2 - 130 );
    section_14_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 220 ) * Math.PI / 180);  
    section_14_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
    section_14_ctx.restore();

    section_14_ctx.save();
    section_14_ctx.translate( littleStickLeaveSize/2 + 40,  centerY*2 - 80);
    section_14_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation - 110 ) * Math.PI / 180); 
    section_14_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_14_ctx.restore();

    section_14_ctx.save();
    section_14_ctx.translate(redPointsLeaveSize/2 + 40,  centerY*2 - 90);
    section_14_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 180 ) * Math.PI / 180);  
    section_14_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize*1.5, redPointsLeaveSize*1.5);
    section_14_ctx.restore();

    section_14_ctx.save();
    section_14_ctx.translate( whiteLeaveSize/2 , centerY*2 - 90 );
    section_14_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 200 ) * Math.PI / 180);  
    section_14_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize*1.5, whiteLeaveSize*1.5);
    section_14_ctx.restore();


    section_14_ctx.save();
    section_14_ctx.translate(centerX*2 - 80 , centerY*2 - 130 );
    section_14_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 140 ) * Math.PI / 180);  
    section_14_ctx.drawImage(tinyGreenLeaveImage_2, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
    section_14_ctx.restore();
    
    section_14_ctx.save();
    section_14_ctx.translate(centerX*2 - 80 ,  centerY*2 - 80);
    section_14_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation - 0 ) * Math.PI / 180);  
    section_14_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_14_ctx.restore();

    section_14_ctx.save();
    section_14_ctx.translate(centerX*2 - 60 ,  centerY*2 - 130);
    section_14_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 0 ) * Math.PI / 180);  
    section_14_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize*1.5, redPointsLeaveSize*1.5);
    section_14_ctx.restore();

    section_14_ctx.save();
    section_14_ctx.translate(centerX*2 - whiteLeaveSize/2 , centerY*2 - 130 );
    section_14_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 20 ) * Math.PI / 180);  
    section_14_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize*1.5, whiteLeaveSize*1.5);
    section_14_ctx.restore();


  requestAnimationFrame(animate_section_14)
}
animate_section_14()
let executeTextSection_14=false
window.addEventListener("scroll", function() {
  const box2Top = parent_section_14_canvas.getBoundingClientRect().top + parent_section_14_canvas.offsetHeight/2;
  const animateCircles=this.document.querySelectorAll('.section_14 > div')
  const animateCanvas=this.document.querySelector('.section_14 > canvas')
  const animateImages=this.document.querySelectorAll('.section_14 > img')
  if (box2Top <= window.innerHeight && box2Top >= 0 ) {
   animateImages[0].classList.add('img_bg_stain_1')
   animateImages[1].classList.add('img_bg_stain_2')
   animateImages[2].classList.add('section_14--img_invitation')
   animateCircles[0].classList.add('section_14-outer_circle')
   animateCircles[1].classList.add('section_14-inner_circle')
   executeTextSection_14=true
  }   
});

const fechaObjetivo = new Date(2024, 4, 28);

function tiempoRestante(fechaObjetivo) {
  let fechaActual = new Date();
  let tiempoActual = fechaActual.getTime();
  let tiempoObjetivo = fechaObjetivo.getTime();
  let diferencia = tiempoObjetivo - tiempoActual;

  let diasRestantes = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  let horasRestantes = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutosRestantes = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  let segundosRestantes = Math.floor((diferencia % (1000 * 60)) / 1000);
  
  return {
      dias: diasRestantes,
      horas: horasRestantes,
      minutos: minutosRestantes,
      segundos: segundosRestantes
  };
}


// Función para actualizar los divs con el tiempo restante
function updateCounter() {
  let currentTime = tiempoRestante(fechaObjetivo);
  let divs = document.querySelectorAll('.section_1--background_circle');

  divs[0].innerHTML = `<p  style="width: fit-content; height: 22px;font-size: 16px;display:flex;justify-content: center;align-items: center;">${currentTime.dias}</p>` + `<p style="width: fit-content; height: 18px;font-size: 14px;display:flex;justify-content: center;align-items: center;">dias</p>`;//Dias
  divs[1].innerHTML = `<p  style="width: fit-content; height: 22px;font-size: 16px;display:flex;justify-content: center;align-items: center;">${currentTime.horas}</p>` + `<p style="width: fit-content; height: 18px;font-size: 14px;display:flex;justify-content: center;align-items: center;">horas</p>`;//Horas
  divs[2].innerHTML = `<p  style="width: fit-content; height: 22px;font-size: 16px;display:flex;justify-content: center;align-items: center;">${currentTime.minutos}</p>` + `<p style="width: fit-content; height: 18px;font-size: 14px;display:flex;justify-content: center;align-items: center;">min</p>`; //Minutos
  divs[3].innerHTML = `<p  style="width: fit-content; height: 22px;font-size: 16px;display:flex;justify-content: center;align-items: center;">${currentTime.segundos}</p>` + `<p style="width: fit-content; height: 18px;font-size: 14px;display:flex;justify-content: center;align-items: center;">seg</p>`;//Segundos
}

// Actualizar el contador cada segundo
setInterval(updateCounter, 1000);

// Llamar a actualizarContador() una vez para mostrar el tiempo inicial
updateCounter();
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

