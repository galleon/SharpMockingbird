function setup() {
  createCanvas(514, 739);
}

function draw() {
  background(240);
  painting();
}

function painting(){
  strokeWeight(0);
  
  fill(color(184, 0, 0))
  ellipse(110, 100, 90, 90)
  
  beginShape();
  vertex(228, 443);
  vertex(257, 443);
  vertex(187, 652);
  vertex(157, 652);
  endShape(CLOSE);
  
  beginShape();
  vertex(332, 663);
  vertex(451, 608);
  vertex(454, 630);
  vertex(347, 680);
  endShape(CLOSE);  
  
  fill(color(232, 193, 4));
  beginShape();
  vertex(59, 327);
  vertex(405, 265);
  vertex(408, 290);
  vertex(64, 351);
  endShape(CLOSE);
  
  beginShape();
  vertex(384, 671);
  vertex(503, 615);
  vertex(503, 634);
  vertex(384, 690);
  endShape(CLOSE);
  
  beginShape();
  vertex(195, 473);
  vertex(217, 474);
  vertex(127, 736);
  vertex(103, 736);
  endShape(CLOSE);
  
  // pale blue
  fill(color(240, 240, 253));
  beginShape();
  vertex(279, 458);
  vertex(329, 458);
  vertex(274, 619);
  vertex(224, 620);
  endShape(CLOSE);
  
  
  // cross
  fill(color(color(2, 3, 153)));
  
  beginShape();
  vertex(213, 141);
  vertex(282, 122);
  vertex(284, 132);
  vertex(216, 151);
  endShape(CLOSE);
  
  beginShape();
  vertex(242, 107);
  vertex(252, 104);
  vertex(345, 628);
  vertex(335, 631);
  endShape(CLOSE); 
  
  // black square
  fill(color(color(0, 0, 0)));
  
  beginShape();
  vertex(222, 257);
  vertex(302, 123);
  vertex(433, 200);
  vertex(357, 334);
  endShape(CLOSE);
  
}
