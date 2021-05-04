let pulses = [];

let data;
let data2;
let data3;

let hr;
let hr2;
let hr3;


var rectWidth = 10;



function preload(){
   data = loadTable('2021-04-24.csv', 'csv', 'header');
  data2 = loadTable('2021-04-25.csv', 'csv', 'header');
  data3 = loadTable('2021-04-26.csv', 'csv', 'header');
}

function setup() {
  createCanvas(400, 400, WEBGL); //60 * rectWidth, 23*rectWidth
  pixelDensity(1);
  colorMode(RGB, 100);
  //perspective(PI / 3.0, width / height, 0.1, 500);

 
  hr = data.getColumn('Heart Rate');
  hr2 = data2.getColumn('Heart Rate');
  hr3 = data3.getColumn('Heart Rate');
  
 for (var r = 0 ; r < data.getRowCount() ; r ++){
    hr[r] = map(hr[r], 40, 177, 0, 255);
  }
  
   for (var i = 0 ; i < data2.getRowCount() ; i ++){
    hr2[i] = map(hr2[i], 40, 177, 0, 255);
  }
  
   for (var k = 0 ; k < data3.getRowCount() ; k ++){
    hr3[k] = map(hr3[k], 40, 177, 0, 255);
  }
  
   for(var y = 0; y < height/rectWidth ; y ++){
    for (var x = 0 ; x < width/rectWidth ; x++){  
      
     pulses.push(new Pulse(x, y, hr[x + y * width/rectWidth]));
       
    }
  }
  
}

function draw() {
  background(32, 32, 32);
  noStroke();
 translate(-width/2, -height/2+25, -80 );
  orbitControl();
  



   let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  
 ambientLight(100);
  //directionalLight(255, 255, 255, 100, 100, 100);
 // directionalLight(255, 255, 255, -100, -100, 100);
 directionalLight(255, 255, 255, dirX,  dirY, -1);
//  pointLight(255, 255, 255, -40, 0, 0);
  
// ortho(-300, 300, 300, -300, -150, 1000);
 //rotateX(-QUARTER_PI-PI);
  
//rotateY(atan(1/sqrt(2))-0.1);
 // rotateX(atan(1/sqrt(2))-0.1);
  //rotateZ(atan(1/sqrt(2)));
  
  
 for (let i = 0; i < pulses.length; i ++){
   pulses[i].pulse();
   pulses[i].display();
 }
 
}


class Pulse{
  constructor( x,  y, speed){
    this.x = x;
    this.y = y;
    this.size = rectWidth;
    this.speed = speed;
    this.dir = 1;
  }
  
  pulse(){
    
    if(this.size < -3 || this.size > (rectWidth) ){
      this.dir *= -1;
    }
    this.size -= 1 * this.speed/100 * this.dir;
    
  }
  
  display(){
    rectMode(RADIUS);
    push();
   // ambientMaterial(250);
    fill(hr[this.x + this.y * width/rectWidth], hr2[this.x + this.y * width/rectWidth], hr3[this.x + this.y * width/rectWidth]);
    //translate(this.x * rectWidth, this.y * rectWidth);
    //box(rectWidth-5, rectWidth-5, this.size);
   rect(this.x * rectWidth, this.y * rectWidth,this.size, this.size);
    //ellipse(this.x * rectWidth, this.y*rectWidth, this.size);
    pop();
  }
}