
$('#invia').click(function() {
    var nuovo_messaggio = $('#new_message').val();
    console.log(nuovo_messaggio);

    var new_text = $('.template .message, .template .sent').clone();

    new_text.text(nuovo_messaggio);
    $('#messagges-container').append(new_text);
});
