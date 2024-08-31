//Alverde Escalona Miranda   Legajo: 118955/4
//link: https://youtu.be/VqaPdOJNpoE 
let cant;
let modX;
let modY;
let colores = [];

function preload(){
  obratp3 = loadImage("data/obratp3.jpg");
}
function setup() {
createCanvas(800,400);
cant = 9;
modX = 400/cant;
modY = 400/cant;

for (let j = 0; j < cant; j++) {
  colores[j]=[]
    for (let i = 0; i < cant; i++) {
      if ((i+j)%2==0) {
      colores[j][i] = color(0);
      } else {
      colores[j][i] = color(255);
      }
    }
  }
}
function draw() {   
 image(obratp3,0,0,400,400);  
   for (let j = 0; j < cant; j++) {
    for (let i = 0; i < cant; i++) {
      fill(colores[j][i]);
      rect(400 + i * modX, j * modY, modX, modY);

      if ((i + j) % 2 == 0) {
        let cuadChicos = modX / 5;
        fill(255);
        for (let m = 0; m < 2; m++) {
          for (let n = 0; n < 2; n++) {
            let cuadX = 400 + i * modX + m * (modX - cuadChicos);
            let cuadY = j * modY + n * (modY - cuadChicos);
            rect(cuadX, cuadY, cuadChicos, cuadChicos);
          }
        }
      }
    }
  }
}

function mousePressed() {
  for (let j = 0; j < cant; j++) {
    for (let i = 0; i < cant; i++) {
      colores[j][i] = coloresRndm();
    }
  }
}
function keyPressed(){
  if(key==' '){
   for(j=0;j<cant;j++){
    for(i=0;i<cant;i++){
     if ((i+j)%2==0){
     colores[i][j]=color(0);
     } else{
      colores[i][j]=color(255); 
     }
    }
   }
  }
}
function coloresRndm(){
 return color(random(255),random(255),random(255)); 
}
