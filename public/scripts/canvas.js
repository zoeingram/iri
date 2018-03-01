var draw = SVG('drawing').size(500, 500);
var layerButtons = $('.layerButton');
var layerInfo = $('.info');
var shapesArray = [];
var currentShape;

var Shape = function(shapeType, posX, posY, w, h) {
    this.shapeType = shapeType;
    this.posX = posX;
    this.posY = posY;
    this.w = w;
    this.h = h;
};
var i = layerButtons.length;
var index = 0;
while (i--) {
    // $(layerButtons[i]).html('Layer ' + i).attr('id', 'layer' + i);
    $(layerInfo[i]).attr('id', 'info' + 'layer' + i);
}

$('.layerButton').on('click', function() {
    var currentLayer = '#info' + $(this).attr('id');
    $(currentLayer).toggle('fast');
});

if (annyang) {
    var canvasCommands = {
        'layer *layerNum': function(layerNum) {
            if (layerNum == 'zero') {
                layerNum = 0;
            }
            var currentLayer = '#layer' + parseInt(layerNum);
            $(currentLayer).click();
        },

        'close layer *layer': function(layerNum) {
            if (layerNum == 'zero') {
                layerNum = 0;
            }
            var currentLayer = '#layer' + parseInt(layerNum);
            $(currentLayer).click();
        },

        'create': function() {
            console.log("hello")
            $('#menuCreateButton').click();
            currentShape = new Shape();
        },

        'shape type *type': function(type) {
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
        'create shape': function(size) {
            $('#createShapeModal').dialog('close');
            shapesArray.push(currentShape);
            drawShape();
            index++
            currentShape = {};
        },

        'insert': function() {
            $('#menuInsertButton').click();
        },

        'export': function() {
            $('#menuExportButton').click();
        }
    }
    annyang.addCommands(canvasCommands);

    annyang.start();
}

function drawShape() {
    var drawShape;
    for (var i = 0; i < shapesArray.length; i++) {
        var currentNode = shapesArray[i];
        if (currentNode.shapeType == 'Circle') {
            drawShape = draw.circle(currentNode.width);
            drawShape.attr({
                id: 'shapeLayer' + i
            });
            drawShape.attr({
                cx: currentNode.posX,
                cy: currentNode.posY
            }
          );
        } else if (currentNode.shapeType == 'Ellipse') {
            drawShape = draw.ellipse(currentNode.width, currentNode.height);
            drawShape.attr({
                cx: currentNode.posX,
                cy: currentNode.posY
            });
        } else if (currentNode.shapeType == 'Square' || currentNode.shapeType == 'Rectangle') {
            drawShape = draw.rect(currentNode.width, currentNode.height);
            drawShape.attr({
                cx: currentNode.posX,
                cy: currentNode.posY
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
  $('#layers').append('<li class="layerItem"><button type="button" class="button layerButton" id="layer'+ index +'">'+ 'Layer ' + index + '</button><div class="info center"></div></li>')
  console.log(index, currentNode);
}
