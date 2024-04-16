/** @type {HTMLCanvasElement} */
const parentTagSection_1=document.querySelector('.section_1')
const canvas = document.getElementById('logoCanvas');
const ctx = canvas.getContext('2d');
const image = new Image();
const cardLogo= new Image();
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
image.src = 'moon.png';
cardLogo.src='sobre-pattern.png'
biggreenLeaveImage.src='big_green_leave.png'
littleStickGreenImage.src='little_stick_green.png'
mediumStickGreenImage.src='medium_stick_green.png'
mediumStickGreenImage_1.src='medium_stick_green_1.png'
whiteLeaveImage.src='white_leave.png'
tinyGreenLeaveImage.src='tiny_leave.png'
tinyGreenLeaveImage_2.src='tiny_leave_2.png'
redPointsLeaveImage.src='red_points_leave.png'
const angleRotation=4; // Angulo de Rotacion de las animaciones

const containerWidth = document.getElementById('container_canvas').offsetWidth;
const containerHeight = document.getElementById('container_canvas').offsetHeight;

canvas.width = containerWidth;
canvas.height = containerHeight;

const circlesDatesContainer=document.querySelectorAll('.section_1--counter > div')
const canvasCirclesAnimation=document.querySelector(".circle_times_animation_1")
const canvasCirclesAnimation_2=document.querySelector(".circle_times_animation_2")
const canvasCirclesAnimation_3=document.querySelector(".circle_times_animation_3")
const canvasCirclesAnimation_4=document.querySelector(".circle_times_animation_4")

const circles_animations_ctx=canvasCirclesAnimation.getContext("2d")
const circles_animations_ctx_2=canvasCirclesAnimation_2.getContext("2d")
const circles_animations_ctx_3=canvasCirclesAnimation_3.getContext("2d")
const circles_animations_ctx_4=canvasCirclesAnimation_4.getContext("2d")




canvasCirclesAnimation.width=circlesDatesContainer[0].offsetWidth + 20;
canvasCirclesAnimation.height=circlesDatesContainer[0].offsetHeight + 20;
canvasCirclesAnimation_2.width=circlesDatesContainer[1].offsetWidth + 20;
canvasCirclesAnimation_2.height=circlesDatesContainer[1].offsetHeight + 20;
canvasCirclesAnimation_3.width=circlesDatesContainer[2].offsetWidth + 20;
canvasCirclesAnimation_3.height=circlesDatesContainer[2].offsetHeight + 20;
canvasCirclesAnimation_4.width=circlesDatesContainer[3].offsetWidth + 20;
canvasCirclesAnimation_4.height=circlesDatesContainer[3].offsetHeight + 20;
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

const widthFourCirclesSections=containerWidth / 3.5 

 //Dibuja el sobre con canvas
  function drawFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const cardLogoSize=380;
    ctx.drawImage(cardLogo, (containerWidth - cardLogoSize) / 2, (containerHeight - cardLogoSize) / 2 + 100, cardLogoSize, cardLogoSize);
    requestAnimationFrame(drawFrame);
  }

  drawFrame();


/*Seccion 2, otro canvas aparte */
const parent_section_2_canvas = document.querySelector('.section_2');
const canvas_section_2 = document.getElementById('section_canvas_2');
const section_2_ctx = canvas_section_2.getContext("2d");

const get_width_section_2 = document.querySelector('.section_2').offsetWidth;
const get_height_section_2 = document.querySelector('.section_2').offsetHeight;

canvas_section_2.width = get_width_section_2;
canvas_section_2.height = get_height_section_2;

const centerX = canvas_section_2.width / 2;
const centerY = canvas_section_2.height / 2;


let angleLeave = 0;
function animate_1() {
  section_2_ctx.clearRect(0, 0, canvas_section_2.width, canvas_section_2.height);
    let roseCornerSize = 120;
    let roseBorderCircleSize = 80;
    let greenBigLeaveCornerSize = 90;
    let greenBigLeaveSize = 60;
    let littleStickLeaveSize=75;
    let littleStickLeaveCornerSize=85;
    let mediumStickLeaveSize=80;
    let mediumStickLeaveCornerSize=90;
    let whiteLeaveSize=60;
    let whiteLeaveCornerSize=80;
    let tinyLeaveSize=50;
    let tinyLeaveCornerSize=100;
    let redPointsLeaveSize=40;
    // Primera hoja
    section_2_ctx.strokeStyle = '#9b5a01';
    section_2_ctx.lineWidth = 1;  
    section_2_ctx.save();  
    section_2_ctx.translate(0, 100);  
    section_2_ctx.rotate(-10 * Math.PI / 180);  
    section_2_ctx.beginPath();
    section_2_ctx.moveTo(0, 0);
    section_2_ctx.lineTo(400, 0);
    section_2_ctx.stroke();
    section_2_ctx.restore();  

    // Segunda línea
    section_2_ctx.strokeStyle = '#9b5a01';
    section_2_ctx.lineWidth = 1;  
    section_2_ctx.save();  
    section_2_ctx.translate(0,  0);  
    section_2_ctx.rotate(20 * Math.PI / 180);  
    section_2_ctx.beginPath();
    section_2_ctx.moveTo(0, 0);
    section_2_ctx.lineTo(450, 0);
    section_2_ctx.stroke();
    section_2_ctx.restore();  

    section_2_ctx.save();
    section_2_ctx.translate(centerX + 70, centerY - 100);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 260) * angleRotation + 30 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
    section_2_ctx.restore();


    section_2_ctx.save();
    section_2_ctx.translate(centerX + 125, centerY - 60);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 100 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
    section_2_ctx.restore();



    section_2_ctx.save();
    section_2_ctx.translate(centerX + 120, centerY - 80);
    section_2_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 100 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX + 50, centerY - 145);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 85 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX + 75, centerY - 142);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 85 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX + 75, centerY - 142);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 85 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX + 75, centerY - 80);
    section_2_ctx.rotate(Math.PI / 2);
    section_2_ctx.drawImage(roseImage, -70, -70, roseBorderCircleSize, roseBorderCircleSize);
    section_2_ctx.restore();

    //Rosa del Lado izquierdo inferior
    section_2_ctx.save();
    section_2_ctx.translate(centerX - 75, centerY + 85);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
    section_2_ctx.restore();
    
    section_2_ctx.save();
    section_2_ctx.translate(centerX - 130, centerY + 45);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 300 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX - 45, centerY + 135);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 260 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_2_ctx.restore();
    
    section_2_ctx.save();
    section_2_ctx.translate(centerX - 75, centerY + 120);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
    section_2_ctx.restore();


    section_2_ctx.save();
    section_2_ctx.translate(centerX - 125, centerY + 65);
    section_2_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 300 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX - 75, centerY + 120);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX - 70, centerY + 80);
    section_2_ctx.rotate(Math.PI * 1.6);
    section_2_ctx.drawImage(roseImage, -70, -70, roseBorderCircleSize, roseBorderCircleSize);
    section_2_ctx.restore();

// Corner rosa
    section_2_ctx.save();
    section_2_ctx.translate(140, 40);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 30 ) * Math.PI / 180);  
    section_2_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(43, 160);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 140 ) * Math.PI / 180);  
    section_2_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate( 53, 120);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 300 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate( 100,  105);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 260 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveCornerSize / 2), -(littleStickLeaveCornerSize / 2), littleStickLeaveCornerSize, littleStickLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(140, 50);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 270 ) * Math.PI / 180);  
    section_2_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveCornerSize / 2), -(tinyLeaveCornerSize / 2), tinyLeaveCornerSize, tinyLeaveCornerSize);
    section_2_ctx.restore();


    section_2_ctx.save();
    section_2_ctx.translate( 100, 40);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_2_ctx.restore();


    
    section_2_ctx.save();
    section_2_ctx.translate(115,  80);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_2_ctx.restore();


    section_2_ctx.save();
    section_2_ctx.translate(55, 90 );
    section_2_ctx.rotate((Math.sin((angleLeave) * Math.PI / 280) * angleRotation + 90 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveCornerSize / 2), -(greenBigLeaveCornerSize / 2), greenBigLeaveCornerSize, greenBigLeaveCornerSize);
    section_2_ctx.restore();


    section_2_ctx.save();
    section_2_ctx.translate( 40, 40);
    section_2_ctx.rotate(Math.PI / (-1.3));
    section_2_ctx.drawImage(roseImage, -(roseCornerSize/2) , -(roseCornerSize/2), roseCornerSize, roseCornerSize);
    section_2_ctx.restore();

    angleLeave += 1; // Incrementar el ángulo para la animación

    requestAnimationFrame(animate_1);
}
animate_1();


window.addEventListener("scroll", function() {
  const box2Top = parent_section_2_canvas.getBoundingClientRect().top;
  const textAnimate=this.document.querySelector('.section_2 > p')
  const bothCircles=this.document.querySelectorAll('.section_2 > span')
  if (box2Top <= window.innerHeight && box2Top >= 0) {
      canvas_section_2.classList.add('scale_section_2');
      textAnimate.classList.add('section_2_text')
      bothCircles[0].classList.add('section_2-outer_circle')
      bothCircles[1].classList.add('section_2-inner_circle')
  } 
});


/* Tercera Seccion del Canvas */
const parent_section_3_canvas = document.querySelector('.section_3');
const canvas_section_3 = document.getElementById('section_canvas_3');
const section_3_ctx = canvas_section_3.getContext('2d');
const get_width_section_3 = parent_section_3_canvas.offsetWidth;
const get_height_section_3 = parent_section_3_canvas.offsetHeight;

canvas_section_3.width = get_width_section_3;
canvas_section_3.height = get_height_section_3;

const width_squares= 250;
const height_squares=250;

const middle_height=get_height_section_3 /2
const middle_width= get_width_section_3 / 2

const get_section_3_text = document.querySelector('.section_3 > p');
const text_wedding = '¡Nos casamos!';
const velocity_text = 400; // milisegundos

function animateTextWedding(index) {
  if (index < text_wedding.length) {
    get_section_3_text.textContent += text_wedding[index];
    index++;
    setTimeout(function() {
      animateTextWedding(index);
    }, velocity_text);
  }
}


const initialImageSize=0;
function animate_section_3() {
  section_3_ctx.clearRect(0, 0, canvas_section_3.width, canvas_section_3.height);
  let greenBigLeaveSize = 40;
  let littleStickLeaveSize=80;
  let mediumStickLeaveSize=75;
  let whiteLeaveSize=35;
  let tinyLeaveSize=30;
  let redPointsLeaveSize=35;
  let roseBorderCircleSize = 60;
  
    section_3_ctx.save();
    section_3_ctx.translate(centerX - 35 , centerY - 110);
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 260) * angleRotation + 0 ) * Math.PI / 180);  
    section_3_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
    section_3_ctx.restore();
    section_3_ctx.save();

    section_3_ctx.translate( centerX - 40,  centerY - 135 );
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 20 ) * Math.PI / 180);  
    section_3_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX + 30 , centerY - 130 );
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 200) * angleRotation  +  50 ) * Math.PI / 180);  
    section_3_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX + 10 , centerY - 130 );
    section_3_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 100 ) * Math.PI / 180);  
    section_3_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
    section_3_ctx.restore(); 

    section_3_ctx.save();
    section_3_ctx.translate( centerX - 35 , centerY - 135 );
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 0 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_3_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX - 35 ,  centerY - 130 );
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 0 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_3_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize,redPointsLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX , centerY - 80 );
    section_3_ctx.rotate(Math.PI * 2.2);
    section_3_ctx.drawImage(roseImage, -70, -70, roseBorderCircleSize,roseBorderCircleSize);
    section_3_ctx.restore();


    //Rosa inferior

    section_3_ctx.save();
    section_3_ctx.translate(centerX + 35 , centerY + 110);
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 260) * angleRotation + 180 ) * Math.PI / 180);  
    section_3_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate( centerX + 35,  centerY  +  130);
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation - 160 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_3_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX - 35 , centerY + 130);
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 200) * angleRotation + - 130 ) * Math.PI / 180);  
    section_3_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX  - 20 , centerY  + 140);
    section_3_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 240 ) * Math.PI / 180);  
    section_3_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate( centerX + 40, centerY + 130);
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_3_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX + 40,  centerY + 130);
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_3_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX , centerY + 80);
    section_3_ctx.rotate(Math.PI * 1.2);
    section_3_ctx.drawImage(roseImage, -70, -70, roseBorderCircleSize, roseBorderCircleSize);
    section_3_ctx.restore();

    angleLeave += 1; 
    
      requestAnimationFrame(animate_section_3);
    
   
}
animate_section_3()

let executeTextSection_3=false

window.addEventListener("scroll", function() {
  const box2Top = parent_section_3_canvas.getBoundingClientRect().top;
  const textAnimate=document.querySelector('.section_3 > p')
  const squaresImage=this.document.querySelectorAll('.section_3 > div')
  const imageAnimate=this.document.querySelector('.section_3 > img')
  const canvasVisibility=this.document.querySelector('.section_3 > canvas')
  if (box2Top <= window.innerHeight && box2Top >= 0 && !executeTextSection_3 ) {
    textAnimate.classList.add('section_3--wedding-text')
    squaresImage[0].classList.add('first_square')
    squaresImage[1].classList.add('second_square')
    imageAnimate.classList.add('img_wedding')
    canvasVisibility.classList.add('canvas_section_3')
    executeTextSection_3=true
    animateTextWedding(0);
    } 
});
// Seccion 4 
const parent_section_4_canvas = document.querySelector('.section_4');
const canvas_section_4 = document.getElementById('section_canvas_4');
const section_4_ctx = canvas_section_4.getContext('2d');


const get_width_section_4 = parent_section_4_canvas.offsetWidth;
const get_height_section_4 = parent_section_4_canvas.offsetHeight;

canvas_section_4.width = get_width_section_4;
canvas_section_4.height = get_height_section_4;


function animate_section_4() {
  section_4_ctx.clearRect(0, 0, canvas_section_4.width, canvas_section_4.height);
    let roseCornerSize = 120;
    let roseBorderCircleSize = 80;
    let greenBigLeaveCornerSize = 90;
    let greenBigLeaveSize = 60;
    let littleStickLeaveSize=75;
    let littleStickLeaveCornerSize=85;
    let mediumStickLeaveSize=80;
    let mediumStickLeaveCornerSize=90;
    let whiteLeaveSize=60;
    let whiteLeaveCornerSize=80;
    let tinyLeaveSize=50;
    let tinyLeaveCornerSize=100;
    let redPointsLeaveSize=40;
    
    section_4_ctx.strokeStyle = '#9b5a01';
    section_4_ctx.lineWidth = 1;  
    section_4_ctx.save();  
    section_4_ctx.translate(0, 100);  
    section_4_ctx.rotate(-15 * Math.PI / 180);  
    section_4_ctx.beginPath();
    section_4_ctx.moveTo(0, 0);
    section_4_ctx.lineTo(400, 0);
    section_4_ctx.stroke();
    section_4_ctx.restore();  

    // Segunda línea
    section_4_ctx.strokeStyle = '#9b5a01';
    section_4_ctx.lineWidth = 1;  
    section_4_ctx.save();  
    section_4_ctx.translate(0, - 100);  
    section_4_ctx.rotate(30 * Math.PI / 180);  
    section_4_ctx.beginPath();
    section_4_ctx.moveTo(0, 0);
    section_4_ctx.lineTo(450, 0);
    section_4_ctx.stroke();
    section_4_ctx.restore();
    //Tercera linea
    section_4_ctx.strokeStyle = '#9b5a01';
    section_4_ctx.lineWidth = 1;  
    section_4_ctx.save();  
    section_4_ctx.translate(0, (centerY * 2) - 100);  
    section_4_ctx.rotate(30 * Math.PI / 180);  
    section_4_ctx.beginPath();
    section_4_ctx.moveTo(0, 0);
    section_4_ctx.lineTo(450, 0);
    section_4_ctx.stroke();
    section_4_ctx.restore();

    //Cuarta linea
    section_4_ctx.strokeStyle = '#9b5a01';
    section_4_ctx.lineWidth = 1;  
    section_4_ctx.save();  
    section_4_ctx.translate(0, (centerY * 2)- 5);  
    section_4_ctx.rotate(-15 * Math.PI / 180);  
    section_4_ctx.beginPath();
    section_4_ctx.moveTo(0, 0);
    section_4_ctx.lineTo(400, 0);
    section_4_ctx.stroke();
    section_4_ctx.restore(); 

    section_4_ctx.save();
    section_4_ctx.translate(centerX + 70, centerY - 100);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 260) * angleRotation + 30 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate(centerX + 125, centerY - 60);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 100 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
    section_4_ctx.restore();



    section_4_ctx.save();
    section_4_ctx.translate(centerX + 120, centerY - 80);
    section_4_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 100 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate(centerX + 50, centerY - 145);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 85 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate(centerX + 75, centerY - 142);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 85 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate(centerX + 75, centerY - 142);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 85 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate(centerX + 75, centerY - 80);
    section_4_ctx.rotate(Math.PI / 2);
    section_4_ctx.drawImage(roseImage, -70, -70, roseBorderCircleSize, roseBorderCircleSize);
    section_4_ctx.restore();

    //Rosa del Lado izquierdo inferior
    section_4_ctx.save();
    section_4_ctx.translate(centerX - 75, centerY + 85);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
    section_4_ctx.restore();
    
    section_4_ctx.save();
    section_4_ctx.translate(centerX - 130, centerY + 45);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 300 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate(centerX - 45, centerY + 135);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 260 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_4_ctx.restore();
    
    section_4_ctx.save();
    section_4_ctx.translate(centerX - 75, centerY + 120);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
    section_4_ctx.restore();


    section_4_ctx.save();
    section_4_ctx.translate(centerX - 125, centerY + 65);
    section_4_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 300 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate(centerX - 75, centerY + 120);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate(centerX - 70, centerY + 80);
    section_4_ctx.rotate(Math.PI * 1.6);
    section_4_ctx.drawImage(roseImage, -70, -70, roseBorderCircleSize, roseBorderCircleSize);
    section_4_ctx.restore();

// Corner rosa
    section_4_ctx.save();
    section_4_ctx.translate(140, 40);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 30 ) * Math.PI / 180);  
    section_4_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate(40, 160);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 140 ) * Math.PI / 180);  
    section_4_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate( 60, 120);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 300 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate( 100,  105);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 260 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveCornerSize / 2), -(littleStickLeaveCornerSize / 2), littleStickLeaveCornerSize, littleStickLeaveCornerSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate(140, 50);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 270 ) * Math.PI / 180);  
    section_4_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveCornerSize / 2), -(tinyLeaveCornerSize / 2), tinyLeaveCornerSize, tinyLeaveCornerSize);
    section_4_ctx.restore();


    section_4_ctx.save();
    section_4_ctx.translate( 100, 40);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate(115,  80);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_4_ctx.restore();


    section_4_ctx.save();
    section_4_ctx.translate(60, 100 );
    section_4_ctx.rotate((Math.sin((angleLeave) * Math.PI / 280) * angleRotation + 90 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveCornerSize / 2), -(greenBigLeaveCornerSize / 2), greenBigLeaveCornerSize, greenBigLeaveCornerSize);
    section_4_ctx.restore();


    section_4_ctx.save();
    section_4_ctx.translate( 40, 40);
    section_4_ctx.rotate(Math.PI / (-1.3));
    section_4_ctx.drawImage(roseImage, -(roseCornerSize/2) , -(roseCornerSize/2), roseCornerSize, roseCornerSize);
    section_4_ctx.restore();
    // Corner Rosa inferior

    section_4_ctx.save();
    section_4_ctx.translate((centerX * 2) -160,(centerY * 2) - 40);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 200 ) * Math.PI / 180);  
    section_4_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate((centerX * 2) - 40,(centerY * 2) - 160);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 320 ) * Math.PI / 180);  
    section_4_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate( (centerX * 2) - 40,(centerY * 2) - 120);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 100 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate( (centerX * 2) -100,(centerY * 2) -  105);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 90 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveCornerSize / 2), -(littleStickLeaveCornerSize / 2), littleStickLeaveCornerSize, littleStickLeaveCornerSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate((centerX * 2) -140,(centerY * 2) - 50);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 70 ) * Math.PI / 180);  
    section_4_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveCornerSize / 2), -(tinyLeaveCornerSize / 2), tinyLeaveCornerSize, tinyLeaveCornerSize);
    section_4_ctx.restore();


    section_4_ctx.save();
    section_4_ctx.translate( (centerX * 2) -100,(centerY * 2) - 40);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 40 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate( (centerX * 2) -115,(centerY * 2) -  80);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 60 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_4_ctx.restore();


    section_4_ctx.save();
    section_4_ctx.translate((centerX * 2) - 50, (centerY * 2) - 95 );
    section_4_ctx.rotate((Math.sin((angleLeave) * Math.PI / 280) * angleRotation + 280 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveCornerSize / 2), -(greenBigLeaveCornerSize / 2), greenBigLeaveCornerSize, greenBigLeaveCornerSize);
    section_4_ctx.restore();


    section_4_ctx.save();
    section_4_ctx.translate( (centerX * 2) -40, (centerY * 2) - 40);
    section_4_ctx.rotate(Math.PI / 0.45);
    section_4_ctx.drawImage(roseImage, -(roseCornerSize/2) , -(roseCornerSize/2), roseCornerSize, roseCornerSize);
    section_4_ctx.restore();

    angleLeave += 1; // Incrementar el ángulo para la animación

    requestAnimationFrame(animate_section_4);
}
animate_section_4();

window.addEventListener("scroll", function() {
  const box2Top = parent_section_4_canvas.getBoundingClientRect().top;
  const textAnimate=document.querySelector('.section_4 > p')
  const bothCircles=this.document.querySelectorAll('.section_4 > span')
  const canvasVisibility=this.document.querySelector('.section_4 > canvas')
  if (box2Top <= window.innerHeight && box2Top >= 0) {
    bothCircles[0].classList.add('section_4-outer_circle')
    bothCircles[1].classList.add('section_4-inner_circle')
    textAnimate.classList.add('phrase_bible')
    canvasVisibility.classList.add('scale_section_4')
  }   
});

//Seccion 5
const parent_section_5_canvas = document.querySelector('.section_5');
const canvas_section_5 = document.getElementById('section_canvas_5');
const section_5_ctx = canvas_section_5.getContext('2d');


const get_width_section_5 = parent_section_5_canvas.offsetWidth;
const get_height_section_5 = parent_section_5_canvas.offsetHeight;

canvas_section_5.width = get_width_section_5;
canvas_section_5.height = get_height_section_5;
let angleRotationSection5=5;
function animate_section_5() {
  section_5_ctx.clearRect(0, 0, canvas_section_5.width, canvas_section_5.height);
  let roseCornerSize = 120;
  let greenBigLeaveCornerSize = 90;
  let mediumStickLeaveCornerSize=90;
  let whiteLeaveCornerSize=80;
  let tinyLeaveCornerSize=100;
  let redPointsLeaveSize=40;


  section_5_ctx.strokeStyle = '#9b5a01';
  section_5_ctx.lineWidth = 1;  
  section_5_ctx.save();  
  section_5_ctx.translate(0, 5);  
  section_5_ctx.rotate(15 * Math.PI / 180);  
  section_5_ctx.beginPath();
  section_5_ctx.moveTo(0, 0);
  section_5_ctx.lineTo(400, 0);
  section_5_ctx.stroke();
  section_5_ctx.restore();  

  section_5_ctx.strokeStyle = '#9b5a01';
  section_5_ctx.lineWidth = 1;  
  section_5_ctx.save();  
  section_5_ctx.translate(0, 100);  
  section_5_ctx.rotate(-30 * Math.PI / 180);  
  section_5_ctx.beginPath();
  section_5_ctx.moveTo(0, 0);
  section_5_ctx.lineTo(450, 0);
  section_5_ctx.stroke();
  section_5_ctx.restore();

  
  section_5_ctx.strokeStyle = '#9b5a01';
  section_5_ctx.lineWidth = 1;  
  section_5_ctx.save();  
  section_5_ctx.translate(0, (centerY * 2)- 100);  
  section_5_ctx.rotate(15 * Math.PI / 180);  
  section_5_ctx.beginPath();
  section_5_ctx.moveTo(0, 0);
  section_5_ctx.lineTo(400, 0);
  section_5_ctx.stroke();
  section_5_ctx.restore();

  section_5_ctx.strokeStyle = '#9b5a01';
  section_5_ctx.lineWidth = 1;  
  section_5_ctx.save();  
  section_5_ctx.translate(centerX, (centerY * 2));  
  section_5_ctx.rotate(-30 * Math.PI / 180);  
  section_5_ctx.beginPath();
  section_5_ctx.moveTo(0, 0);
  section_5_ctx.lineTo(450, 0);
  section_5_ctx.stroke();
  section_5_ctx.restore();

  section_5_ctx.save();
  section_5_ctx.translate((centerX * 2) - 160, 40);
  section_5_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotationSection5 + 220 ) * Math.PI / 180);  
  section_5_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
  section_5_ctx.restore();

  section_5_ctx.save();
  section_5_ctx.translate((centerX * 2) - 40, 160);
  section_5_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotationSection5 + 100 ) * Math.PI / 180);  
  section_5_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
  section_5_ctx.restore();

  section_5_ctx.save();
  section_5_ctx.translate((centerX * 2) - 30, 120);
  section_5_ctx.rotate((Math.sin(angleLeave * Math.PI / 360) * angleRotationSection5 + 320 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_5_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
  section_5_ctx.restore();


  section_5_ctx.save();
  section_5_ctx.translate((centerX * 2) - 95, 65);
  section_5_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotationSection5 + 0 ) * Math.PI / 180);  
  section_5_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveCornerSize / 2), -(tinyLeaveCornerSize / 2), tinyLeaveCornerSize, tinyLeaveCornerSize);
  section_5_ctx.restore();


  section_5_ctx.save();
  section_5_ctx.translate((centerX * 2) - 120, 40);
  section_5_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotationSection5 + 30 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_5_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
  section_5_ctx.restore();

  section_5_ctx.save();
  section_5_ctx.translate((centerX * 2) - 100, 100);
  section_5_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotationSection5 + 330 ) * Math.PI / 180);  
  section_5_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
  section_5_ctx.restore();


  section_5_ctx.save();
  section_5_ctx.translate( (centerX * 2) - 50, 100 );
  section_5_ctx.rotate((Math.sin((angleLeave) * Math.PI / 360) * angleRotationSection5 + 180 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_5_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveCornerSize / 2), -(greenBigLeaveCornerSize / 2), greenBigLeaveCornerSize, greenBigLeaveCornerSize);
  section_5_ctx.restore();


  section_5_ctx.save();
  section_5_ctx.translate((centerX * 2) - 40, 40);
  section_5_ctx.rotate(Math.PI * 1.8);
  section_5_ctx.drawImage(roseImage, -(roseCornerSize/2) , -(roseCornerSize/2), roseCornerSize, roseCornerSize);
  section_5_ctx.restore();

  // Racimo inferior
  section_5_ctx.save();
  section_5_ctx.translate(160,(centerY * 2) - 40);
  section_5_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotationSection5 + 25 ) * Math.PI / 180);  
  section_5_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
  section_5_ctx.restore();

  section_5_ctx.save();
  section_5_ctx.translate(40,(centerY * 2) - 160);
  section_5_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotationSection5 + 260 ) * Math.PI / 180);  
  section_5_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
  section_5_ctx.restore();

  section_5_ctx.save();
  section_5_ctx.translate(40,(centerY * 2) - 120);
  section_5_ctx.rotate((Math.sin(angleLeave * Math.PI / 360) * angleRotationSection5 + 100 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_5_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
  section_5_ctx.restore();


  section_5_ctx.save();
  section_5_ctx.translate(50,(centerY * 2) - 120);
  section_5_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotationSection5 + 180 ) * Math.PI / 180);  
  section_5_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveCornerSize / 2), -(tinyLeaveCornerSize / 2), tinyLeaveCornerSize, tinyLeaveCornerSize);
  section_5_ctx.restore();


  section_5_ctx.save();
  section_5_ctx.translate(110,(centerY * 2) - 40);
  section_5_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotationSection5 + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_5_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
  section_5_ctx.restore();

  section_5_ctx.save();
  section_5_ctx.translate(100,(centerY * 2) -  100);
  section_5_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotationSection5 + 160 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_5_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
  section_5_ctx.restore();


  section_5_ctx.save();
  section_5_ctx.translate( 100, (centerY * 2) - 45 );
  section_5_ctx.rotate((Math.sin((angleLeave) * Math.PI / 360) * angleRotationSection5 + 20 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_5_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveCornerSize / 2), -(greenBigLeaveCornerSize / 2), greenBigLeaveCornerSize, greenBigLeaveCornerSize);
  section_5_ctx.restore();


  section_5_ctx.save();
  section_5_ctx.translate(40, (centerY * 2) - 40);
  section_5_ctx.rotate(Math.PI * 0.8);
  section_5_ctx.drawImage(roseImage, -(roseCornerSize/2) , -(roseCornerSize/2), roseCornerSize, roseCornerSize);
  section_5_ctx.restore();

    angleLeave += 0.1; 

    requestAnimationFrame(animate_section_5);
}
animate_section_5()

const allTagsParentsAssist=document.querySelectorAll('.section_5--names_persons')
const velocity_text_parents=200;
const assistantsNames={
  husband_parents:{
    padre:'Jesus Montoya Sanchez',
    madre:'Leonarda Alarcon Cespedes'
  },
  wife_parents:{
    padre:'Leonardo Monzon Gutierrez',
    madre:'Carmen Enciso Solis'
  },
  god_parents:{
    padrino:'Antonio Prado Cervantes',
    madrina:'Maria Chavez Macedo'
  }
}
function animateTextWedding_section5(index) {
  let maxCharactersParentsHusband = Math.max(Object.values(assistantsNames["husband_parents"])[0].length, Object.values(assistantsNames["husband_parents"])[1].length);
  let maxCharactersParentsWife = Math.max(Object.values(assistantsNames["wife_parents"])[0].length, Object.values(assistantsNames["wife_parents"])[1].length);

  let maxCharacters = Math.max(maxCharactersParentsHusband, maxCharactersParentsWife);
  
  if (index < maxCharacters) {
    if (index < Object.values(assistantsNames["husband_parents"])[0].length) {
      allTagsParentsAssist[0].textContent += Object.values(assistantsNames["husband_parents"])[0][index];
    }
    if (index < Object.values(assistantsNames["husband_parents"])[1].length) {
      allTagsParentsAssist[1].textContent += Object.values(assistantsNames["husband_parents"])[1][index];
    }
    if (index < Object.values(assistantsNames["wife_parents"])[0].length) {
      allTagsParentsAssist[2].textContent += Object.values(assistantsNames["wife_parents"])[0][index];
    }
    if (index < Object.values(assistantsNames["wife_parents"])[1].length) {
      allTagsParentsAssist[3].textContent += Object.values(assistantsNames["wife_parents"])[1][index];
    }
    if (index < Object.values(assistantsNames["god_parents"])[0].length) {
      allTagsParentsAssist[4].textContent += Object.values(assistantsNames["god_parents"])[0][index];
    }
    if (index < Object.values(assistantsNames["god_parents"])[1].length) {
      allTagsParentsAssist[5].textContent += Object.values(assistantsNames["god_parents"])[1][index];
    }
    index++;
    setTimeout(function() {
      animateTextWedding_section5(index);
    }, velocity_text_parents);
  }
}

let executeTextSection_5=false
window.addEventListener("scroll", function() {
  const box2Top = parent_section_5_canvas.getBoundingClientRect().top;
  const canvasVisibility=this.document.querySelector('.section_5 > canvas')
  const animeTextTitle=this.document.querySelector('.section_5 > div > h3')
  const animeText=this.document.querySelector('.section_5--godparents_container > h3')
  if (box2Top <= window.innerHeight && box2Top >= 0 && !executeTextSection_5) {
   canvasVisibility.classList.add('scale_section_5')
   animeText.classList.add('section_5--title')
   animeTextTitle.classList.add('section_5--title')
   executeTextSection_5=true
  animateTextWedding_section5(0)
  }   
});

// Seccion 6
const parent_section_6_canvas = document.querySelector('.section_6');
const canvas_section_6 = document.getElementById('section_canvas_6');
const section_6_ctx = canvas_section_6.getContext('2d');


const get_width_section_6 = parent_section_6_canvas.offsetWidth;
const get_height_section_6 = parent_section_6_canvas.offsetHeight;

canvas_section_6.width = get_width_section_6;
canvas_section_6.height = get_height_section_6;


function animate_section_6() {
  section_6_ctx.clearRect(0, 0, canvas_section_6.width, canvas_section_6.height);
  let greenBigLeaveSize = 40;
  let littleStickLeaveSize=80;
  let mediumStickLeaveSize=75;
  let whiteLeaveSize=35;
  let whiteLeaveCornerSize=75;
  let tinyLeaveSize=30;
  let tinyLeaveCornerSize=120;
  let redPointsLeaveSize=35;
  let redPointsLeaveCornerSize=65;
  let roseBorderCircleSize = 60;
  

    section_6_ctx.save();
    section_6_ctx.translate(tinyLeaveCornerSize/2 ,  100);
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 260) * angleRotation + 320 ) * Math.PI / 180);  
    section_6_ctx.drawImage(tinyGreenLeaveImage_2, -(tinyLeaveCornerSize / 2), -(tinyLeaveCornerSize / 2), tinyLeaveCornerSize, tinyLeaveCornerSize);
    section_6_ctx.restore();
    section_6_ctx.save();

    section_6_ctx.save();
    section_6_ctx.translate(redPointsLeaveCornerSize / 2 + 25 ,  85 );
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 220 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_6_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveCornerSize / 2), -(redPointsLeaveCornerSize / 2), redPointsLeaveCornerSize,redPointsLeaveCornerSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate( whiteLeaveCornerSize / 2 - 30, 80);
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_6_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(centerX - 35 , centerY - 110);
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 260) * angleRotation + 0 ) * Math.PI / 180);  
    section_6_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
    section_6_ctx.restore();
    section_6_ctx.save();

    section_6_ctx.translate( centerX - 40,  centerY - 135 );
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 20 ) * Math.PI / 180);  
    section_6_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(centerX + 30 , centerY - 130 );
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 200) * angleRotation  +  50 ) * Math.PI / 180);  
    section_6_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(centerX + 10 , centerY - 130 );
    section_6_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 100 ) * Math.PI / 180);  
    section_6_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
    section_6_ctx.restore(); 

    section_6_ctx.save();
    section_6_ctx.translate( centerX - 35 , centerY - 135 );
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 0 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_6_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(centerX - 35 ,  centerY - 130 );
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 0 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_6_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize,redPointsLeaveSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(centerX , centerY - 80 );
    section_6_ctx.rotate(Math.PI * 2.2);
    section_6_ctx.drawImage(roseImage, -70, -70, roseBorderCircleSize,roseBorderCircleSize);
    section_6_ctx.restore();


    //Rosa inferior

    section_6_ctx.save();
    section_6_ctx.translate(centerX + 35 , centerY + 110);
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 260) * angleRotation + 180 ) * Math.PI / 180);  
    section_6_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate( centerX + 35,  centerY  +  130);
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation - 160 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_6_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(centerX - 35 , centerY + 130);
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 200) * angleRotation + - 130 ) * Math.PI / 180);  
    section_6_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(centerX  - 20 , centerY  + 140);
    section_6_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 240 ) * Math.PI / 180);  
    section_6_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate( centerX + 40, centerY + 130);
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_6_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(centerX + 40,  centerY + 130);
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_6_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(centerX , centerY + 80);
    section_6_ctx.rotate(Math.PI * 1.2);
    section_6_ctx.drawImage(roseImage, -70, -70, roseBorderCircleSize, roseBorderCircleSize);
    section_6_ctx.restore();

    angleLeave += 1; 
    
      requestAnimationFrame(animate_section_6);
    
   
}
animate_section_6()     
const get_section_6_text=document.querySelector('.section_6 > p')
let text_wedding_section_6='Estas cordialmente invitado a nuestra boda'
function animateTextWedding_section6(index) {
  if (index < text_wedding_section_6.length) {
    get_section_6_text.textContent += text_wedding_section_6[index];
    index++;
    setTimeout(function() {
      animateTextWedding_section6(index);
    }, 150);
  }
}

let executeTextSection_6=false
window.addEventListener("scroll", function() {
  const box2Top = parent_section_6_canvas.getBoundingClientRect().top;
  const squaresImage=this.document.querySelectorAll('.section_6 > div')
  const animateCanvas=this.document.querySelector('.section_6 > canvas')
  const imageAnimate=this.document.querySelector('.section_6 > img')
  const animateText=this.document.querySelector('.section_6 > p')
  if (box2Top <= window.innerHeight && box2Top >= 0 && !executeTextSection_6) {
   animateText.classList.add('section_3--wedding-text')
   squaresImage[0].classList.add('first_square')
   squaresImage[1].classList.add('second_square')
   imageAnimate.classList.add('img_wedding')
   animateCanvas.classList.add('scale_section_6')
   executeTextSection_6=true
   animateTextWedding_section6(0)

  }   
});
// Seccion 7
const parent_section_7_canvas = document.querySelector('.section_7');
const canvas_section_7 = document.getElementById('section_canvas_7');
const section_7_ctx = canvas_section_7.getContext('2d');


const get_width_section_7 = parent_section_7_canvas.offsetWidth;
const get_height_section_7 = parent_section_7_canvas.offsetHeight;

canvas_section_7.width = get_width_section_7;
canvas_section_7.height = get_height_section_7;
let angleRotationSection_7=3
function animate_section_7(){
  section_7_ctx.clearRect(0, 0, canvas_section_7.width, canvas_section_7.height);
  let roseBorderCircleSize = 100;
  let whiteLeaveSize= 60;
  let tinyLeaveSize= 100;
  let redPointsLeaveSize=30;

  section_7_ctx.save();
  section_7_ctx.translate(centerX + 65, tinyLeaveSize / 2  );
  section_7_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 - 30 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_7_ctx.drawImage(tinyGreenLeaveImage_2, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
  section_7_ctx.restore();

  section_7_ctx.save();
  section_7_ctx.translate(centerX - 60, tinyLeaveSize / 2 );
  section_7_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 + 30 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_7_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
  section_7_ctx.restore();

  section_7_ctx.save();
  section_7_ctx.translate(centerX - 40, whiteLeaveSize / 2 );
  section_7_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 + 30 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_7_ctx.drawImage(whiteLeaveImage, -whiteLeaveSize / 2, -whiteLeaveSize / 2, whiteLeaveSize, whiteLeaveSize);
  section_7_ctx.restore();

  section_7_ctx.save();
  section_7_ctx.translate(centerX + 40, whiteLeaveSize/2);
  section_7_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 + 230 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_7_ctx.drawImage(whiteLeaveImage, -whiteLeaveSize / 2, -whiteLeaveSize / 2, whiteLeaveSize, whiteLeaveSize);
  section_7_ctx.restore();

  section_7_ctx.save();
  section_7_ctx.translate(centerX - 10, roseBorderCircleSize -20 );
  section_7_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 - 30 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_7_ctx.drawImage(redPointsLeaveImage, -redPointsLeaveSize / 2, -redPointsLeaveSize / 2, redPointsLeaveSize, redPointsLeaveSize);
  section_7_ctx.restore();

  section_7_ctx.save();
  section_7_ctx.translate(centerX , roseBorderCircleSize/2 - 20);
  section_7_ctx.rotate(Math.PI * 1.3);
  section_7_ctx.drawImage(roseImage, -roseBorderCircleSize/2, -roseBorderCircleSize/2, roseBorderCircleSize, roseBorderCircleSize);
  section_7_ctx.restore();

  section_7_ctx.save();
  section_7_ctx.translate(centerX - 60, centerY * 2 -tinyLeaveSize/2);
  section_7_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7  + 150 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_7_ctx.drawImage(tinyGreenLeaveImage_2, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
  section_7_ctx.restore();

  section_7_ctx.save();
  section_7_ctx.translate(centerX + 65, centerY * 2  -tinyLeaveSize/2);
  section_7_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 + 220 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_7_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
  section_7_ctx.restore();

  section_7_ctx.save();
  section_7_ctx.translate(centerX + 40,centerY * 2 -whiteLeaveSize/2);
  section_7_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 + 230 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_7_ctx.drawImage(whiteLeaveImage, -whiteLeaveSize / 2, -whiteLeaveSize / 2, whiteLeaveSize, whiteLeaveSize);
  section_7_ctx.restore();

  section_7_ctx.save();
  section_7_ctx.translate(centerX - 40,centerY * 2 -whiteLeaveSize/2);
  section_7_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 + 30 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_7_ctx.drawImage(whiteLeaveImage, -whiteLeaveSize / 2, -whiteLeaveSize / 2, whiteLeaveSize, whiteLeaveSize);
  section_7_ctx.restore();

  section_7_ctx.save();
  section_7_ctx.translate(centerX + 10,centerY*2 - roseBorderCircleSize +20 );
  section_7_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 + 130 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_7_ctx.drawImage(redPointsLeaveImage, -redPointsLeaveSize / 2, -redPointsLeaveSize / 2, redPointsLeaveSize, redPointsLeaveSize);
  section_7_ctx.restore();

  section_7_ctx.save();
  section_7_ctx.translate(centerX , centerY * 2 - 30);
  section_7_ctx.rotate(Math.PI * 0.3);
  section_7_ctx.drawImage(roseImage, -roseBorderCircleSize/2, -roseBorderCircleSize/2, roseBorderCircleSize, roseBorderCircleSize);
  section_7_ctx.restore();

  requestAnimationFrame(animate_section_7)
}
animate_section_7()
window.addEventListener("scroll", function() {
  const box2Top = parent_section_7_canvas.getBoundingClientRect().top;
  const animateSection=this.document.querySelector('.section_7 > section')
  const animateCanvas=this.document.querySelector('.section_7 > canvas')
  if (box2Top <= window.innerHeight && box2Top >= 0 ) {
   animateSection.classList.add('scale_section_7')
   animateCanvas.classList.add('canvas_section_7')
  }   
});

//Seccion 8
const parent_section_8_canvas = document.querySelector('.section_8');
const canvas_section_8 = document.getElementById('section_canvas_8');
const section_8_ctx = canvas_section_8.getContext('2d');


const get_width_section_8 = parent_section_8_canvas.offsetWidth;
const get_height_section_8 = parent_section_8_canvas.offsetHeight;

canvas_section_8.width = get_width_section_8;
canvas_section_8.height = get_height_section_8;

function animate_section_8(){
  section_8_ctx.clearRect(0, 0, canvas_section_8.width, canvas_section_8.height);
  let mediumStickLeaveSize = 120;
  let whiteLeaveSize= 100;
  let tinyLeaveSize= 120;
  let redPointsLeaveSize=60;
  let roseBorderCircleSize=90;
  let greenBigLeaveSize= 100;

  section_8_ctx.save();
  section_8_ctx.translate(centerX - 30 , tinyLeaveSize/2 );
  section_8_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 + 60 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_8_ctx.drawImage(tinyGreenLeaveImage_2, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
  section_8_ctx.restore();

  section_8_ctx.save();
  section_8_ctx.translate(centerX - 75, mediumStickLeaveSize/2  );
  section_8_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 + 300 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_8_ctx.drawImage(mediumStickGreenImage_1, -mediumStickLeaveSize / 2, -mediumStickLeaveSize / 2,mediumStickLeaveSize,mediumStickLeaveSize);
  section_8_ctx.restore();

  section_8_ctx.save();
  section_8_ctx.translate(centerX + 75, mediumStickLeaveSize/2  );
  section_8_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 + 60 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_8_ctx.drawImage(mediumStickGreenImage, -mediumStickLeaveSize / 2, -mediumStickLeaveSize / 2,mediumStickLeaveSize,mediumStickLeaveSize);
  section_8_ctx.restore();

  section_8_ctx.save();
  section_8_ctx.translate(centerX - 40,whiteLeaveSize/2);
  section_8_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 + 30 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_8_ctx.drawImage(whiteLeaveImage, -whiteLeaveSize / 2, -whiteLeaveSize / 2, whiteLeaveSize, whiteLeaveSize);
  section_8_ctx.restore();

  section_8_ctx.save();
  section_8_ctx.translate(centerX + 40,whiteLeaveSize/2);
  section_8_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 + 230 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_8_ctx.drawImage(whiteLeaveImage, -whiteLeaveSize / 2, -whiteLeaveSize / 2, whiteLeaveSize, whiteLeaveSize);
  section_8_ctx.restore();

  section_8_ctx.save();
  section_8_ctx.translate(centerX + 105,centerY*2 - mediumStickLeaveSize/2  );
  section_8_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 + 130 ) * Math.PI / 180);  
  section_8_ctx.drawImage(mediumStickGreenImage_1, -mediumStickLeaveSize / 2, -mediumStickLeaveSize / 2,mediumStickLeaveSize,mediumStickLeaveSize);
  section_8_ctx.restore();

  section_8_ctx.save();
  section_8_ctx.translate(centerX - 105,centerY*2 - mediumStickLeaveSize/2  );
  section_8_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 + 230 ) * Math.PI / 180);  
  section_8_ctx.drawImage(mediumStickGreenImage, -mediumStickLeaveSize / 2, -mediumStickLeaveSize / 2,mediumStickLeaveSize,mediumStickLeaveSize);
  section_8_ctx.restore();

  section_8_ctx.save();
  section_8_ctx.translate(centerX - 40,centerY * 2 -whiteLeaveSize/2);
  section_8_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 + 30 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_8_ctx.drawImage(whiteLeaveImage, -whiteLeaveSize / 2, -whiteLeaveSize / 2, whiteLeaveSize, whiteLeaveSize);
  section_8_ctx.restore();

  section_8_ctx.save();
  section_8_ctx.translate(centerX + 40,centerY * 2 -whiteLeaveSize/2);
  section_8_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_8_ctx.drawImage(whiteLeaveImage, -whiteLeaveSize / 2, -whiteLeaveSize / 2, whiteLeaveSize, whiteLeaveSize);
  section_8_ctx.restore();

  section_8_ctx.save();
  section_8_ctx.translate(centerX + 20,greenBigLeaveSize/2);
  section_8_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 + 130 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_8_ctx.drawImage(biggreenLeaveImage, -greenBigLeaveSize / 2, -greenBigLeaveSize / 2, greenBigLeaveSize, greenBigLeaveSize);
  section_8_ctx.restore();

  section_8_ctx.save();
  section_8_ctx.translate(centerX - 20,centerY * 2 -greenBigLeaveSize/2);
  section_8_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 + 310 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_8_ctx.drawImage(biggreenLeaveImage, -greenBigLeaveSize / 2, -greenBigLeaveSize / 2, greenBigLeaveSize, greenBigLeaveSize);
  section_8_ctx.restore();

  section_8_ctx.save();
  section_8_ctx.translate(centerX , roseBorderCircleSize  );
  section_8_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 + 290 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_8_ctx.drawImage(redPointsLeaveImage, -redPointsLeaveSize / 2, -redPointsLeaveSize / 2, redPointsLeaveSize, redPointsLeaveSize);
  section_8_ctx.restore();

  section_8_ctx.save();
  section_8_ctx.translate(centerX ,centerY*2 -roseBorderCircleSize  );
  section_8_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 + 110 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_8_ctx.drawImage(redPointsLeaveImage, -redPointsLeaveSize / 2, -redPointsLeaveSize / 2, redPointsLeaveSize, redPointsLeaveSize);
  section_8_ctx.restore();

  section_8_ctx.save();
  section_8_ctx.translate(centerX , roseBorderCircleSize/2 );
  section_8_ctx.rotate(Math.PI * 1.3);
  section_8_ctx.drawImage(roseImage, -roseBorderCircleSize/2, -roseBorderCircleSize/2, roseBorderCircleSize, roseBorderCircleSize);
  section_8_ctx.restore();

  section_8_ctx.save();
  section_8_ctx.translate(centerX ,centerY*2 - roseBorderCircleSize/2 + 20);
  section_8_ctx.rotate(Math.PI * 0.3);
  section_8_ctx.drawImage(roseImage, -roseBorderCircleSize/2, -roseBorderCircleSize/2, roseBorderCircleSize, roseBorderCircleSize);
  section_8_ctx.restore();

  requestAnimationFrame(animate_section_8)
}
animate_section_8()
//Seccion 9
const parent_section_9_canvas = document.querySelector('.section_9');
const canvas_section_9 = document.getElementById('section_canvas_9');
const section_9_ctx = canvas_section_9.getContext('2d');


const get_width_section_9 = parent_section_9_canvas.offsetWidth;
const get_height_section_9 = parent_section_9_canvas.offsetHeight;

canvas_section_9.width = get_width_section_9;
canvas_section_9.height = get_height_section_9;

function animate_section_9(){
  section_9_ctx.clearRect(0, 0, canvas_section_9.width, canvas_section_9.height);
  let mediumStickLeaveSize = 120;
  let whiteLeaveSize= 100;
  let tinyLeaveSize= 140;
  let redPointsLeaveSize=60;
  let roseBorderCircleSize=90;
  let greenBigLeaveSize= 100;

  section_9_ctx.save();
  section_9_ctx.translate(centerX + 65 , tinyLeaveSize/2 - 20 );
  section_9_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 - 40 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_9_ctx.drawImage(tinyGreenLeaveImage_2, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
  section_9_ctx.restore();

  section_9_ctx.save();
  section_9_ctx.translate(centerX - 65 , tinyLeaveSize/2 - 20 );
  section_9_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 + 40 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_9_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
  section_9_ctx.restore();


  section_9_ctx.save();
  section_9_ctx.translate(centerX + 40,whiteLeaveSize/2);
  section_9_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 + 230 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_9_ctx.drawImage(whiteLeaveImage, -whiteLeaveSize / 2, -whiteLeaveSize / 2, whiteLeaveSize, whiteLeaveSize);
  section_9_ctx.restore();

  section_9_ctx.save();
  section_9_ctx.translate(centerX - 40,whiteLeaveSize/2 - 20);
  section_9_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 + 30 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_9_ctx.drawImage(whiteLeaveImage, -whiteLeaveSize / 2, -whiteLeaveSize / 2, whiteLeaveSize, whiteLeaveSize);
  section_9_ctx.restore();


  section_9_ctx.save();
  section_9_ctx.translate(centerX , roseBorderCircleSize/2 - 20);
  section_9_ctx.rotate(Math.PI * 1.3);
  section_9_ctx.drawImage(roseImage, -roseBorderCircleSize/2, -roseBorderCircleSize/2, roseBorderCircleSize, roseBorderCircleSize);
  section_9_ctx.restore();

  //Parte inferior 
  section_9_ctx.save();
  section_9_ctx.translate(centerX*2 -tinyLeaveSize/2, centerY*2 - 150 );
  section_9_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 + 140 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_9_ctx.drawImage(tinyGreenLeaveImage_2, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
  section_9_ctx.restore();

  section_9_ctx.save();
  section_9_ctx.translate(centerX*2 -70 ,centerY*2 -150);
  section_9_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 + 30 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_9_ctx.drawImage(redPointsLeaveImage, -redPointsLeaveSize / 2, -redPointsLeaveSize / 2, redPointsLeaveSize, redPointsLeaveSize);
  section_9_ctx.restore();

  section_9_ctx.save();
  section_9_ctx.translate(centerX*2 - 20,centerY*2 - 150);
  section_9_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 + 30 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_9_ctx.drawImage(whiteLeaveImage, -whiteLeaveSize / 2, -whiteLeaveSize / 2, whiteLeaveSize, whiteLeaveSize);
  section_9_ctx.restore();

  
  requestAnimationFrame(animate_section_9)
}
animate_section_9()