if(annyang) {
  var generalCommands = {
      'log in': function(){
        $('#loginButton').click();
      },
      'new document': function(){
        $('#newDocument').click();
      },
      'about': function(){
        var aboutUrl = $('#aboutButton').attr('href');
        window.location = aboutUrl;
      }
}
  annyang.addCommands(generalCommands);
  annyang.start();
}
