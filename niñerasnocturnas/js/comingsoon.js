var end = new Date('6/17/2022 9:30 AM').getTime();

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;

var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = end - now;
    
    var days = Math.floor(distance / (_day));
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById('dias').innerHTML = days + ' Dias';
    document.getElementById('hrs').innerHTML = hours + ' Hrs';
    document.getElementById('min').innerHTML = minutes + ' Min';
    document.getElementById('sec').innerHTML = seconds + ' Seg';
    if (distance < 0) {
        clearInterval(x);
        document.getElementById('countdown').innerHTML = 'Finalizado!';
    }
}, 1000);