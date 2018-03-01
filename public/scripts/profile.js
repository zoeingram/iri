$(document).ready(function(){
  $('#newDocument').on('click', function() {
    console.log("yoo")
    $( function() {
       $( "#createDocumentModal").dialog({show: 'fade', width: 400,height: 500});
     } );
  });
})
