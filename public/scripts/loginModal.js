$(document).ready(function(){
  $('#loginButton').on('click', function() {
    $( function() {
       $("#loginModal" ).dialog({show: 'fade'});
     } );
  });
})
