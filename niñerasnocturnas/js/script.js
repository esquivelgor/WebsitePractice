document.getElementById('btn_submit').onclick = function(){
    alert('Oh no! Esta accion aun no es habilitada por el desarrollador');
};
document.getElementById('proAct').onclick = function(){
    alert('Oh no! Esta accion aun no es habilitada por el desarrollador');
};
document.getElementById('myMessage').onclick = function(){
    alert('Por ahora esta en desarrollo mi propia web, pero soy Guillermo Esquivel Ortiz, un gusto jsjs ');
};
$(document).ready(function(){
    $('.ir-arriba').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 400);
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $('.ir-arriba').slideDown(300);
        }
        else{
            $('.ir-arriba').slideUp(300);
        }
    });
});