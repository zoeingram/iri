$(document).ready(function(){
  $('#menuCreateButton').on('click', function(){
    $("#createShapeModal").dialog({show: 'fade', width: 300, left: 0});
  });
   $('#createShapeButton').on('click', function(){
     $("#createShapeModal").dialog('close');
   });
});
