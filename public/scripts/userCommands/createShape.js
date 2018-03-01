$(document).ready(function(){
  $('#menuCreateButton').on('click', function(){
    $("#createShapeModal").dialog({show: 'fade', width: 360});
  });
   $('#createShapeButton').on('click', function(){
     $("#createShapeModal").dialog('close');
   });
});
