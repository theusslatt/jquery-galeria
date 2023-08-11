$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown()
    })

    $('#btn-cancel').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault()
        const enderecoDaNovaImagem = $('#endereco-img-nova').val()
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem)
        $(`
            <div class="overlay-img-link">
                <a href="${enderecoDaNovaImagem}" title="Ver Imagem em tamanho real" target="_blank">
                    Ver Imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(800)
        $('#endereco-img-nova').val('')
    })

})