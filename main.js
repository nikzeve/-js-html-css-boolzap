


$('#search-users').keyup(function() {
    // alert('ciao');
    var new_search = $('#search-users').val().trim().toLowerCase();
    console.log(new_search);

    if (new_search != '') {

        $('.single-chat').each(function() {
            var name_chat = $(this).find('.name').text().toLowerCase();

            if (name_chat.includes (new_search)) {
                console.log('Ecco la tua chat');
                $(this).show();
            } else {
                console.log('Non è la tua chat');
                $(this).hide();
            }
        });
    } else {
        $('.single-chat').show();
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

        $('.active .m-container').append(new_text);

        $('#new_message').val('');

        setTimeout(messaggio_pc, 1000);
    }
};

function messaggio_pc() {

    var nuovo_messaggio_pc = $('.template .message').clone();

    nuovo_messaggio_pc.text('ok');

    $('.active .m-container').append(nuovo_messaggio_pc);
}

$('#chats .single-chat').click(function() {
    $('.messages-container').removeClass('active');

    var nome_chat = $(this).find('.name').text();
    console.log(nome_chat);

    $('.messages-container[data-name-chat="' + nome_chat + '"]').addClass('active');
})
