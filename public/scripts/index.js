$(document).ready(function(){
  console.log("hits");
  $('#loginButton').on('click', function() {
    $( function() {
       $("#loginModal" ).dialog();
     } );
  });
})
