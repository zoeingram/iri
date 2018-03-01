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
  var layersCommands = {
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
      }
}
  annyang.addCommands(layersCommands);

  annyang.start();
}
