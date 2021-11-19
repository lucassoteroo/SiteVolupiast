// eventos carrinho
var roupas = []

$(document).ready(function() {
    $('.btn-warning').on('click', function(event) {
        event.preventDefault();

        camisaVolupia = {
            nome: 'Camisa Volúpia',
            preço: 79.90
        }

        blusaMe = {
            nome: 'Blusa Me',
            preço: 29.90
        }

        calcaCargo = {
            nome: 'Calça Cargo',
            preço: 99.90
        }

        shortMalu = {
            nome: 'Short Malu',
            preço: 49.90
        }

        croppedAngry = {
            nome: 'Cropped Angry',
            preço: 29.90
        }

        topMazi = {
            nome: 'Top Mazi',
            preço: 59.90
        }

        topGi = {
            nome: 'Top Gi',
            preço: 39.90
        }

        topMalu = {
            nome: 'Top Malu',
            preço: 39.90
        }

        conjGi = {
            nome: 'Conjunto Gi',
            preço: 79.90
        }

        vestidoSoft = {
            nome: 'Vestido Soft',
            preço: 89.90
        }

        let e = $(this).attr('rel');
        if (e == 1) {
            roupas.push(camisaVolupia);
            console.log(roupas)
        } else if (e == 2) {
            roupas.push(blusaMe);
            console.log(roupas)
        } else if (e == 3) {
            roupas.push(calcaCargo);
        } else if (e == 4) {
            roupas.push(shortMalu);
        } else if (e == 5) {
            roupas.push(croppedAngry);
        } else if (e == 6) {
            roupas.push(topMazi);
        } else if (e == 7) {
            roupas.push(topGi);
        } else if (e == 8) {
            roupas.push(topMalu);
        } else if (e == 9) {
            roupas.push(conjGi);
        } else if (e == 10) {
            roupas.push(vestidoSoft);
        }
    })
})