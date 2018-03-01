$(document).ready(function(){
  $('#menuExportButton').on('click', function(){
    $("#exportDocumentModal").dialog({show: 'fade', width: 360});
  });
   $('#exportDocumentButton').on('click', function(){
     $("#exportDocumentModal").dialog('close');
   });
});
