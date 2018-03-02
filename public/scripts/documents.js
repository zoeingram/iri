$(document).ready(function(){
  $('#newDocumentButton').on('click', function() {
    console.log("yoo")
    $( function() {
       $( "#createDocumentModal").dialog({show: 'fade', width: 400,height: 460});
     } );
  });

  $('.buttonDoc').each(function(){
    var index = $(this).attr('id');
    $(this).hover(function(){
      $('#data' + index).toggle();
    });
  })
})
