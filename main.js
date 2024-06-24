$(document).ready(function() {
    $('header button').click(function(){
    $('#formulario').slideToggle();
    })

    $('#formulario').on('submit', function(e) {
        e.preventDefault();
        const inputTarefa = $('#input-tarefas').val();
        const novoItem = $(`<li><p>${inputTarefa}</p></li>`);
      
        $(novoItem).appendTo(`ul`);
        $(`#input-tarefas`).val('');
    })

        $('#li-class').on('click', 'li', function() {
            if(!$(this).hasClass('click-li')) {
                $(this).addClass('click-li');
            }
        })
})