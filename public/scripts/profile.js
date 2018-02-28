$(document).ready(function(){
  $('#newDocument').on('click', function() {
    $( function() {
       $( "#createDocumentModal" ).dialog();
     } );
  });
})
