


$('#search-icon').click(function() {
    // alert('ciao');
    var new_search = $('#search-users').val().trim().toLowerCase();
    console.log(new_search);

    if (new_search != '') {

        $('.single-chat .chats-middle  .name').each(function() {
            var name_chat = $(this).text().toLowerCase();
            console.log(name_chat);

            if (new_search == name_chat) {
                console.log('Ecco la tua chat');
                $(this).show();
            } else {
                console.log('Non è la tua chat');
                $(this).hide();
            }
        });
    } else {
        $('single-chat .chats-middle  .name').show();
    }
});


$('#invia').click(invia_messaggio);

$('#new_message').keypress(function(event) {

    if(event.which == 13) {
        invia_messaggio();
    }
});

function invia_messaggio() {

    var nuovo_messaggio = $('#new_message').val();

    if (nuovo_messaggio.trim() != '') {

        var new_text = $('.template .message').clone();

        new_text.addClass('sent');

        new_text.text(nuovo_messaggio);

        $('#messages-container').append(new_text);

        $('#new_message').val('');

        setTimeout(messaggio_pc, 1000);
    }
};

function messaggio_pc() {

    var nuovo_messaggio_pc = $('.template .message').clone();

    nuovo_messaggio_pc.text('ok');

    $('#messages-container').append(nuovo_messaggio_pc);
}
