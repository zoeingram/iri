$(document).ready(function(){
  $('#test').on('click', function(){
    $("#createShapeModal").dialog({show: 'fade', width: 300});
  })

   $('#createShapeButton').on('click', function(){
     $("#createShapeModal").dialog('close');
   });
});
