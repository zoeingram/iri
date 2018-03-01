var draw = SVG('drawing').size(500, 500);

var layerButtons = $('.layerButton');
var layerInfo = $('.info');


var Shape = function(shapeType, posX, posY, w, h){
  this.shapeType = shapeType;
  this.posX = posX;
  this.posY = posY;
  this.w = w;
  this.h = h;
};
var shapesArray = [];
var currentShape;

$(layerInfo).css('display', 'none');
var i = layerButtons.length;
while(i--) {
  $(layerButtons[i]).html('Layer' + i).attr('id', 'layer' + i);
  $(layerInfo[i]).attr('id', 'info' + 'layer' +i);
};

$('.layerButton').on('click', function() {
  var currentLayer = '#info' + $(this).attr('id');
  $(currentLayer).toggle('fast');
});

if(annyang) {
  var canvasCommands = {
      'layer *layerNum': function(layerNum){
        if(layerNum == 'zero') {
          layerNum = 0;
        }
        var currentLayer = '#layer' + parseInt(layerNum);
        $(currentLayer).click();
      },

      'close layer *layer': function(layerNum) {
        if(layerNum == 'zero') {
          layerNum = 0;
        }
        var currentLayer = '#layer' + parseInt(layerNum);
        $(currentLayer).click();
      },

      'create': function(){
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
        currentShape = {};
      },

      'insert': function(){
        $('#menuInsertButton').click();
      },

      'export': function(){
        $('#menuExportButton').click();
      }
    }
  annyang.addCommands(canvasCommands);

  annyang.start();
}

function drawShape() {
  // [shape, shape, shape]
  console.log(shapesArray);
  var drawShape;
  //for each item in the array, we look a few things:
    //1. the type -- if "square or rectangle, we can draw within those functions" same w circle
    //2. pass the params.
    //3. draw the shape within the loop??

    for(var i = 0; i < shapesArray.length; i++) {
      var currentNode = shapesArray[i];
      if (currentNode.shapeType == 'Circle' || currentNode.shapeType == "Ellipse") {
        console.log("its a cirlce!!");
        drawShape = draw.circle(currentNode.width);
      } else {
        console.log("bleh")

      }


    } //end loop



}
