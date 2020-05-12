
// $('#invia').click(function() {
//     var nuovo_messaggio = $('#new_message').val();
//     console.log(nuovo_messaggio);
//
//     var new_text = $('.template .message, .template .sent').clone();
//
//     new_text.text(nuovo_messaggio);
//     $('#messagges-container').append(new_text);
// });



$('#invia').click(invia_messaggio);

$('#new_message').keypress(function(event) {

    if(event.which == 13) {
        invia_messaggio();
    }
});

function invia_messaggio() {

    var nuovo_messaggio = $('#new_message').val();

    if (nuovo_messaggio.trim() != '') {

        var new_text = $('.template .message, .template .sent').clone();

        new_text.text(nuovo_messaggio);

        $('#messagges-container').append(new_text);

        $('#new_message').val('');
    }
};
