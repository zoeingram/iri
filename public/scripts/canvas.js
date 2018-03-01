var draw = SVG('drawing').size(500, 500);
var layerButtons = $('.layerButton');
var layerInfo = $('.info');
var shapesArray = [];
var currentShape;

var Shape = function(shapeType, posX, posY, w, h, textData) {
    this.shapeType = shapeType;
    this.posX = posX;
    this.posY = posY;
    this.w = w;
    this.h = h;
    this.textData = textData;
};
var i = layerButtons.length;
var index = 0;
var element;


if (annyang) {
    var canvasCommands = {
        'layer *layerNum': function(layerNum) {
            if (layerNum == 'zero') {
                layerNum = 0;
            }
            var currentLayer = '#layer' + parseInt(layerNum);
            console.log(currentLayer)
            element = SVG.get('shapeLayer' + layerNum);
        },

        'close layer *layer': function(layerNum) {
            if (layerNum == 'zero') {
                layerNum = 0;
            }
            var currentLayer = '#layer' + parseInt(layerNum);
            // $(currentLayer).click();
        },
        'move *direction': function(direction) {
          console.log("hitting movement");
          var currentX = element.x();
          var currentY = element.y();

          if (direction == 'Up'|| direction == 'up') {
              currentY -=30;
              element.move(currentX, currentY);
          } else if (direction == 'Down'|| direction == 'down') {
            currentY +=30;
            element.move(currentX, currentY);
          } else if (direction == 'Left'|| direction == 'left') {
            currentX -=30;
            element.move(currentX, currentY);
          } else if (direction == 'Right'|| direction == 'right') {
            currentX +=30;
            element.move(currentX, currentY);
          } else {
            console.log("error");
          }
        },
        
        'create': function() {
            console.log("hello")
            element = '';
            $('#menuCreateButton').click();
            currentShape = new Shape();
        },

        'type *type': function(type) {
            console.log(type)
            var shapeTypeS = type.toString();
            $('#shapeType').val(type);
            currentShape.shapeType = shapeTypeS;
        },
        'position x *pos': function(pos) {
            $('#shapeX').val(pos + 'px');
            currentShape.posX = pos;
        },
        'position y *pos': function(pos) {
            $('#shapeY').val(pos + 'px');
            currentShape.posY = pos;
        },
        'height *size': function(size) {
            $('#shapeHeight').val(size + 'px');
            currentShape.height = size;
        },
        'width *size': function(size) {
            $('#shapeWidth').val(size + 'px');
            currentShape.width = size;
        },
        'fill *color': function(color) {
            $('#shapeFill').val(color);
            currentShape.fill = color;
        },
        'stroke *color': function(color) {
            $('#shapeStroke').val(color);
            currentShape.stroke = color;
        },
        'create shape': function(size) {
            $('#createShapeModal').dialog('close');
            shapesArray.push(currentShape);
            drawCurrentShape();
            index++
            currentShape = {};
        },

        'insert': function() {
            $('#menuInsertButton').click();
            currentShape = new Shape();
            $('#textBoxInput').focus();
        },
        'text *words': function(words) {
          console.log("texttt")
          $('#textBoxInput').val(words);
          currentShape.shapeType = 'text';
          currentShape.textData = words;
        },
        'insert media': function() {
            $('#insertMediaModal').dialog('close');
            shapesArray.push(currentShape)
            drawCurrentShape();
            index++
            currentShape = {};
        },

        'export': function() {
            $('#menuExportButton').click();
        }
    }
    annyang.addCommands(canvasCommands);

    annyang.start();
}

function drawCurrentShape() {
    var drawShape;
    for (var i = 0; i < shapesArray.length; i++) {
        var currentNode = shapesArray[i];
        if(currentNode.shapeType == 'text'){
          console.log(currentNode.textData);
          drawShape = draw.text(currentNode.textData);
          drawShape.attr({
            id: 'shapeLayer' + i,
            x: currentNode.posX,
            y: currentNode.posY,
            fill: currentNode.fill,
            family: currentNode.family
          })
        }
        if (currentNode.shapeType == 'Circle' || currentNode.shapeType == 'circle') {
            drawShape = draw.circle(currentNode.width);
            drawShape.attr({
                id: 'shapeLayer' + i,
                cx: currentNode.posX,
                cy: currentNode.posY,
                fill: currentNode.fill,
                stroke: currentNode.stroke
            }
          );
        } else if (currentNode.shapeType == 'Ellipse' || currentNode.shapeType == 'ellipse') {
            drawShape = draw.ellipse(currentNode.width, currentNode.height);
            drawShape.attr({
                id: 'shapeLayer' + i,
                cx: currentNode.posX,
                cy: currentNode.posY,
                fill: currentNode.fill,
                stroke: currentNode.stroke
            });
        } else if (currentNode.shapeType == 'Square' || currentNode.shapeType == 'square' || currentNode.shapeType == 'Rectangle' || currentNode.shapeType == 'rectangle') {
            drawShape = draw.rect(currentNode.width, currentNode.height);
            drawShape.attr({
                id: 'shapeLayer' + i,
                x: currentNode.posX,
                y: currentNode.posY,
                fill: currentNode.fill,
                stroke: currentNode.stroke
            });
        } else if (currentNode.shapeType == 'Line') {
            // drawShape = draw.rect(currentNode.width, currentNode.height);
        } else {
            console.log("no shape");
        }


    } //end loop
    connectToLayer(currentNode)
}

function connectToLayer(currentNode) {
  $('#layers').append('<li class="layerItem"><button class="button layerButton" id="layer'+ index +'">'+ 'Layer ' + index + '</button></li>')
  $('<p class="info" id="info"'+ index+'>'+ currentNode.shapeType + '</p>').appendTo($('.layerItem'));
}
