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
  function drawFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const cardLogoSize=containerWidth + 100;//pixeles
    ctx.drawImage(cardLogo, (containerWidth - cardLogoSize) / 2, (containerHeight - cardLogoSize) / 2 + 150 , cardLogoSize, cardLogoSize);
    requestAnimationFrame(drawFrame);
  }
  drawFrame();
/*Seccion 2, otro canvas aparte */
const parent_section_2_canvas = document.querySelector('.section_2');
const canvas_section_2 = document.getElementById('section_canvas_2');
const section_2_ctx = canvas_section_2.getContext("2d");

const get_width_section_2 = parent_section_2_canvas.offsetWidth;
const get_height_section_2 = parent_section_2_canvas.offsetHeight;

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
    let redPointsLeaveSize=70;
    // Primera Linea
    section_2_ctx.strokeStyle = '#9b5a01';
    section_2_ctx.lineWidth = 2;  
    section_2_ctx.save();  
    section_2_ctx.translate(0, 150);  
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
    section_2_ctx.translate(0, 40);  
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
    section_2_ctx.translate(0, centerY*2 - 20);  
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
    section_2_ctx.translate(0, centerY*2 - 150);  
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
    section_2_ctx.translate(190, 85);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 30 ) * Math.PI / 180);  
    section_2_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(60, 210);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 140 ) * Math.PI / 180);  
    section_2_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate( 40, 150);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 10 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate( 110,  185);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 260 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveCornerSize / 2), -(littleStickLeaveCornerSize / 2), littleStickLeaveCornerSize, littleStickLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(160, 120);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 270 ) * Math.PI / 180);  
    section_2_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveCornerSize / 2), -(tinyLeaveCornerSize / 2), tinyLeaveCornerSize, tinyLeaveCornerSize);
    section_2_ctx.restore();


    section_2_ctx.save();
    section_2_ctx.translate( 120, 90);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_2_ctx.restore();


    
    section_2_ctx.save();
    section_2_ctx.translate(150,  150);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_2_ctx.restore();


    section_2_ctx.save();
    section_2_ctx.translate(60, 95 );
    section_2_ctx.rotate((Math.sin((angleLeave) * Math.PI / 280) * angleRotation - 20 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveCornerSize / 2), -(greenBigLeaveCornerSize / 2), greenBigLeaveCornerSize, greenBigLeaveCornerSize);
    section_2_ctx.restore();


    section_2_ctx.save();
    section_2_ctx.translate( 75, 130);
    section_2_ctx.rotate(Math.PI / 1);
    section_2_ctx.drawImage(roseImage, -(roseCornerSize/2) , -(roseCornerSize/2), roseCornerSize, roseCornerSize);
    section_2_ctx.restore();
    //Rosa Inferior
    section_2_ctx.save();
    section_2_ctx.translate( centerX*2 - 190, centerY*2 - 80);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 230 ) * Math.PI / 180);  
    section_2_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX*2 - 40, centerY*2 - 200);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 320 ) * Math.PI / 180);  
    section_2_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX*2 - 160, centerY*2 - 90 );
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 80 ) * Math.PI / 180);  
    section_2_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveCornerSize / 2), -(tinyLeaveCornerSize / 2), tinyLeaveCornerSize, tinyLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX*2 - 120, centerY*2 - 70);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 10 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate( centerX*2 - 80,  centerY*2 - 180) ;
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 100 ) * Math.PI / 180);  
    section_2_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveCornerSize / 2), -(littleStickLeaveCornerSize / 2), littleStickLeaveCornerSize, littleStickLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX*2 - 50, centerY*2 - 130);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX*2 - 130,  centerY*2 - 150);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 60 ) * Math.PI / 180);  
    section_2_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX*2 - 55,centerY*2 - 95 );
    section_2_ctx.rotate((Math.sin((angleLeave) * Math.PI / 280) * angleRotation + 140 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_2_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveCornerSize / 2), -(greenBigLeaveCornerSize / 2), greenBigLeaveCornerSize, greenBigLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate(centerX*2 - 75, centerY*2 - 110);
    section_2_ctx.rotate(Math.PI * 0.15);
    section_2_ctx.drawImage(roseImage, -(roseCornerSize/2) , -(roseCornerSize/2), roseCornerSize, roseCornerSize);
    section_2_ctx.restore();

    angleLeave += 1; // Incrementar el ángulo para la animación

    requestAnimationFrame(animate_1);
}
animate_1();


let executeTextSection_2=false
window.addEventListener("scroll", function() {
  const box2Top = parent_section_2_canvas.getBoundingClientRect().top + parent_section_2_canvas.offsetHeight/2;
  const textAnimate=this.document.querySelector('.section_2 > p')
  const bothCircles=this.document.querySelectorAll('.section_2 > span')
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
const get_width_section_3 = parent_section_3_canvas.offsetWidth;
const get_height_section_3 = parent_section_3_canvas.offsetHeight;

canvas_section_3.width = get_width_section_3;
canvas_section_3.height = get_height_section_3;

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
    section_3_ctx.translate( centerX - 150,  centerY - 125 );
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 0 ) * Math.PI / 180);  
    section_3_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX - 50 , centerY - 160 );
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 200) * angleRotation  +  30 ) * Math.PI / 180);  
    section_3_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX - 80 , centerY - 150 )
    section_3_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 100 ) * Math.PI / 180);  
    section_3_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
    section_3_ctx.restore(); 

    section_3_ctx.save();
    section_3_ctx.translate( centerX - 130 , centerY - 145 );
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation - 10 ) * Math.PI / 180);  
    section_3_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX - 130 ,  centerY - 145 );
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation - 10 ) * Math.PI / 180);  
    section_3_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize,redPointsLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX - 90 , centerY - 100 );
    section_3_ctx.rotate(Math.PI * 2.2);
    section_3_ctx.drawImage(roseImage, -70, -70, roseBorderCircleSize,roseBorderCircleSize);
    section_3_ctx.restore();

    //Rosa inferior
    section_3_ctx.save();
    section_3_ctx.translate( centerX + 150,  centerY  +  125);
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation - 190 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_3_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX + 60 , centerY + 170);
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation  - 160 ) * Math.PI / 180);  
    section_3_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX  + 80 , centerY  + 160);
    section_3_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 240 ) * Math.PI / 180);  
    section_3_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate( centerX + 140, centerY + 140);
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 180 ) * Math.PI / 180); 
    section_3_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX + 140,  centerY + 140);
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 180 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_3_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX + 100 , centerY + 100);
    section_3_ctx.rotate(Math.PI * 1.2);
    section_3_ctx.drawImage(roseImage, -70, -70, roseBorderCircleSize, roseBorderCircleSize);
    section_3_ctx.restore();
    //Flores Laterales
    section_3_ctx.save();
    section_3_ctx.translate(tinyLeaveSize/2 + 40, centerY*2 - 140 );
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 220 ) * Math.PI / 180);  
    section_3_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate( littleStickLeaveSize/2 + 40,  centerY*2 - 90);
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation - 110 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_3_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(redPointsLeaveSize/2 + 40,  centerY*2 - 100);
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 180 ) * Math.PI / 180);  
    section_3_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize*2, redPointsLeaveSize*2);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate( whiteLeaveSize/2 , centerY*2 - 100 );
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 200 ) * Math.PI / 180);  
    section_3_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize*2, whiteLeaveSize*2);
    section_3_ctx.restore();


    section_3_ctx.save();
    section_3_ctx.translate(centerX*2 - 80 , centerY*2 - 140 );
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 140 ) * Math.PI / 180);  
    section_3_ctx.drawImage(tinyGreenLeaveImage_2, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
    section_3_ctx.restore();
    
    section_3_ctx.save();
    section_3_ctx.translate(centerX*2 - 80 ,  centerY*2 - 90);
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation - 0 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_3_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX*2 - 60 ,  centerY*2 - 140);
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 0 ) * Math.PI / 180);  
    section_3_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize*2, redPointsLeaveSize*2);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX*2 - whiteLeaveSize/2 , centerY*2 - 140 );
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
    section_4_ctx.lineWidth = 2;  
    section_4_ctx.save();  
    section_4_ctx.translate(0, 150);  
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
    section_4_ctx.translate(0, 40);  
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
    section_4_ctx.translate(0, centerY*2 - 20);  
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
    section_4_ctx.translate(0, centerY*2 - 150);  
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
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 85 ) * Math.PI / 180);  // Rota el contexto con una animación suave
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
    section_4_ctx.translate(190, 85);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 30 ) * Math.PI / 180);  
    section_4_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate(60, 210);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 140 ) * Math.PI / 180);  
    section_4_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate( 40, 150);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 10 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate( 110,  185);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 260 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveCornerSize / 2), -(littleStickLeaveCornerSize / 2), littleStickLeaveCornerSize, littleStickLeaveCornerSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate(160, 120);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 270 ) * Math.PI / 180);  
    section_4_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveCornerSize / 2), -(tinyLeaveCornerSize / 2), tinyLeaveCornerSize, tinyLeaveCornerSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate( 120, 90);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate(150,  150);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_4_ctx.restore();


    section_4_ctx.save();
    section_4_ctx.translate(60, 95 );
    section_4_ctx.rotate((Math.sin((angleLeave) * Math.PI / 280) * angleRotation - 20 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveCornerSize / 2), -(greenBigLeaveCornerSize / 2), greenBigLeaveCornerSize, greenBigLeaveCornerSize);
    section_4_ctx.restore();


    section_4_ctx.save();
    section_4_ctx.translate( 75, 130);
    section_4_ctx.rotate(Math.PI / 1);
    section_4_ctx.drawImage(roseImage, -(roseCornerSize/2) , -(roseCornerSize/2), roseCornerSize, roseCornerSize);
    section_4_ctx.restore();

    // Corner Rosa inferior

    section_4_ctx.save();
    section_4_ctx.translate( centerX*2 - 190, centerY*2 - 80);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 230 ) * Math.PI / 180);  
    section_4_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate(centerX*2 - 40, centerY*2 - 200);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 320 ) * Math.PI / 180);  
    section_4_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate(centerX*2 - 160, centerY*2 - 90 );
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 80 ) * Math.PI / 180);  
    section_4_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveCornerSize / 2), -(tinyLeaveCornerSize / 2), tinyLeaveCornerSize, tinyLeaveCornerSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate(centerX*2 - 120, centerY*2 - 70);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 10 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate( centerX*2 - 80,  centerY*2 - 180) ;
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 100 ) * Math.PI / 180);  
    section_4_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveCornerSize / 2), -(littleStickLeaveCornerSize / 2), littleStickLeaveCornerSize, littleStickLeaveCornerSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate(centerX*2 - 50, centerY*2 - 130);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate(centerX*2 - 130,  centerY*2 - 150);
    section_4_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 60 ) * Math.PI / 180);  
    section_4_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate(centerX*2 - 55,centerY*2 - 95 );
    section_4_ctx.rotate((Math.sin((angleLeave) * Math.PI / 280) * angleRotation + 140 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_4_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveCornerSize / 2), -(greenBigLeaveCornerSize / 2), greenBigLeaveCornerSize, greenBigLeaveCornerSize);
    section_4_ctx.restore();

    section_4_ctx.save();
    section_4_ctx.translate(centerX*2 - 75, centerY*2 - 110);
    section_4_ctx.rotate(Math.PI * 0.15);
    section_4_ctx.drawImage(roseImage, -(roseCornerSize/2) , -(roseCornerSize/2), roseCornerSize, roseCornerSize);
    section_4_ctx.restore();

    angleLeave += 1; // Incrementar el ángulo para la animación

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
  const box2Top = parent_section_5_canvas.getBoundingClientRect().top + parent_section_5_canvas.offsetHeight/2;
  const canvasVisibility=this.document.querySelector('.section_5 > canvas')
  const animeTextTitle=this.document.querySelector('.section_5 > div > h3')
  const animeText=this.document.querySelector('.section_5--godparents_container > h3')
  const animateImages=this.document.querySelectorAll('.section_5 > img')
  if (box2Top <= window.innerHeight && box2Top >= 0 && !executeTextSection_5) {
   canvasVisibility.classList.add('scale_section_5')
   animeText.classList.add('section_5--title')
   animeTextTitle.classList.add('section_5--title')
   animateImages[0].classList.add('img_bg_stain_1')
   animateImages[1].classList.add('img_bg_stain_2')
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
  let greenBigLeaveSize = 50;
  let littleStickLeaveSize=90;
  let mediumStickLeaveSize=85;
  let whiteLeaveSize=45;
  let whiteLeaveCornerSize=75;
  let tinyLeaveCornerSize=120;
  let redPointsLeaveSize=45;
  let redPointsLeaveCornerSize=65;
  let roseBorderCircleSize = 60;
  let tinyLeaveSize=60;

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

    //Rosa superior
    section_6_ctx.save();
    section_6_ctx.translate( centerX - 140,  centerY - 125 );
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 0 ) * Math.PI / 180);  
    section_6_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(centerX - 40 , centerY - 160 );
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 200) * angleRotation  +  30 ) * Math.PI / 180);  
    section_6_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(centerX - 70 , centerY - 150 )
    section_6_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 100 ) * Math.PI / 180);  
    section_6_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
    section_6_ctx.restore(); 

    section_6_ctx.save();
    section_6_ctx.translate( centerX - 120 , centerY - 145 );
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation - 10 ) * Math.PI / 180);  
    section_6_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(centerX - 120 ,  centerY - 145 );
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation - 10 ) * Math.PI / 180);  
    section_6_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize,redPointsLeaveSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(centerX - 80 , centerY - 100 );
    section_6_ctx.rotate(Math.PI * 2.2);
    section_6_ctx.drawImage(roseImage, -70, -70, roseBorderCircleSize,roseBorderCircleSize);
    section_6_ctx.restore();
    //Rosa inferior
    section_6_ctx.save();
    section_6_ctx.translate( centerX + 150,  centerY  +  105);
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation - 190 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_6_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(centerX + 50 , centerY + 170);
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation  - 160 ) * Math.PI / 180);  
    section_6_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(centerX  + 70 , centerY  + 160);
    section_6_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 240 ) * Math.PI / 180);  
    section_6_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate( centerX + 130, centerY + 140);
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 180 ) * Math.PI / 180); 
    section_6_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(centerX + 130,  centerY + 140);
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 180 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_6_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(centerX + 90 , centerY + 100);
    section_6_ctx.rotate(Math.PI * 1.2);
    section_6_ctx.drawImage(roseImage, -70, -70, roseBorderCircleSize, roseBorderCircleSize);
    section_6_ctx.restore();
    //Flores Laterales
    section_6_ctx.save();
    section_6_ctx.translate(tinyLeaveSize/2 + 40, centerY*2 - 140 );
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 220 ) * Math.PI / 180);  
    section_6_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate( littleStickLeaveSize/2 + 40,  centerY*2 - 90);
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation - 110 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_6_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(redPointsLeaveSize/2 + 40,  centerY*2 - 100);
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 180 ) * Math.PI / 180);  
    section_6_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize*2, redPointsLeaveSize*2);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate( whiteLeaveSize/2 , centerY*2 - 100 );
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 200 ) * Math.PI / 180);  
    section_6_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize*2, whiteLeaveSize*2);
    section_6_ctx.restore();


    section_6_ctx.save();
    section_6_ctx.translate(centerX*2 - 80 , centerY*2 - 140 );
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 140 ) * Math.PI / 180);  
    section_6_ctx.drawImage(tinyGreenLeaveImage_2, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
    section_6_ctx.restore();
    
    section_6_ctx.save();
    section_6_ctx.translate(centerX*2 - 65 ,  centerY*2 - 90);
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation - 0 ) * Math.PI / 180);  // Rota el contexto con una animación suave
    section_6_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(centerX*2 - 60 ,  centerY*2 - 140);
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 0 ) * Math.PI / 180);  
    section_6_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize*2, redPointsLeaveSize*2);
    section_6_ctx.restore();

    section_6_ctx.save();
    section_6_ctx.translate(centerX*2 - whiteLeaveSize/2 , centerY*2 - 140 );
    section_6_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 20 ) * Math.PI / 180);  
    section_6_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize*2, whiteLeaveSize*2);
    section_6_ctx.restore();


    
    angleLeave += 1; 
    
      requestAnimationFrame(animate_section_6);
    
   
}
animate_section_6()     


let executeTextSection_6=false
window.addEventListener("scroll", function() {
  const box2Top = parent_section_6_canvas.getBoundingClientRect().top + parent_section_6_canvas.offsetHeight/2;
  const squaresImage=this.document.querySelectorAll('.section_6 > div')
  const animateCanvas=this.document.querySelector('.section_6 > canvas')
  const imageAnimate=this.document.querySelectorAll('.section_6 > img')
  if (box2Top <= window.innerHeight && box2Top >= 0 && !executeTextSection_6) {
   squaresImage[0].classList.add('first_square')
   squaresImage[1].classList.add('second_square')
   imageAnimate[0].classList.add('img_wedding')
   imageAnimate[1].classList.add('section_6--recent_wedding')
   imageAnimate[2].classList.add('img_bg_stain_1')
   imageAnimate[3].classList.add('img_bg_stain_2')
   animateCanvas.classList.add('scale_section_6')
   executeTextSection_6=true
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
let executeTextSection_7= false
window.addEventListener("scroll", function() {
  const box2Top = parent_section_7_canvas.getBoundingClientRect().top + parent_section_7_canvas.offsetHeight/2;
  const animateSection=this.document.querySelector('.section_7 > section')
  const animateCanvas=this.document.querySelector('.section_7 > canvas')
  const animateImages=this.document.querySelectorAll('.section_7 > img')
  if (box2Top <= window.innerHeight && box2Top >= 0 && !executeTextSection_7) {
   animateSection.classList.add('scale_section_7')
   animateCanvas.classList.add('canvas_section_7')
   animateImages[0].classList.add('img_bg_stain_1')
   animateImages[1].classList.add('img_bg_stain_2')
   executeTextSection_7=true
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
let executeTextSection_8=false
window.addEventListener("scroll", function() {
  const box2Top = parent_section_8_canvas.getBoundingClientRect().top + parent_section_8_canvas.offsetHeight/2;
  const animateSection=this.document.querySelector('.section_8 > section')
  const animateCanvas=this.document.querySelector('.section_8 > canvas')
  const animateInnerBox=this.document.querySelector('.section_8 > section > div')
  const animateImages=this.document.querySelectorAll('.section_8 > img')
  if (box2Top <= window.innerHeight && box2Top >= 0 ) {
   animateSection.classList.add('scale_section_8')
   animateCanvas.classList.add('canvas_section_7')
   animateInnerBox.classList.add('section_8--container_info')
   animateImages[0].classList.add('img_bg_stain_1')
   animateImages[1].classList.add('img_bg_stain_2')
   executeTextSection_8=true
  }   
});
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
  let whiteLeaveSize= 100;
  let tinyLeaveSize= 140;
  let redPointsLeaveSize=60;
  let roseBorderCircleSize=90;

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


const get_width_section_10 = parent_section_10_canvas.offsetWidth;
const get_height_section_10 = parent_section_10_canvas.offsetHeight;

canvas_section_10.width = get_width_section_10;
canvas_section_10.height = get_height_section_10;
function animate_section_10(){
  section_10_ctx.clearRect(0, 0, canvas_section_10.width, canvas_section_10.height);
  let whiteLeaveSize= 100;
  let tinyLeaveSize= 140;
  let redPointsLeaveSize=60;
  let roseCornerSize = 120;
  let greenBigLeaveCornerSize = 90;
  let littleStickLeaveCornerSize=85;
  let mediumStickLeaveCornerSize=90;
  let whiteLeaveCornerSize=80;
  let tinyLeaveCornerSize=100;

  section_10_ctx.save();
  section_10_ctx.translate(140, 40);
  section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 30 ) * Math.PI / 180);  
  section_10_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
  section_10_ctx.restore();

  section_10_ctx.save();
  section_10_ctx.translate(40, 160);
  section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 140 ) * Math.PI / 180);  
  section_10_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
  section_10_ctx.restore();

  section_10_ctx.save();
  section_10_ctx.translate( 60, 120);
  section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 300 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_10_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
  section_10_ctx.restore();

  section_10_ctx.save();
  section_10_ctx.translate( 100,  105);
  section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 260 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_10_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveCornerSize / 2), -(littleStickLeaveCornerSize / 2), littleStickLeaveCornerSize, littleStickLeaveCornerSize);
  section_10_ctx.restore();

  section_10_ctx.save();
  section_10_ctx.translate(140, 50);
  section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 270 ) * Math.PI / 180);  
  section_10_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveCornerSize / 2), -(tinyLeaveCornerSize / 2), tinyLeaveCornerSize, tinyLeaveCornerSize);
  section_10_ctx.restore();


  section_10_ctx.save();
  section_10_ctx.translate( 100, 40);
  section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_10_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
  section_10_ctx.restore();

  section_10_ctx.save();
  section_10_ctx.translate(115,  80);
  section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_10_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
  section_10_ctx.restore();


  section_10_ctx.save();
  section_10_ctx.translate(60, 100 );
  section_10_ctx.rotate((Math.sin((angleLeave) * Math.PI / 280) * angleRotation + 90 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_10_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveCornerSize / 2), -(greenBigLeaveCornerSize / 2), greenBigLeaveCornerSize, greenBigLeaveCornerSize);
  section_10_ctx.restore();


  section_10_ctx.save();
  section_10_ctx.translate( 40, 40);
  section_10_ctx.rotate(Math.PI / (-1.3));
  section_10_ctx.drawImage(roseImage, -(roseCornerSize/2) , -(roseCornerSize/2), roseCornerSize, roseCornerSize);
  section_10_ctx.restore();

   //Parte inferior 
   section_10_ctx.save();
   section_10_ctx.translate(centerX*2 -tinyLeaveSize/2, centerY*2 - 150 );
   section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 + 140 ) * Math.PI / 180);  // Rota el contexto con una animación suave
   section_10_ctx.drawImage(tinyGreenLeaveImage_2, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
   section_10_ctx.restore();
 
   section_10_ctx.save();
   section_10_ctx.translate(centerX*2 -70 ,centerY*2 -150);
   section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 + 30 ) * Math.PI / 180);  // Rota el contexto con una animación suave
   section_10_ctx.drawImage(redPointsLeaveImage, -redPointsLeaveSize / 2, -redPointsLeaveSize / 2, redPointsLeaveSize, redPointsLeaveSize);
   section_10_ctx.restore();
 
   section_10_ctx.save();
   section_10_ctx.translate(centerX*2 - 20,centerY*2 - 150);
   section_10_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotationSection_7 + 30 ) * Math.PI / 180);  // Rota el contexto con una animación suave
   section_10_ctx.drawImage(whiteLeaveImage, -whiteLeaveSize / 2, -whiteLeaveSize / 2, whiteLeaveSize, whiteLeaveSize);
   section_10_ctx.restore();

  requestAnimationFrame(animate_section_10)
}
animate_section_10()
let executeTextSection_10=false
window.addEventListener("scroll", function() {
  const box2Top = parent_section_10_canvas.getBoundingClientRect().top + parent_section_10_canvas.offsetHeight/2;
  const animateTitle=this.document.querySelector('.section_10 > section > h3')
  const animateDescription=this.document.querySelector('.section_10 > section > p')
  const animateBtn=this.document.querySelector('.section_10 > section > button')
  const animateCanvas=this.document.querySelector('.section_10 > canvas')
  const animateImages=this.document.querySelectorAll('.section_10 > img')
  if (box2Top <= window.innerHeight && box2Top >= 0 && !executeTextSection_10) {
   animateCanvas.classList.add('animate_section_9_canvas')
   animateBtn.classList.add('btn_assist') 
   animateTitle.classList.add('section_10--title')
   animateDescription.classList.add('section_10--description')
   animateImages[0].classList.add('img_bg_stain_1')
   animateImages[1].classList.add('img_bg_stain_2')
   executeTextSection_10=true
  }   
});
//Seccion 11
const parent_section_11_canvas = document.querySelector('.section_11');
const canvas_section_11 = document.getElementById('section_canvas_11');
const section_11_ctx = canvas_section_11.getContext('2d');


const get_width_section_11 = parent_section_11_canvas.offsetWidth;
const get_height_section_11 = parent_section_11_canvas.offsetHeight;

canvas_section_11.width = get_width_section_11;
canvas_section_11.height = get_height_section_11;
function animate_section_11(){
  section_11_ctx.clearRect(0, 0, canvas_section_11.width, canvas_section_11.height);
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
  
 
  // Primera Linea
  section_11_ctx.strokeStyle = '#9b5a01';
  section_11_ctx.lineWidth = 2;  
  section_11_ctx.save();  
  section_11_ctx.translate(0, 150);  
  section_11_ctx.rotate(-13 * Math.PI / 180);  
  section_11_ctx.beginPath();
  section_11_ctx.moveTo(0, 0);
  section_11_ctx.lineTo(650, 0);
  section_11_ctx.stroke();
  section_11_ctx.restore();  

  // Segunda línea
  section_11_ctx.strokeStyle = '#9b5a01';
  section_11_ctx.lineWidth = 2;  
  section_11_ctx.save();  
  section_11_ctx.translate(0, 40);  
  section_11_ctx.rotate(13 * Math.PI / 180);  
  section_11_ctx.beginPath();
  section_11_ctx.moveTo(0, 0);
  section_11_ctx.lineTo(650, 0);
  section_11_ctx.stroke();
  section_11_ctx.restore();  
  // Tercera linea
  section_11_ctx.strokeStyle = '#9b5a01';
  section_11_ctx.lineWidth = 2;  
  section_11_ctx.save();  
  section_11_ctx.translate(0, centerY*2 - 20);  
  section_11_ctx.rotate(-13 * Math.PI / 180);  
  section_11_ctx.beginPath();
  section_11_ctx.moveTo(0, 0);
  section_11_ctx.lineTo(650, 0);
  section_11_ctx.stroke();
  section_11_ctx.restore();  
  //Cuarta Linea
  section_11_ctx.strokeStyle = '#9b5a01';
  section_11_ctx.lineWidth = 2;  
  section_11_ctx.save();  
  section_11_ctx.translate(0, centerY*2 - 150);  
  section_11_ctx.rotate(13 * Math.PI / 180);  
  section_11_ctx.beginPath();
  section_11_ctx.moveTo(0, 0);
  section_11_ctx.lineTo(650, 0);
  section_11_ctx.stroke();
  section_11_ctx.restore();  

  section_11_ctx.save();
  section_11_ctx.translate(centerX + 90, centerY - 110);
  section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 260) * angleRotation + 30 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_11_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
  section_11_ctx.restore();

  section_11_ctx.save();
  section_11_ctx.translate(centerX + 145, centerY - 70);
  section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 100 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_11_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
  section_11_ctx.restore();

  section_11_ctx.save();
  section_11_ctx.translate(centerX + 140, centerY - 90);
  section_11_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 100 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_11_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
  section_11_ctx.restore();

  section_11_ctx.save();
  section_11_ctx.translate(centerX + 70, centerY - 155);
  section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 85 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_11_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
  section_11_ctx.restore();

  section_11_ctx.save();
  section_11_ctx.translate(centerX + 95, centerY - 152);
  section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 85 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_11_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
  section_11_ctx.restore();

  section_11_ctx.save();
  section_11_ctx.translate(centerX + 95, centerY - 152);
  section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 85 ) * Math.PI / 180);  
  section_11_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
  section_11_ctx.restore();

  section_11_ctx.save();
  section_11_ctx.translate(centerX + 95, centerY - 90);
  section_11_ctx.rotate(Math.PI / 2);
  section_11_ctx.drawImage(roseImage, -70, -70, roseBorderCircleSize, roseBorderCircleSize);
  section_11_ctx.restore();

  //Rosa del Lado izquierdo inferior
  section_11_ctx.save();
  section_11_ctx.translate(centerX - 95, centerY + 95);
  section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_11_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
  section_11_ctx.restore();
  
  section_11_ctx.save();
  section_11_ctx.translate(centerX - 150, centerY + 55);
  section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 300 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_11_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveSize / 2), -(mediumStickLeaveSize / 2), mediumStickLeaveSize, mediumStickLeaveSize);
  section_11_ctx.restore();

  section_11_ctx.save();
  section_11_ctx.translate(centerX - 65, centerY + 145);
  section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 260 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_11_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
  section_11_ctx.restore();
  
  section_11_ctx.save();
  section_11_ctx.translate(centerX - 95, centerY + 130);
  section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_11_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
  section_11_ctx.restore();


  section_11_ctx.save();
  section_11_ctx.translate(centerX - 145, centerY + 75);
  section_11_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 300 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_11_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
  section_11_ctx.restore();

  section_11_ctx.save();
  section_11_ctx.translate(centerX - 95, centerY + 130);
  section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 180) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_11_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
  section_11_ctx.restore();

  section_11_ctx.save();
  section_11_ctx.translate(centerX - 90, centerY + 90);
  section_11_ctx.rotate(Math.PI * 1.6);
  section_11_ctx.drawImage(roseImage, -70, -70, roseBorderCircleSize, roseBorderCircleSize);
  section_11_ctx.restore();

// Corner rosa
  section_11_ctx.save();
  section_11_ctx.translate(190, 85);
  section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 30 ) * Math.PI / 180);  
  section_11_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
  section_11_ctx.restore();

  section_11_ctx.save();
  section_11_ctx.translate(60, 210);
  section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 140 ) * Math.PI / 180);  
  section_11_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
  section_11_ctx.restore();

  section_11_ctx.save();
  section_11_ctx.translate( 40, 150);
  section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 10 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_11_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
  section_11_ctx.restore();

  section_11_ctx.save();
  section_11_ctx.translate( 110,  185);
  section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 260 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_11_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveCornerSize / 2), -(littleStickLeaveCornerSize / 2), littleStickLeaveCornerSize, littleStickLeaveCornerSize);
  section_11_ctx.restore();

  section_11_ctx.save();
  section_11_ctx.translate(160, 120);
  section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 270 ) * Math.PI / 180);  
  section_11_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveCornerSize / 2), -(tinyLeaveCornerSize / 2), tinyLeaveCornerSize, tinyLeaveCornerSize);
  section_11_ctx.restore();


  section_11_ctx.save();
  section_11_ctx.translate( 120, 90);
  section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_11_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
  section_11_ctx.restore();


  
  section_11_ctx.save();
  section_11_ctx.translate(150,  150);
  section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 240 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_11_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
  section_11_ctx.restore();


  section_11_ctx.save();
  section_11_ctx.translate(60, 95 );
  section_11_ctx.rotate((Math.sin((angleLeave) * Math.PI / 280) * angleRotation - 20 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_11_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveCornerSize / 2), -(greenBigLeaveCornerSize / 2), greenBigLeaveCornerSize, greenBigLeaveCornerSize);
  section_11_ctx.restore();


  section_11_ctx.save();
  section_11_ctx.translate( 75, 130);
  section_11_ctx.rotate(Math.PI / 1);
  section_11_ctx.drawImage(roseImage, -(roseCornerSize/2) , -(roseCornerSize/2), roseCornerSize, roseCornerSize);
  section_11_ctx.restore();
  //Rosa Inferior
  section_11_ctx.save();
  section_11_ctx.translate( centerX*2 - 190, centerY*2 - 80);
  section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 230 ) * Math.PI / 180);  
  section_11_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
  section_11_ctx.restore();

  section_11_ctx.save();
  section_11_ctx.translate(centerX*2 - 40, centerY*2 - 200);
  section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 320 ) * Math.PI / 180);  
  section_11_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
  section_11_ctx.restore();

  section_11_ctx.save();
  section_11_ctx.translate(centerX*2 - 160, centerY*2 - 90 );
  section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 300) * angleRotation + 80 ) * Math.PI / 180);  
  section_11_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveCornerSize / 2), -(tinyLeaveCornerSize / 2), tinyLeaveCornerSize, tinyLeaveCornerSize);
  section_11_ctx.restore();

  section_11_ctx.save();
  section_11_ctx.translate(centerX*2 - 120, centerY*2 - 70);
  section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 10 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_11_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
  section_11_ctx.restore();

  section_11_ctx.save();
  section_11_ctx.translate( centerX*2 - 80,  centerY*2 - 180) ;
  section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 100 ) * Math.PI / 180);  
  section_11_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveCornerSize / 2), -(littleStickLeaveCornerSize / 2), littleStickLeaveCornerSize, littleStickLeaveCornerSize);
  section_11_ctx.restore();

  section_11_ctx.save();
  section_11_ctx.translate(centerX*2 - 50, centerY*2 - 130);
  section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_11_ctx.drawImage(whiteLeaveImage, -(whiteLeaveCornerSize / 2), -(whiteLeaveCornerSize / 2), whiteLeaveCornerSize, whiteLeaveCornerSize);
  section_11_ctx.restore();

  section_11_ctx.save();
  section_11_ctx.translate(centerX*2 - 130,  centerY*2 - 150);
  section_11_ctx.rotate((Math.sin(angleLeave * Math.PI / 240) * angleRotation + 60 ) * Math.PI / 180);  
  section_11_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
  section_11_ctx.restore();

  section_11_ctx.save();
  section_11_ctx.translate(centerX*2 - 55,centerY*2 - 95 );
  section_11_ctx.rotate((Math.sin((angleLeave) * Math.PI / 280) * angleRotation + 140 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  section_11_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveCornerSize / 2), -(greenBigLeaveCornerSize / 2), greenBigLeaveCornerSize, greenBigLeaveCornerSize);
  section_11_ctx.restore();

  section_11_ctx.save();
  section_11_ctx.translate(centerX*2 - 75, centerY*2 - 110);
  section_11_ctx.rotate(Math.PI * 0.15);
  section_11_ctx.drawImage(roseImage, -(roseCornerSize/2) , -(roseCornerSize/2), roseCornerSize, roseCornerSize);
  section_11_ctx.restore();
  angleLeave += 1; // Incrementar el ángulo para la animación
  requestAnimationFrame(animate_section_11)
}
animate_section_11()
let executeTextSection_11=false
window.addEventListener("scroll", function() {
  const box2Top = parent_section_11_canvas.getBoundingClientRect().top + parent_section_11_canvas.offsetHeight/2 ;
  const bothCircles=this.document.querySelectorAll('.section_11 > span')
  const animateCanvas=this.document.querySelector('.section_11 > canvas')
  const animateImages=this.document.querySelectorAll('.section_11 > img')
  const animateTextBox=this.document.querySelector('.section_11 > div')
  if (box2Top <= window.innerHeight && box2Top >= 0 && !executeTextSection_11) {
      animateCanvas.classList.add('scale_section_2');
      bothCircles[0].classList.add('section_2-outer_circle')
      bothCircles[1].classList.add('section_2-inner_circle')
      animateImages[0].classList.add('img_bg_stain_1')
      animateImages[1].classList.add('img_bg_stain_2')
      animateTextBox.classList.add('section_11--box_text')
      executeTextSection_11=true
  } 
});
const fechaObjetivo = new Date(2024, 3, 28);

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

  divs[0].innerHTML = currentTime.dias;//Dias
  divs[1].innerHTML = currentTime.horas;//Horas
  divs[2].innerHTML = currentTime.minutos; //Minutos
  divs[3].innerHTML = currentTime.segundos;//Segundos
}

// Actualizar el contador cada segundo
setInterval(updateCounter, 1000);

// Llamar a actualizarContador() una vez para mostrar el tiempo inicial
updateCounter();