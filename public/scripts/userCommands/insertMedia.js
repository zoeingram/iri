$(document).ready(function(){
  $('#test2').on('click', function(){
    $("#insertMediaModal").dialog({show: 'fade', width: 360});
  });
   $('#insertMediaButton').on('click', function(){
     $("#insertMediaModal").dialog('close');
   });
});
