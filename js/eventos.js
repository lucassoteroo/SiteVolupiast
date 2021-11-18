// eventos carrinho

var roupas = [
    camisaVolupia = {
        nome: 'Camisa Volúpia',
        preço: 79.90
    },
    blusaMe = {
        nome: 'Blusa Me',
        preço: 29.90
    },
    calcaCargo = {
        nome: 'Calça Cargo',
        preço: 99.90
    },
    shortMalu = {
        nome: 'Short Malu',
        preço: 49.90
    },
    croppedAngry = {
        nome: 'Cropped Angry',
        preço: 29.90
    },
    topMazi = {
        nome: 'Top Mazi',
        preço: 59.90
    },
    topGi = {
        nome: 'Top Gi',
        preço: 39.90
    },
    topMalu = {
        nome: 'Top Malu',
        preço: 39.90
    },
    conjGi = {
        nome: 'Conjunto Gi',
        preço: 79.90
    },
    vestidoSoft = {
        nome: 'Vestido Soft',
        preço: 89.90
    }
]


$(document).ready(function() {
    $('.btn-warning').on('click', function(event) {
        event.preventDefault();

        function camisaVolupia() {
            $('#produto').html(roupas[0].nome);
            $('#preco').html(roupas[0].preço);
        }

        function blusaMe() {
            $('#produto').html(roupas[1].nome);
            $('#preco').html(roupas[1].preço);
        }

        function calcaCargo() {
            $('#produto').html(roupas[2].nome);
            $('#preco').html(roupas[2].preço);
        }

        function shortMalu() {
            $('#produto').html(roupas[3].nome);
            $('#preco').html(roupas[3].preço);
        }

        function croppedAngry() {
            $('#produto').html(roupas[4].nome);
            $('#preco').html(roupas[4].preço);
        }

        function topMazi() {
            $('#produto').html(roupas[5].nome);
            $('#preco').html(roupas[5].preço);
        }

        function topGi() {
            $('#produto').html(roupas[6].nome);
            $('#preco').html(roupas[6].preço);
        }

        function topMalu() {
            $('#produto').html(roupas[7].nome);
            $('#preco').html(roupas[7].preço);
        }

        function conjGi() {
            $('#produto').html(roupas[8].nome);
            $('#preco').html(roupas[8].preço);
        }

        function vestidoSoft() {
            $('#produto').html(roupas[9].nome);
            $('#preco').html(roupas[9].preço);
        }

        let e = $(this).attr('rel');
        if (e == 1) {
            camisaVolupia();
        } else if (e == 2) {
            blusaMe();
        } else if (e == 3) {
            calcaCargo();
        } else if (e == 4) {
            shortMalu();
        } else if (e == 5) {
            croppedAngry();
        } else if (e == 6) {
            topMazi();
        } else if (e == 7) {
            topGi();
        } else if (e == 8) {
            topMalu();
        } else if (e == 9) {
            conjGi();
        } else if (e == 10) {
            vestidoSoft();
        }

    })
})