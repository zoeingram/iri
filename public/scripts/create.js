var draw = SVG('drawing').size(500, 500);

var shapes = [];
var current;

var shapeMap = {};
var iterator = 0;

function drawRectangle() {
  current = draw.rect(30, 30);
  shapeMap['Layer ' + iterator] = current;
  iterator++;
}

function drawCircle(){
  current = draw.circle(30, 30);
  shapeMap['Layer ' + iterator] = current;
  iterator++;
}

function drawSquare() {
  current = draw.rect(30, 30);
  shapeMap['Layer ' + iterator] = current;
  iterator++;
}

function drawEllipse() {
  current = draw.ellipse(150, 100)
  shapeMap['Layer ' + iterator] = current;
  iterator++;
}
function drawLine() {
  current = draw.line(0, 0, 100, 150).stroke({ width: 1 })
  shapeMap['Layer ' + iterator] = current;
  iterator++;
}


$(document).ready(function() {
  drawRectangle();
  drawCircle();
  drawSquare();
  drawLine();
  drawEllipse();
  drawRectangle();

});
