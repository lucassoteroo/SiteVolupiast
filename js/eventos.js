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
        let e = $(this).attr('rel');
        if (e == 1) {
            console.log(roupas[0].nome);
            console.log(roupas[0].preço);
        } else if (e == 2) {
            console.log(roupas[1].nome);
            console.log(roupas[1].preço);
        } else if (e == 3) {
            console.log(roupas[2].nome);
            console.log(roupas[2].preço);
        } else if (e == 4) {
            console.log(roupas[3].nome);
            console.log(roupas[3].preço);
        } else if (e == 5) {
            console.log(roupas[4].nome);
            console.log(roupas[4].preço);
        } else if (e == 6) {
            console.log(roupas[5].nome);
            console.log(roupas[5].preço);
        } else if (e == 7) {
            console.log(roupas[6].nome);
            console.log(roupas[6].preço);
        } else if (e == 8) {
            console.log(roupas[7].nome);
            console.log(roupas[7].preço);
        } else if (e == 9) {
            console.log(roupas[8].nome);
            console.log(roupas[8].preço);
        } else if (e == 10) {
            console.log(roupas[9].nome);
            console.log(roupas[9].preço);
        }
    })
})