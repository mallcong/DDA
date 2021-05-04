let pulses = [];
let pulses2 = [];
let pulses3 = [];

let stars = [];

let data;
let data2;
let data3, data4, data5, data6, data7;

let hr;
let hr2;
let hr3, hr4, hr5;


var rectWidth = 10;

var sectorCount = 37;
var stackCount = 37;
    


function preload(){
   data = loadTable('2021-04-25.csv', 'csv', 'header');
  data2 = loadTable('2021-04-26.csv', 'csv', 'header');
  data3 = loadTable('2021-04-27.csv', 'csv', 'header');
   data4 = loadTable('2021-04-28.csv', 'csv', 'header'); 
  data5 = loadTable('2021-04-29.csv', 'csv', 'header');
   data6 = loadTable('2021-04-30.csv', 'csv', 'header');
   data7 = loadTable('2021-04-24.csv', 'csv', 'header');
}

function setup() {
  createCanvas(800, 800, WEBGL); //60 * rectWidth, 23*rectWidth
  pixelDensity(1);
  colorMode(RGB, 100);

  //perspective(PI / 3.0, width / height, 0.1, 500);

 
  hr = data.getColumn('Heart Rate');
  hr2 = data2.getColumn('Heart Rate');
  hr3 = data3.getColumn('Heart Rate');
  hr4 = data4.getColumn('Heart Rate');
  hr5 = data5.getColumn('Heart Rate');
   hr6 = data6.getColumn('Heart Rate');
   hr7 = data7.getColumn('Heart Rate');
  
  for (var r = 0 ; r < data.getRowCount() ; r ++){
    hr[r] = map(hr[r], 40, 177, 0, 255);
  }
  
   for (var i = 0 ; i < data2.getRowCount() ; i ++){
    hr2[i] = map(hr2[i], 40, 177, 0, 255);
  }
  
   for (var k = 0 ; k < data3.getRowCount() ; k ++){
    hr3[k] = map(hr3[k], 40, 177, 0, 255);
  }
  
  for (var l = 0 ; l < data4.getRowCount() ; l ++){
    hr4[l] = map(hr4[l], 40, 177, 0, 255);
  }
  
  for (var m = 0 ; m < data5.getRowCount() ; m ++){
    hr5[m] = map(hr5[m], 40, 177, 0, 255);
  }
  
  for (var o = 0 ; o < data6.getRowCount() ; o ++){
    hr6[o] = map(hr6[o], 40, 177, 0, 255);
  }
  for (var p = 0 ; p < data7.getRowCount() ; p ++){
    hr7[p] = map(hr7[p], 40, 177, 0, 255);
  }
  
  
  
   for(var y = 0; y < stackCount ; y ++){
     for (var x = 0 ; x < sectorCount ; x++){  
      
     pulses.push(new Pulse(500, x, y, hr2[x + y * sectorCount], hr2[x + y * sectorCount], hr3[x + y * sectorCount], hr4[x + y * sectorCount]));
  //  pulses2.push(new Pulse(100, x, y, hr3[x + y * sectorCount], hr3[x + y * sectorCount], hr4[x + y * sectorCount], hr5[x + y * sectorCount]));
       
    //    pulses3.push(new Pulse(90, x, y, hr5[x + y * sectorCount], hr5[x + y * sectorCount], hr6[x + y * sectorCount], hr7[x + y * sectorCount]));
       
    }
  }
  
  
  
  for (let l = 0; l < 1000; l++){
   
    stars[l] = new p5.Vector(random(-800, 800), random(-800, 800), random(-800, 800));
  }
  
}

function draw() {
  background(10, 10, 10);
  noStroke();
//translate(width/2, height/2+25, -80 );
  orbitControl();
   let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
 // ortho();
 ambientLight(100);
  //directionalLight(255, 255, 255, 100, 100, 100);
 // directionalLight(255, 255, 255, -100, -100, 100);
 directionalLight(255, 255, 255, dirX,  dirY, -1);
//  pointLight(255, 255, 255, -40, 0, 0);

  
 for (let i = 0; i < pulses.length; i ++){
   push();
   translate(0, 0, 0);
  // rotateX(PI/2);
   pulses[i].pulse();
   pulses[i].display();
   pop();
  
 }
  
  

 /* for (let j = 0; j < pulses2.length; j ++){
  push();
   translate(-300, -300, 0);
  //  rotateX(QUARTER_PI);
    pulses2[j].pulse();
   pulses2[j].display();
    pop();
  
 }*/ 
 
  

 /* for (let k = 0; k < pulses3.length; k ++){
  push();
   translate(+500, 100, -300);
  //  rotateX(-QUARTER_PI);
    pulses3[k].pulse();
   pulses3[k].display();
    pop();
  
 } */
  
  
  /*for (let y = 0; y < stars.length; y ++){
     stroke(250); // Change the color
    strokeWeight(2);
    point(stars[y]);
  
  
 } */
  
 
}

class Pulse{
  constructor( dia, x,  y, speed, r, g, b){

    
    this.x = x ; 
    this.y = y;
    this.size = rectWidth;
    this.speed = speed;
    this.dir = 1;
    this.r = r;
    this.g = g;
    this.b = b;
    this.dia = dia;
  }
  
  pulse(){
    
    if(this.size < 0 || this.size > (rectWidth+15) ){
      this.dir *= -1;
    }
    this.size -= 1 * this.speed/50 * this.dir;
    
  }
  
  display(){
    //rectMode(RADIUS);
    push();
   // ambientMaterial(250);
      var sectorStep = 2 * PI /sectorCount;
  var stackStep = PI / stackCount;
    var sectorAngle, stackAngle;
    
   
    sectorAngle = this.x * sectorStep;
    stackAngle = PI / 2 - this.y * stackStep;
    
    //stackAngle = this.x * sectorStep;
    //sectorAngle = PI / 2 - this.y * stackStep;
    
    fill(this.r, this.g, this.b);
 //  translate(this.dia*cos(stackAngle)*cos(sectorAngle), this.dia*cos(stackAngle)*sin(sectorAngle), this.dia*sin(stackAngle));
    rotateY(stackAngle);
    rotateX(sectorAngle);
    rotateZ(sectorAngle);
  //  box(rectWidth-5 , rectWidth-5, this.size, this.size);
    //sphere(this.size);
  //cylinder( rectWidth-8, this.size);
   // plane(this.size);
  rect(this.dia*cos(stackAngle)*cos(sectorAngle), this.dia*cos(stackAngle)*sin(sectorAngle), this.size, this.size);
 //   line(this.dia*cos(stackAngle)*cos(sectorAngle), this.dia*cos(stackAngle)*sin(sectorAngle), this.dia*sin(stackAngle), this.dia*cos(stackAngle)*cos(sectorAngle) + this.size, this.dia*cos(stackAngle)*sin(sectorAngle)+ this.size, this.dia*sin(stackAngle)+ this.size );
    
    //ellipse(this.x * rectWidth, this.y*rectWidth, this.size);
    pop();
  }
}