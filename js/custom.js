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
        let elemento = $(this).attr('rel');
        if (elemento == 'Camisa Volúpia') {
            let preco = 79.90;
            let tamanhos = ["P", "M", "G"];
            console.log("Nome: " + elemento);
            console.log("Preço: " + preco + " R$");
            console.log("Tamanhos: " + tamanhos);
        } else if (elemento == "Blusa Me") {
            let preco = 29.90;
            let tamanhos = ["P", "M", "G"];
            console.log("Nome: " + elemento);
            console.log("Preço: " + preco + " R$");
            console.log("Tamanhos: " + tamanhos);
        } else if (elemento == "Calça Cargo") {
            let preco = 99.90;
            let tamanhos = ["P", "M", "G"];
            console.log("Nome: " + elemento);
            console.log("Preço: " + preco + " R$");
            console.log("Tamanhos: " + tamanhos);
        } else if (elemento == "Short Malu") {
            let preco = 49.90;
            let tamanhos = ["P", "M", "G"];
            console.log("Nome: " + elemento);
            console.log("Preço: " + preco + " R$");
            console.log("Tamanhos: " + tamanhos);
        } else if (elemento == "Cropped Angry") {
            let preco = 29.90;
            let tamanhos = ["P", "M", "G"];
            console.log("Nome: " + elemento);
            console.log("Preço: " + preco + " R$");
            console.log("Tamanhos: " + tamanhos);
        } else if (elemento == "Top Mazi") {
            let preco = 29.90;
            let tamanhos = ["P"];
            console.log("Nome: " + elemento);
            console.log("Preço: " + preco + " R$");
            console.log("Tamanhos: " + tamanhos);
        } else if (elemento == "Top Gi") {
            let preco = 39.90;
            let tamanhos = ["P", "M"];
            console.log("Nome: " + elemento);
            console.log("Preço: " + preco + " R$");
            console.log("Tamanhos: " + tamanhos);
        } else if (elemento == "Top Malu") {
            let preco = 39.90;
            let tamanhos = ["P", "M", "G"];
            console.log("Nome: " + elemento);
            console.log("Preço: " + preco + " R$");
            console.log("Tamanhos: " + tamanhos);
        } else if (elemento == "Conjunto Gi") {
            let preco = 79.90;
            let tamanhos = ["P", "M"];
            console.log("Nome: " + elemento);
            console.log("Preço: " + preco + " R$");
            console.log("Tamanhos: " + tamanhos);
        } else if (elemento == "Vestido Soft") {
            let preco = 89.90;
            let tamanhos = ["P", "M", "G"];
            console.log("Nome: " + elemento);
            console.log("Preço: " + preco + " R$");
            console.log("Tamanhos: " + tamanhos);
        } else {
            alert("Produto não encontrado");
        }
    })
});