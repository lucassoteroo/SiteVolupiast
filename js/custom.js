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
            $("#nome").append("Produto: " + elemento);
            $("#preco").append("Preço: " + preco + " R$");
            $("#tamanho").append("Tamanho: " + tamanhos);
        } else if (elemento == "Blusa Me") {
            let preco = 29.90;
            let tamanhos = ["P", "M", "G"];
            $("#nome").append("Produto: " + elemento);
            $("#preco").append("Preço: " + preco + " R$");
            $("#tamanho").append("Tamanho: " + tamanhos);
        } else if (elemento == "Calça Cargo") {
            let preco = 99.90;
            let tamanhos = ["P", "M", "G"];
            $("#nome").append("Produto: " + elemento);
            $("#preco").append("Preço: " + preco + " R$");
            $("#tamanho").append("Tamanho: " + tamanhos);
        } else if (elemento == "Short Malu") {
            let preco = 49.90;
            let tamanhos = ["P", "M", "G"];
            $("#nome").append("Produto: " + elemento);
            $("#preco").append("Preço: " + preco + " R$");
            $("#tamanho").append("Tamanho: " + tamanhos);
        } else if (elemento == "Cropped Angry") {
            let preco = 29.90;
            let tamanhos = ["P", "M", "G"];
            $("#nome").append("Produto: " + elemento);
            $("#preco").append("Preço: " + preco + " R$");
            $("#tamanho").append("Tamanho: " + tamanhos);
        } else if (elemento == "Top Mazi") {
            let preco = 29.90;
            let tamanhos = ["P"];
            $("#nome").append("Produto: " + elemento);
            $("#preco").append("Preço: " + preco + " R$");
            $("#tamanho").append("Tamanho: " + tamanhos);
        } else if (elemento == "Top Gi") {
            let preco = 39.90;
            let tamanhos = ["P", "M"];
            $("#nome").append("Produto: " + elemento);
            $("#preco").append("Preço: " + preco + " R$");
            $("#tamanho").append("Tamanho: " + tamanhos);
        } else if (elemento == "Top Malu") {
            let preco = 39.90;
            let tamanhos = ["P", "M", "G"];
            $("#nome").append("Produto: " + elemento);
            $("#preco").append("Preço: " + preco + " R$");
            $("#tamanho").append("Tamanho: " + tamanhos);
        } else if (elemento == "Conjunto Gi") {
            let preco = 79.90;
            let tamanhos = ["P", "M"];
            $("#nome").append("Produto: " + elemento);
            $("#preco").append("Preço: " + preco + " R$");
            $("#tamanho").append("Tamanho: " + tamanhos);
        } else if (elemento == "Vestido Soft") {
            let preco = 89.90;
            let tamanhos = ["P", "M", "G"];
            $("#nome").append("Produto: " + elemento);
            $("#preco").append("Preço: " + preco + " R$");
            $("#tamanho").append("Tamanho: " + tamanhos);
        } else {
            alert("Produto não encontrado");
        }
        alert('Produto adicionado ao carrinho');
        $('.btn-danger').on('click', function() {
            let elemento = $(this).attr('rel');
            if (elemento == 'Camisa Volúpia') {
                $(".carrinho").text('<h6>Produto Removido</h6>')
            } else if (elemento == "Blusa Me") {
                $("#nome").append("");
                $("#preco").append("");
                $("#tamanho").append("");
            } else if (elemento == "Calça Cargo") {
                $("#nome").html("");
                $("#preco").html("");
                $("#tamanho").html("");
            } else if (elemento == "Short Malu") {
                $("#nome").html("");
                $("#preco").html("");
                $("#tamanho").html("");
            } else if (elemento == "Cropped Angry") {
                $("#nome").html("");
                $("#preco").html("");
                $("#tamanho").html("");
            } else if (elemento == "Top Mazi") {
                $("#nome").html("");
                $("#preco").html("");
                $("#tamanho").html("");
            } else if (elemento == "Top Gi") {
                $("#nome").html("");
                $("#preco").html("");
                $("#tamanho").html("");
            } else if (elemento == "Top Malu") {
                $("#nome").html("");
                $("#preco").html("");
                $("#tamanho").html("");
            } else if (elemento == "Conjunto Gi") {
                $("#nome").html("");
                $("#preco").html("");
                $("#tamanho").html("");
            } else if (elemento == "Vestido Soft") {
                $("#nome").html("");
                $("#preco").html("");
                $("#tamanho").html("");
            } else {
                alert("Produto não encontrado");
            }
        })
    })
});