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
image.src = 'moon.png';
cardLogo.src='sobre-pattern.png'
biggreenLeaveImage.src='big_green_leave.png'
littleStickGreenImage.src='little_stick_green.png'
mediumStickGreenImage.src='medium_stick_green.png'
whiteLeaveImage.src='white_leave.png'
tinyGreenLeaveImage.src='tiny_leave.png'
redPointsLeaveImage.src='red_points_leave.png'
const containerWidth = document.getElementById('container_canvas').offsetWidth;
const containerHeight = document.getElementById('container_canvas').offsetHeight;

canvas.width = containerWidth;
canvas.height = containerHeight;

let angle = 0;  // Ángulo inicial de rotación

const widthFourCirclesSections=containerWidth / 3.5 

const angleRotation=7;
image.onload = function() {
  function drawFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'black'; 

    
    const imageSize = 45;
    const circleSize = 55;
    const circleRadius= circleSize / 2;
    const cardLogoSize=380;
    // 1° Circulo
    ctx.save();  
    ctx.beginPath();
    ctx.arc( (widthFourCirclesSections - circleRadius) * 1, canvas.height / 5, circleSize / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.stroke();
    
    ctx.translate((widthFourCirclesSections - circleRadius) * 1 -10, (canvas.height / 5) - imageSize / 2 + imageSize / 2);  // Translada el origen al centro de la imagen
    ctx.rotate((Math.sin(angle * Math.PI / 180) * angleRotation + 90) * Math.PI / 180);  // Rota el contexto con una animación suave
    ctx.drawImage(image, -imageSize / 2, (-imageSize / 2) + 15, imageSize, imageSize);
    ctx.restore();  

    // 2° Circulo
    ctx.save();
    ctx.beginPath();
    ctx.arc((widthFourCirclesSections - circleRadius) * 2, canvas.height / 5, circleSize / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.stroke();
    
    ctx.translate((widthFourCirclesSections - circleRadius ) * 2 - 10 , (canvas.height / 5) - imageSize / 2 + imageSize / 2);
    ctx.rotate((Math.sin(angle * Math.PI / 180) * angleRotation) * Math.PI / 180);
    ctx.drawImage(image, -imageSize / 2,(-imageSize / 2) + 15, imageSize, imageSize);
    ctx.restore();
    // 3° Circulo
    ctx.save();
    ctx.beginPath();
    ctx.arc((widthFourCirclesSections - circleRadius) * 3, canvas.height / 5, circleSize / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.stroke();
    
    ctx.translate((widthFourCirclesSections - circleRadius) * 3 - 10 , (canvas.height / 5) - imageSize / 2 + imageSize / 2);
    ctx.rotate((Math.sin(angle * Math.PI / 180) * angleRotation) * Math.PI / 180);
    ctx.drawImage(image, -imageSize / 2, (-imageSize / 2) + 15, imageSize, imageSize);
    ctx.restore();
      // 4° Circulo
    ctx.save();
    ctx.beginPath();
    ctx.arc((widthFourCirclesSections - circleRadius) * 4, canvas.height / 5, circleSize / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.stroke();
    
    ctx.translate((widthFourCirclesSections - circleRadius ) * 4 - 10 , (canvas.height / 5) - imageSize / 2 + imageSize / 2);
    ctx.rotate((Math.sin(angle * Math.PI / 180) * angleRotation) * Math.PI / 180);  // Aplica la rotación
    ctx.drawImage(image, -imageSize / 2, (-imageSize / 2) + 15, imageSize, imageSize);
    ctx.restore();

    angle += 1;  // Incrementa el ángulo de rotación

    ctx.drawImage(cardLogo, (containerWidth - cardLogoSize) / 2, (containerHeight - cardLogoSize) / 2 + 100, cardLogoSize, cardLogoSize);


    requestAnimationFrame(drawFrame);
  }

  drawFrame();
};

/*Seccion 2, otro canvas aparte */
const parent_section_2_canvas = document.querySelector('.section_2');
const canvas_section_2 = document.getElementById('section_canvas_2');
const section_2_ctx = canvas_section_2.getContext("2d");
const roseImage = new Image();
roseImage.src = 'rosa.png';
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
    let mediumStickLeaveSize=80;
    let whiteLeaveSize=60;
    let tinyLeaveSize=50;
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

    section_2_ctx.save();
    section_2_ctx.translate(roseCornerSize - 20, roseCornerSize - 20);
    section_2_ctx.rotate(Math.PI / 1);
    section_2_ctx.drawImage(roseImage, 0, 0, roseCornerSize, roseCornerSize);
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
