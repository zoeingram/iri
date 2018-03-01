var layerButtons = $('.layerButton');

var i = layerButtons.length;
while(i--) {
  $(layerButtons[i]).html('Layer' + i).attr('id', 'layer' + i);
};

$('.layerButton').on('click', function() {
  console.log($(this).attr('id'));
})
