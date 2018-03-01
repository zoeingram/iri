if (annyang && window.location != "localhost:4000/canvas") {
    var createDocumentCommands = {
      'new document': function(){
        $('#newDocument').click();
      },
        'document name *name': function(name) {
            $('#documentName').val(name);
        },
        'next': function() {
            // TODO: fix
            $('.inputs').keypress(function() {
                console.log("next");
                $(this).next('.inputs').focus();
            });
        },
        'length *length': function(length) {
            $('#documentWidth').val(length + 'px');
        },

        'height *size': function(size) {
            console.log("hits height")
            $('#documentHeight').val(size + 'px');
        },
        'create': function() {
            console.log("creating");
            // $('#createDocumentButton').click(); //TODO: make this the submit button when post is fixed
            var createUrl = $('#createDocumentButton').attr('href');
            window.location = createUrl;
        }
    }

    annyang.addCommands(createDocumentCommands);
    annyang.start();
}
