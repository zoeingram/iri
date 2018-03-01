
if(annyang && window.location !="localhost:4000/canvas") {
  var generalCommands = {
      'log in': function(){
        $('#loginButton').click();
      },
      'about': function(){
        var aboutUrl = $('#aboutButton').attr('href');
        window.location = aboutUrl;
      }
}
  annyang.addCommands(generalCommands);
  annyang.start();
}
