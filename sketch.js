function setup() {
  createCanvas(400, 400);
  
  circleMask = createGraphics(128, 128);
  
  drawLogo1(100);
  drawLogo2(300);
}

function draw() {
}

/*** 
 bilinear interpolation. needs colors for each corner
 0 | 2
 --+--
 1 | 3
 ***/

function interpolateBilinear(w, h, corners) {
  let arr = new Array(w*h);
  for (let x = 0; x < w; x+=1) {
    let xinc = x/w;
    let t = lerpColor(corners[0], corners[2], xinc);
    let b = lerpColor(corners[1], corners[3], xinc);
    for (let y = 0; y < h; y++) {
      let yinc = y/h;
      let m = lerpColor(t, b, yinc);
      arr[x + y*w] = m;
    }
  }
  return arr;
}

function gradient_rect(tlx, tly, w, h, tl, tr, br, bl, colors){
  c = interpolateBilinear(w, h, colors);
  beginShape(POINTS);
  for (let x = 0; x < w; x+=1){
    for (let y = 0; y < h; y+=1){
      plot = true
      if ((x<tl)&&(y<tl)&&((tl-x)**2+(tl-y)**2>tl*tl)) plot=false;
      if ((x<bl)&&(y>h-bl)&&((x-bl)**2+(y-h+bl)**2>bl*bl)) plot = false;
      if ((x>w-br)&&(y>h-br)&&((x-w+br)**2+(y-h+br)**2>br*br)) plot = false;
      if ((x>w-tr)&&(y<tr)&&((x-w+tr)**2+(tr-y)**2>tr*tr)) plot = false;

      if (plot) {
        stroke(c[x*w+y]);
        vertex(tlx+x, tly+y);
      }
    }
  }
  endShape();
}

function drawLogo1(centery) {
  background(220);
  
  rectMode(CORNER);
  
  // logo 31
  
  centerx = 100
  
  // the border of the column has a zero stroke
  noStroke();
  // draw a (blue) rectangle at the center of the Canvas
  w = 50;
  h = 50;
  tlx = centerx - w/2;
  tly = centery - h/2;
  fill('blue');
  colors = [color('blue'), color('magenta'),color('red'), color('red')];
  gradient_rect(tlx, tly, w, h, 10, 10, 10, 10, colors);
  //rect(tlx, tly, w, h, 10, 10, 10, 10);
  // draw a second rectangle
  w *= 0.75;
  h *= 0.75;
  tlx = centerx - w/2;
  tly = centery - h/2;
  stroke('white');
  strokeWeight(3);
  noFill();
  rect(tlx, tly, w, h, 8, 8, 8, 8);
  
  // draw a circle
  ellipse(centerx, centery, 20, 20)
  
  // draw the dot on the line y = -x + ceterx + centery
  dotx = centerx + 0.30*w;
  doty = -dotx + centery + centerx
  fill('white');
  ellipse(dotx, doty, 2, 2);
  
  // logo 4
  
  centerx = 250
  
  rectMode(RADIUS);
  
  // the border of the column has a zero stroke
  noStroke();
  // draw a (blue) rectangle at the center of the Canvas
  w = 50;
  h = 50;
  fill('blue');
  
  rect(centerx, centery, w/2, h/2, 10, 10, 10, 10);
  
  // draw a second rectangle
  w *= 0.75;
  h *= 0.75;
  stroke('white');
  strokeWeight(3);
  noFill();
  rect(centerx, centery, w/2, h/2, 7.5, 7.5, 7.5, 7.5);
  
  // draw a circle
  ellipse(centerx, centery, 20, 20)
  
  // draw the dot on the line y = -x + ceterx + centery
  dotx = centerx + 0.30*w;
  doty = -dotx + centery + centerx
  fill('white');
  ellipse(dotx, doty, 2, 2);
}

function drawLogo2(centery){
  x1 = 0;
  y1 = centery - h*cos(0/180*3.1415926);
  
  h=50;
  stroke(0);
  strokeWeight(10);
  
  for (x=4; x<540; x+=4){
    x2 = x/4;
    y2 = centery - h*cos(x/180*3.1415926);
    
    line(x1, y1, x2, y2);
    
    x1 = x2;
    y1 = y2;
  }
  
  point(90, centery+5);
  
  deltax = 40;
  newx = 540/4 + deltax;
    
  line(newx, centery+h, newx, centery-h)
  point(newx, centery-h);
  delta=10;
  line(newx, centery-h, newx+delta, centery-h-delta);
  
  noFill();
  newx = newx + deltax;
  ellipse(newx+h, centery, 2*h, 2*h);
}