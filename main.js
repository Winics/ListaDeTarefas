function btFunction1() {
    $(document).ready(function() {
        $('#formulario').slideDown();

        $('#formulario').on('submit', function(e) {
            e.preventDefault();
        })
    })
}

function btFunction2() {
    $(document).ready(function() {
        $('#formulario').on(btFunction1, function(e){
            e.preventDefault();
        });
    })
}

$('header button').click(function(){
    btFunction1();
    btFunction2();
})
