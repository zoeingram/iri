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
})
