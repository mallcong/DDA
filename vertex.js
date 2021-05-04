const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;
let vid;
let shader;

let pulses = [];
let stars = [];

let data;
let data2;
let data3, data4, data5, data6, data7;

let hr;
let hr2;
let hr3, hr4, hr5, hr6, hr7;

var m =1;
var n =1;
var f = 0;

var dir = 1;

var rectWidth = 10;

var sectorCount = 37;
var stackCount = 37;

let globe = make2Darray(sectorCount+1, stackCount+1);
let g2 = make2Darray(sectorCount+1, stackCount+1);
let g3 = make2Darray(sectorCount+1, stackCount+1);
let g4 = make2Darray(sectorCount+1, stackCount+1);

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
  createCanvas(2000, 1000, WEBGL); //60 * rectWidth, 23*rectWidth
  pixelDensity(1);
  colorMode(RGB, 90);
// vid = createCapture(VIDEO);
 // vid.size(32, 24);
  //vid.hide();
  
  

 b1 = color(255);
  b2 = color(0);
  c1 = color(204, 102, 0);
  c2 = color(0, 102, 153);
  
  
  hr = data.getColumn('Heart Rate');
  hr2 = data2.getColumn('Heart Rate');
  hr3 = data3.getColumn('Heart Rate');
   hr4 = data4.getColumn('Heart Rate');
  hr5 = data5.getColumn('Heart Rate');
   hr6 = data6.getColumn('Heart Rate');
   hr7 = data7.getColumn('Heart Rate');
  
  for (var r = 0 ; r < data.getRowCount() ; r ++){
    hr[r] = map(hr[r], 40, 177, 10, 255);
  }
  
   for (var i = 0 ; i < data2.getRowCount() ; i ++){
    hr2[i] = map(hr2[i], 40, 177, 10, 255);
  }
  
   for (var k = 0 ; k < data3.getRowCount() ; k ++){
    hr3[k] = map(hr3[k], 40, 177, 10, 255);
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
  
  
    for(let y = 0; y < stackCount+1 ; y ++){
     for (let x = 0 ; x < sectorCount+1 ; x++){  
      
     // pulses.push(new Pulse(x, y, hr[x + y * sectorCount]));
  
      let sectorStep = 2 * PI /sectorCount;
      let stackStep = PI / stackCount;
        let sectorAngle, stackAngle;


      sectorAngle = x * sectorStep;
        stackAngle = PI / 2 - y * stackStep;
        
      
       let v =  new p5.Vector(200*cos(stackAngle)*cos(sectorAngle), 200*cos(stackAngle)*sin(sectorAngle), 200*sin(stackAngle));
       let n = v.normalize();
       let n2 = n;
       
       let s = n.mult(map(hr[x + y * (sectorCount-1)], 40, 177, 200, 350));
       
    
        globe[x][y] = s;
       
     //  print(globe2[x][y]);
    }
  }
  
  for(let y = 0; y < stackCount+1 ; y ++){
     for (let x = 0 ; x < sectorCount+1 ; x++){  
      
     // pulses.push(new Pulse(x, y, hr[x + y * sectorCount]));
  
      let sectorStep = 2 * PI /sectorCount;
      let stackStep = PI / stackCount;
        let sectorAngle, stackAngle;


      sectorAngle = x * sectorStep;
        stackAngle = PI / 2 - y * stackStep;
        
      
       let v =  new p5.Vector(200*cos(stackAngle)*cos(sectorAngle), 200*cos(stackAngle)*sin(sectorAngle), 200*sin(stackAngle));
       let n = v.normalize();
       let n2 = n;
       
       let s = n.mult(map(hr3[x + y * (sectorCount-1)], 40, 177, 100, 150));
       
    
        g2[x][y] = s;
       
     //  print(globe2[x][y]);
    }
  }
  
  for(let y = 0; y < stackCount+1 ; y ++){
     for (let x = 0 ; x < sectorCount+1 ; x++){  
      
     // pulses.push(new Pulse(x, y, hr[x + y * sectorCount]));
  
      let sectorStep = 2 * PI /sectorCount;
      let stackStep = PI / stackCount;
        let sectorAngle, stackAngle;


      sectorAngle = x * sectorStep;
        stackAngle = PI / 2 - y * stackStep;
        
      
       let v =  new p5.Vector(100*cos(stackAngle)*cos(sectorAngle), 100*cos(stackAngle)*sin(sectorAngle), 100*sin(stackAngle));
       let n = v.normalize();
       let n2 = n;
       
       let s = n.mult(map(hr4[x + y * (sectorCount-2)], 40, 177, 100, 150));
       
    
        g3[x][y] = s;
       
     //  print(globe2[x][y]);
    }
  }
  
    for(let y = 0; y < stackCount+1 ; y ++){
     for (let x = 0 ; x < sectorCount+1 ; x++){  
      
     // pulses.push(new Pulse(x, y, hr[x + y * sectorCount]));
  
      let sectorStep = 2 * PI /sectorCount;
      let stackStep = PI / stackCount;
        let sectorAngle, stackAngle;


      sectorAngle = x * sectorStep;
        stackAngle = PI / 2 - y * stackStep;
        
      
       let v =  new p5.Vector(200*cos(stackAngle)*cos(sectorAngle), 200*cos(stackAngle)*sin(sectorAngle), 200*sin(stackAngle));
       let n = v.normalize();
       let n2 = n;
       
       let s = n.mult(map(hr5[x + y * (sectorCount-2)], 40, 177, 100, 180));
       
    
        g4[x][y] = s;
       
     //  print(globe2[x][y]);
    }
  }
  
  for (let l = 0; l < 1000; l++){
   
    stars[l] = new p5.Vector(random(-2000, 2000), random(-2000, 2000), random(-2000, 2000));
  }

  
}

function draw() {
  background(50, 50, 250);
//pointLight(255,255,255, 10,10,-10);
  noFill();
 orbitControl();
  translate(0,0,200);
  rotateX(PI);
 noStroke();
 //pg = image(vid, 0, 0, 320, 240);
   
  push();
  translate(0,0,-50);
 // specularMaterial(10,10,10, 90);
  
   //setGradient(0, 0, width , height, b1, b2, X_AXIS);
//setGradient(width, 0, width, height, b2, b1, X_AXIS);
// texture(vid);
  //plane(10000, 10000);
  pop();
  
  for (let y = 0; y < stars.length; y ++){
  //  stroke(250, 80); // Change the color
   // strokeWeight(2);
    push();
   fill(255, 90);
    translate(stars[y].add(0,1*sin(10*m),5*cos(10*m)));
   // rotateX(PI/2);
    sphere(3);
   pop();
  
 } 
  
 push();
  rotateZ(PI*n);
  rotateX(n);
  translate(0, 0, 50*sin(10*f));
  
   
for (let k = 0; k < sectorCount; k++){
  beginShape(TRIANGLE_STRIP);

  for(let j = 0; j < sectorCount+1; j++){
  // texture(vid);
  fill(hr[k + j * sectorCount], hr2[k + j * sectorCount], hr3[k + j * sectorCount]);
    // stroke(hr[k + j * sectorCount], hr2[k + j * sectorCount], hr3[k + j * sectorCount]);
    let v1 =globe[k][j];
   
    let v2 = globe[k+1][j];
 
    
  vertex(v1.x, v1.y, v1.z);
  vertex(v2.x, v2.y, v2.z);
  }
  endShape();
}
 pop(); 

  
  push(); 
translate( -700*cos(f), 700*sin(f), 100*cos(1.2*f));   
  rotateZ(-PI *n);
  rotateX(f);
 // rotateY(QUARTER_PI * n);
 
for (let h = 0; h < sectorCount; h++){
  beginShape(TRIANGLE_STRIP);
  for(let l = 0; l < sectorCount+1; l++){
    
    
   fill(hr2[h + l * sectorCount], hr3[h + l * sectorCount], hr4[h + l * sectorCount]);
    let v1 =g2[h][l];
   
    let v2 = g2[h+1][l];
 
    
  vertex(v1.x, v1.y, v1.z);
  vertex(v2.x, v2.y, v2.z);
   
  }
  endShape();
}
 pop();
  
  
   push(); 
 translate(700 *cos(f*0.5), -700 *sin(f*0.5), 300 *cos(f*3) );  
  rotateZ(2*PI * m);
  rotateX(n);
 // rotateY(QUARTER_PI);
  
for (let h = 0; h < sectorCount; h++){
  beginShape(TRIANGLE_STRIP);
  for(let l = 0; l < sectorCount+1; l++){
    
    
   fill(hr3[h + l * sectorCount], hr4[h + l * sectorCount], hr5[h + l * sectorCount]);
    let v1 =g3[h][l];
   
    let v2 = g3[h+1][l];
 
    
  vertex(v1.x, v1.y, v1.z);
  vertex(v2.x, v2.y, v2.z);
   
  }
  endShape();
}
 pop();
  
  
   push(); 
translate(1000*cos(f), 500, 1000* sin(f) );  
 // rotateX(2*PI * m);
  rotateZ(QUARTER_PI * m);
  rotateY(PI*n);
  
for (let h = 0; h < sectorCount; h++){
  beginShape(TRIANGLE_STRIP);
  for(let l = 0; l < sectorCount+1; l++){
    
    
   fill(hr4[h + l * sectorCount], hr5[h + l * sectorCount], hr6[h + l * sectorCount]);
    let v1 =g4[h][l];
   
    let v2 = g4[h+1][l];
 
    
  vertex(v1.x, v1.y, v1.z);
  vertex(v2.x, v2.y, v2.z);
   
  }
  endShape();
}
 pop();
  

 m += 0.001;
   n += 0.002;
  f += 0.01;
 
}

function make2Darray(cols, rows){
  var arr = new Array(cols);
  for (var i = 0; i <arr.length; i++){
    arr[i] = new Array(rows);
  }
  return arr;
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
