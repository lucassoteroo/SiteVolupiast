$(document).ready(function() {
    $('.nav-modal-open').on('click', function(event) {
        event.preventDefault();
        let elemento = $(this).attr('rel');
        $('#modelId .modal-body').html($('#' + elemento).html());
        let myModal = new bootstrap.Modal($('#modelId'));
        myModal.show();
        $('#modelId .modal-header h5.modal-title').html($(this).text());
        $('.btn-close').on('click', function() {
            let elemento = '';
        })
    });

    $('.btn-warning').on('click', function(event) {
        event.preventDefault();
        let nomeId = $('.modal-title').text();
        $('.btn-close').on('click', function(event) {
            let nomeId = '';
        })
        console.log(nomeId);

        // let nome = $('#nome').text();
        // console.log(nome);
    })
});