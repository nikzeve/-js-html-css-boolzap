


$('#search-icon').click(function() {
    // alert('ciao');
    var new_search = $('#search-users').val();
    console.log(new_search);

    $('.single-chat .chats-middle  .name').each(function() {
        var name_chat = $(this).text();
        console.log(name_chat);
    });
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

        var new_text = $('.template .message, .template .sent').clone();

        new_text.text(nuovo_messaggio);

        $('#messagges-container').append(new_text);

        $('#new_message').val('');
    }
};
