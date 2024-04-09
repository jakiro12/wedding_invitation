/** @type {HTMLCanvasElement} */
const parentTagSection_1=document.querySelector('.section_1')
const canvas = document.getElementById('logoCanvas');
const ctx = canvas.getContext('2d');
const image = new Image();
const cardLogo= new Image();
const biggreenLeaveImage=new Image();
const littleStickGreenImage=new Image();
const mediumStickGreenImage= new Image();
const whiteLeaveImage=new Image();
const tinyGreenLeaveImage=new Image();
const redPointsLeaveImage=new Image();
const roseImage = new Image();
roseImage.src = 'rosa.png';
image.src = 'moon.png';
cardLogo.src='sobre-pattern.png'
biggreenLeaveImage.src='big_green_leave.png'
littleStickGreenImage.src='little_stick_green.png'
mediumStickGreenImage.src='medium_stick_green.png'
whiteLeaveImage.src='white_leave.png'
tinyGreenLeaveImage.src='tiny_leave.png'
redPointsLeaveImage.src='red_points_leave.png'
const angleRotation=7; // Angulo de Rotacion de las animaciones

const containerWidth = document.getElementById('container_canvas').offsetWidth;
const containerHeight = document.getElementById('container_canvas').offsetHeight;

canvas.width = containerWidth;
canvas.height = containerHeight;

const circlesDatesContainer=document.querySelectorAll('.section_1--counter > div')
const canvasCirclesAnimation=document.querySelector(".circle_times_animation")
const circles_animations_ctx=canvasCirclesAnimation.getContext("2d")
circles_animations_ctx.translate(45,0)


canvasCirclesAnimation.width=circlesDatesContainer[0].offsetWidth + 20;
canvasCirclesAnimation.height=circlesDatesContainer[0].offsetHeight + 20;
let centerXCirclesAnimation=canvasCirclesAnimation.width / 2
let centerYCirclesAnimation=canvasCirclesAnimation.height/2




let angleLeaveCircles = 0;
function animate_circles() {
  circles_animations_ctx.clearRect(0, 0, canvasCirclesAnimation.width , canvasCirclesAnimation.height);

  let roseSize=30;
  let tinyLeaveSize=15;
  let mediumStickLeaveSize=30;
  let greenBigLeaveSize=20;
  let littleStickLeaveSize=25;
  let whiteLeaveSize=15;
  let redPointsLeaveSize=15;

  circles_animations_ctx.save();
  circles_animations_ctx.translate(centerXCirclesAnimation - 30, centerYCirclesAnimation + 10);
  circles_animations_ctx.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 260 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx.drawImage(mediumStickGreenImage, -mediumStickLeaveSize/2, -mediumStickLeaveSize/2, mediumStickLeaveSize, mediumStickLeaveSize);
  circles_animations_ctx.restore();

  circles_animations_ctx.save();
  circles_animations_ctx.translate(centerXCirclesAnimation - 30, centerYCirclesAnimation + 20);
  circles_animations_ctx.rotate((Math.sin((angleLeaveCircles) * Math.PI / 240) * angleRotation + 280 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx.drawImage(biggreenLeaveImage, -(greenBigLeaveSize / 2), -(greenBigLeaveSize / 2), greenBigLeaveSize, greenBigLeaveSize);
  circles_animations_ctx.restore();

  

  circles_animations_ctx.save();
  circles_animations_ctx.translate(centerXCirclesAnimation - 5, centerYCirclesAnimation + 25);
  circles_animations_ctx.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 180 ) * Math.PI / 180); 
  circles_animations_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
  circles_animations_ctx.restore();

  circles_animations_ctx.save();
  circles_animations_ctx.translate(centerXCirclesAnimation - 0, centerYCirclesAnimation + 35);
  circles_animations_ctx.rotate((Math.sin(angleLeaveCircles * Math.PI / 240) * angleRotation + 260 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx.drawImage(littleStickGreenImage, -(littleStickLeaveSize / 2), -(littleStickLeaveSize / 2), littleStickLeaveSize, littleStickLeaveSize);
  circles_animations_ctx.restore();

  circles_animations_ctx.save();
  circles_animations_ctx.translate(centerXCirclesAnimation - 5, centerYCirclesAnimation + 35);
  circles_animations_ctx.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx.drawImage(whiteLeaveImage, -(whiteLeaveSize / 2), -(whiteLeaveSize / 2), whiteLeaveSize, whiteLeaveSize);
  circles_animations_ctx.restore();

  circles_animations_ctx.save();
  circles_animations_ctx.translate(centerXCirclesAnimation - 5, centerYCirclesAnimation + 35);
  circles_animations_ctx.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 200 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx.drawImage(redPointsLeaveImage, -(redPointsLeaveSize / 2), -(redPointsLeaveSize / 2), redPointsLeaveSize, redPointsLeaveSize);
  circles_animations_ctx.restore()

  circles_animations_ctx.save();
  circles_animations_ctx.translate( centerXCirclesAnimation - 20, centerYCirclesAnimation + 25);
  circles_animations_ctx.rotate( Math.PI * 1.6)
  circles_animations_ctx.drawImage(roseImage, -roseSize/2, -roseSize/2, roseSize, roseSize);
  circles_animations_ctx.restore();


// Rosa superior

  circles_animations_ctx.save();
  circles_animations_ctx.translate(centerXCirclesAnimation + 30, centerYCirclesAnimation - 10);
  circles_animations_ctx.rotate((Math.sin(angleLeaveCircles * Math.PI / 180) * angleRotation + 120 ) * Math.PI / 180);  // Rota el contexto con una animación suave
  circles_animations_ctx.drawImage(mediumStickGreenImage, -mediumStickLeaveSize/2, -mediumStickLeaveSize/2, mediumStickLeaveSize, mediumStickLeaveSize);
  circles_animations_ctx.restore();

  circles_animations_ctx.save();
  circles_animations_ctx.translate( centerXCirclesAnimation + 20, centerYCirclesAnimation - 25);
  circles_animations_ctx.rotate( Math.PI * 0.6)
  circles_animations_ctx.drawImage(roseImage, -roseSize/2, -roseSize/2, roseSize, roseSize);
  circles_animations_ctx.restore();

  angleLeaveCircles += 1

    requestAnimationFrame(animate_circles)
}

animate_circles();


let angle = 0;  // Ángulo inicial de rotación

const widthFourCirclesSections=containerWidth / 3.5 

image.onload = function() { //Dibuja el sobre con canvas
  function drawFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const cardLogoSize=380;
    ctx.drawImage(cardLogo, (containerWidth - cardLogoSize) / 2, (containerHeight - cardLogoSize) / 2 + 100, cardLogoSize, cardLogoSize);
    requestAnimationFrame(drawFrame);
  }

  drawFrame();
};

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
    let roseCornerSize = 140;
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
    section_2_ctx.translate(40, 160);
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 200) * angleRotation + 140 ) * Math.PI / 180);  
    section_2_ctx.drawImage(mediumStickGreenImage, -(mediumStickLeaveCornerSize / 2), -(mediumStickLeaveCornerSize / 2), mediumStickLeaveCornerSize, mediumStickLeaveCornerSize);
    section_2_ctx.restore();

    section_2_ctx.save();
    section_2_ctx.translate( 60, 120);
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
    section_2_ctx.rotate((Math.sin(angleLeave * Math.PI / 280) * angleRotation + 270 ) * Math.PI / 180);  // Rota el contexto con una animación suave
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
    section_2_ctx.translate(60, 100 );
    section_2_ctx.rotate((Math.sin((angleLeave) * Math.PI / 240) * angleRotation + 90 ) * Math.PI / 180);  // Rota el contexto con una animación suave
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
  if (box2Top <= window.innerHeight && box2Top >= 0) {
      canvas_section_2.classList.add('scale_section_2');
      textAnimate.classList.add('section_2_text')
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
const velocity_text = 200; // milisegundos

function animateTextWedding(index) {
  if (index < text_wedding.length) {
    get_section_3_text.textContent += text_wedding[index];
    index++;
    setTimeout(function() {
      animateTextWedding(index);
    }, velocity_text);
  }
}

animateTextWedding(0);

window.addEventListener("scroll", function() {
  const box2Top = parent_section_3_canvas.getBoundingClientRect().top;
  const textAnimate=document.querySelector('.section_3 > p')
  const squaresImage=this.document.querySelectorAll('.section_3 > div')
  const imageAnimate=this.document.querySelector('.section_3 > img')
  if (box2Top <= window.innerHeight && box2Top >= 0) {
      textAnimate.classList.add('section_3--wedding-text')
      squaresImage[0].classList.add('first_square')
      squaresImage[1].classList.add('second_square')
      imageAnimate.classList.add('img_wedding')
  } 
});

// Dibujar flores unicamente dentro del canvas 3

function animate_section_3() {
  section_3_ctx.clearRect(0, 0, canvas_section_3.width, canvas_section_3.height);
    let roseCornerSize = 140;
    let roseBorderCircleSize = 60;
    let greenBigLeaveCornerSize = 90;
    let greenBigLeaveSize = 80;
    let littleStickLeaveSize=75;
    let littleStickLeaveCornerSize=85;
    let mediumStickLeaveSize=80;
    let mediumStickLeaveCornerSize=90;
    let whiteLeaveSize=60;
    let whiteLeaveCornerSize=80;
    let tinyLeaveSize=30;
    let tinyLeaveCornerSize=100;
    let redPointsLeaveSize=40;
    // Primera hoja

    section_3_ctx.save();
    section_3_ctx.translate(centerX - 35 , centerY - 110);
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 260) * angleRotation + 0 ) * Math.PI / 180);  
    section_3_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX + 35 , centerY + 110);
    section_3_ctx.rotate((Math.sin(angleLeave * Math.PI / 260) * angleRotation + 180 ) * Math.PI / 180);  
    section_3_ctx.drawImage(tinyGreenLeaveImage, -(tinyLeaveSize / 2), -(tinyLeaveSize / 2), tinyLeaveSize, tinyLeaveSize);
    section_3_ctx.restore();


    

    section_3_ctx.save();
    section_3_ctx.translate(centerX , centerY - 80);
    section_3_ctx.rotate(Math.PI * 2.2);
    section_3_ctx.drawImage(roseImage, -70, -70, roseBorderCircleSize, roseBorderCircleSize);
    section_3_ctx.restore();

    section_3_ctx.save();
    section_3_ctx.translate(centerX , centerY + 80);
    section_3_ctx.rotate(Math.PI * 1.2);
    section_3_ctx.drawImage(roseImage, -70, -70, roseBorderCircleSize, roseBorderCircleSize);
    section_3_ctx.restore();

    angleLeave += 1; // Incrementar el ángulo para la animación

    requestAnimationFrame(animate_section_3);
}
animate_section_3();
