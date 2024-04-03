/** @type {HTMLCanvasElement} */
const parentTagSection_1=document.querySelector('.section_1')
const parentTagSection_2=document.querySelector('.section_2')
const canvasSection_2=document.querySelector('.section_2_for_canvas')
const canvas = document.getElementById('logoCanvas');
const ctx = canvas.getContext('2d');
const image = new Image();
const cardLogo= new Image();
image.src = 'moon.png'; // Reemplaza 'moon.png' con la ruta de tu archivo moon.png
cardLogo.src='logo.png' //Imagen de la carta

const containerWidth = document.getElementById('container_canvas').offsetWidth;
const containerHeight = document.getElementById('container_canvas').offsetHeight;

canvas.width = containerWidth;
canvas.height = containerHeight;

let angle = 0;  // Ángulo inicial de rotación

const widthFourCirclesSections=containerWidth / 3.5 //Divio el ancho en partes

const angleRotation=5;
image.onload = function() {
  function drawFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'black'; //Linea exterior de los dibujos

    
    const imageSize = 45;
    const circleSize = 55;
    const circleRadius= circleSize / 2;
    const cardLogoSize=260;
    // 1° Circulo
    ctx.save();  
    ctx.beginPath();
    ctx.arc( (widthFourCirclesSections - circleRadius) * 1, canvas.height / 5, circleSize / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.stroke();
    
    ctx.translate((widthFourCirclesSections - circleRadius) * 1 -10, (canvas.height / 5) - imageSize / 2 + imageSize / 2);  // Translada el origen al centro de la imagen
    ctx.rotate((Math.sin(angle * Math.PI / 180) * angleRotation) * Math.PI / 180);  // Rota el contexto con una animación suave
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

    ctx.drawImage(cardLogo, (containerWidth - cardLogoSize) / 2, (containerHeight - cardLogoSize) / 2 + 60, cardLogoSize, cardLogoSize);


    requestAnimationFrame(drawFrame);
  }

  drawFrame();
};

/*Seccion 2, otro canvas aparte */
const canvas_section_2 = document.getElementById('section_canvas_2');
const section_2_ctx = canvas_section_2.getContext("2d");
const borderLogos=new Image();
borderLogos.src='moon.png'
const get_width_section_2 = document.getElementById("container_canvas_section_2").offsetWidth;
const get_height_section_2 = document.getElementById("container_canvas_section_2").offsetHeight;

canvas_section_2.width = get_width_section_2;
canvas_section_2.height = get_height_section_2;

const centerX = canvas_section_2.width / 2;
const centerY = canvas_section_2.height / 2;
const maxRadius = 140; // Radio máximo del círculo
const startRadius = maxRadius / 2; // Radio inicial del círculo

let currentRadius_1 = startRadius; // Variable para el primer círculo
let currentRadius_2 = startRadius; // Variable para el segundo círculo

const growSpeed_1 = 2; // Velocidad de crecimiento del primer círculo
const growSpeed_2 = 2; // Velocidad de crecimiento del segundo círculo

function animate() {
    section_2_ctx.clearRect(0, 0, canvas_section_2.width, canvas_section_2.height);

    // Aumenta el radio del primer círculo
    currentRadius_1 += growSpeed_1;
  
    // Dibuja el primer círculo
    section_2_ctx.beginPath();
    section_2_ctx.arc(centerX, centerY, Math.min(currentRadius_1, maxRadius), 0, 2 * Math.PI);
    section_2_ctx.strokeStyle = 'blue'; // Color del círculo
    section_2_ctx.lineWidth = 2;
    section_2_ctx.drawImage(borderLogos, centerX - 150, centerY,140,140);
    section_2_ctx.drawImage(borderLogos, 0, 0,140,140);
    
    section_2_ctx.save();
    section_2_ctx.translate(centerX + 75, centerY - 100);
    section_2_ctx.rotate(Math.PI / 1); // Rotar 180 grados (en radianes)
    section_2_ctx.drawImage(borderLogos, -70, -70, 140, 140);
    section_2_ctx.restore();



    section_2_ctx.closePath();
    section_2_ctx.stroke();
    
 
    if (currentRadius_1 < maxRadius) {
        requestAnimationFrame(animate);
    }
}

function animate_2() {
    section_2_ctx.beginPath();
    section_2_ctx.arc(centerX, centerY, Math.min(currentRadius_2 - 10, maxRadius - 10), 0, 2 * Math.PI);
    section_2_ctx.strokeStyle = 'red'; // Color del círculo
    section_2_ctx.lineWidth = 2;
    section_2_ctx.closePath();
    section_2_ctx.stroke();

    // Aumenta el radio del segundo círculo
    currentRadius_2 += growSpeed_2;

    if (currentRadius_2 < maxRadius ) { // +10 para asegurarnos de que el círculo rojo se complete
        requestAnimationFrame(animate_2);
    }
}
animate();
animate_2(); //Agregar el settimeout

console.log(canvasSection_2)
window.addEventListener("scroll", function() {
  const box2Top = parentTagSection_2.getBoundingClientRect().top;
  const textAnimate=this.document.querySelector('.section_2 > p')
  if (box2Top <= window.innerHeight && box2Top >= 0) {
      canvasSection_2.classList.add('scale_section_2');
      textAnimate.classList.add('section_2_text')
  } 
});