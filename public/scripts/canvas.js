var draw = SVG('drawing').size(500, 500);

var layerButtons = $('.layerButton');
var layerInfo = $('.info');

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
      },

      'shape type *type': function(type) {
        $('#shapeType').val(type);
      },
      'position x *pos': function(pos) {
        $('#shapeX').val(pos + 'px');
      },
      'position y *pos': function(pos) {
        $('#shapeY').val(pos + 'px');
      },
      'height *size': function(size) {
        $('#shapeHeight').val(size + 'px');
      },
      'width *size': function(size) {
        $('#shapeWidth').val(size + 'px');
      },
      'create shape': function(size) {
        $('#createShapeModal').dialog('close');
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
