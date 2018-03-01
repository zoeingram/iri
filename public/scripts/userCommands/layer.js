$(document).ready(function(){
  $('#test3').on('click', function(){
    $("#layerModal").dialog({show: 'fade', width: 360});
  });
   $('#layerButton').on('click', function(){
     $("#layerModal").dialog('close');
   });
});
