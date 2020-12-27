function setup() {
  createCanvas(1500, 900);
}

function draw() {
  background(255);
  maripose();
}

function maripose(){
  //draw the rings from top to down and streight line
  stroke(160);
  strokeWeight(2);
  noFill();
  ellipse(800, 100, 8, 8);
  ellipse(650, 180, 8, 8);  
  ellipse(650, 200, 8, 8); 
  line(650, 184, 650, 196);
  ellipse(530, 250, 8, 8);
  ellipse(530, 270, 8, 8);
  line(530, 254, 530, 266);
  ellipse(535, 360, 8, 8);
  ellipse(535, 375, 8, 8);
  line(535, 364, 535, 371);
  ellipse(430, 405, 8, 8);
  ellipse(430, 420, 8, 8);
  line(430, 409, 430, 416);
  ellipse(330, 435, 8, 8);
  ellipse(330, 450, 8, 8);
  line(330, 439, 330, 446);
  ellipse(360, 525, 8, 8);
  ellipse(360, 540, 8, 8);
  line(360, 529, 360, 536);
  ellipse(300, 590, 8, 8);
  ellipse(300, 605, 8, 8);
  line(300, 594, 300, 601);
  ellipse(200, 645, 8, 8);
  ellipse(200, 660, 8, 8); 
  line(200, 649, 200, 656);
  
   //draw the ceiling wire
   
   line(800,0,800,96);

  //draw the wires from top to down
  // define the points on the curve from left to right
  //streight line points are define from bottom to top
  bezier(645, 180, 800, 80, 850, 75, 1200, 170);
  bezier(525, 250, 600, 190, 750, 180, 900, 270);
  bezier(535, 356, 530, 270, 515, 200, 500, 60);
  bezier(426, 400, 535, 370, 540, 370, 700, 405);
  bezier(326, 433, 430, 410, 450, 430, 530, 465);
  bezier(360, 521, 330, 450, 300, 400, 250, 320);
  bezier(296, 586, 360, 545, 380, 520, 450, 510);
  bezier(200, 645, 300, 600, 320, 610, 420, 615);
  bezier(100, 650, 200, 660, 240, 670, 280, 680);

  //draw the shapes from top to down

  noStroke();

  //draw the first biggest red shape
  push();
  translate(1100, 110);
  scale(2.6);
  fill(227, 61,0);

  beginShape();
  curveTightness(0.7);
  curveVertex(32, 72);
  curveVertex(0, 17); //
  curveVertex(2, 10);

  curveVertex(30, 0);
  curveVertex(75, 12);
  curveTightness(0.4);
  curveVertex(110, 120);
  curveVertex(32, 72);
  curveVertex(0, 17); //
  curveVertex(2, 10);
  endShape();
  pop();


  //draw the red circle
  push();
  translate(500, 70);
  scale(2.6);
  fill(227, 61,0);

  beginShape();
  ellipse(0, 0, 40, 50);

  endShape();
  pop();


  //draw the first black shape
  push();
  translate(800, 205);
  scale(2.6);
  fill(0);

  beginShape();
  curveTightness(0.8);
  curveVertex(65, 95);
  curveVertex(0, 10); //
  curveVertex(10, 0);
  curveVertex(75, 10);
  curveTightness(0.4);
  curveVertex(65, 95);
  curveTightness(0.5);
  curveVertex(0, 10);
  curveTightness(0.8);
  curveVertex(10, 0);
  endShape();
  pop();

  //draw the second black shape
  push();
  translate(680, 375);
  scale(2.6);
  fill(0);

  beginShape();
  curveTightness(0.6);
  curveVertex(25, 75);
  curveVertex(0, 10); //
  curveVertex(35, 0);
  curveVertex(45, 10);
  curveVertex(25, 75);
  curveVertex(0, 10);
  curveVertex(45, 10);
  endShape();
  pop();


  //draw the only one white grey shape
  push();
  translate(510, 450);
  scale(2.6);
  fill(230);

  beginShape();
  curveTightness(0.4);
  curveVertex(13, 45);
  curveVertex(0, 0); //
  curveVertex(35, 10);
  curveVertex(40, 70);
  curveVertex(13, 45);
  curveVertex(0, 0);
  curveVertex(35, 10);

  endShape();
  pop();

  //draw the first blue shape
  push();
  translate(400, 450);
  scale(2.6);
  fill(0, 81, 178);

  beginShape();
  curveTightness(0.5);
  curveVertex(27, 45);
  curveVertex(5, 25); //
  curveVertex(20, 0);
  curveTightness(0.4);
  curveVertex(55, 50);
  curveVertex(27, 45);
  curveVertex(5, 25);
  curveVertex(20, 0);

  endShape();
  pop();
  
  //draw the second blue shape
  push();
  translate(250, 660);
  scale(2.6);
  fill(0, 81, 178);
  beginShape();
  curveTightness(0.3);
  curveVertex(14, 30);
  curveVertex(0, 5); //
  curveVertex(35, 0);
  curveVertex(55, 40);
  curveVertex(14, 30);
  curveVertex(0, 5);
  curveVertex(35, 0);
  endShape();
  pop();
  
    
  //draw the first yellow shape, from top to bottom
  push();
  translate(150, 230);
  scale(2.6);
  fill(232, 186, 0);
  beginShape();
  curveTightness(0.2);
  curveVertex(22,33);
  curveVertex(0, 0); //
  curveVertex(30, 7);
  curveVertex(45, 45);
  curveVertex(22,33);
  curveVertex(0, 0);
  curveVertex(30, 7);
  endShape();
  pop();
  
    //draw the second yellow shape, from top to bottom, from left to right
  push();
  translate(25, 615);
  scale(2.6);
  fill(232, 186, 0);
  beginShape();
  curveTightness(0.4);
  curveVertex(22, 32);
  curveVertex(0, 30); //
  curveVertex(20, 0);
  curveVertex(50, 15);
  curveVertex(22, 32);
  curveVertex(0, 30);
  curveVertex(20, 0);

  endShape();
  pop();
  
  
    
    //draw the third yellow shape, from top to bottom, from left to right
  push();
  translate(355, 570);
  scale(2.6);
  fill(232, 186, 0);
  beginShape();
  curveTightness(0.3);
  curveVertex(20, 30);
  curveVertex(0, 15); //
  curveVertex(25, 0);
  curveVertex(45, 35);
  curveVertex(23, 33);
  curveVertex(0, 15);
  curveVertex(25, 0);
  endShape();
  pop();
}
