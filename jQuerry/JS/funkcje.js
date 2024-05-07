$(document).ready(function () {
    $('#tresc').css('background','grey');
    $('input').css('font-weight','bold');
    $('.zielony').css('background','lime');
});

function oblicz()
 { 
var K=parseFloat(document.getElementById('K').value);
var pr=parseInt(document.getElementById('pr').value);
var n=parseInt(document.getElementById('n').value);
var pr_mc= 1 + (pr/100/12);
var w=document.getElementById('rata');
var w_c=document.getElementById('rata_cala');
if (!isNaN(K)&&isFinite(K)&&!isNaN(n)&&isFinite(n)&&!isNaN(pr)&&isFinite(pr)) {
    var oblizanie = (K * Math.pow(pr_mc,n) * (pr_mc - 1) / (Math.pow(pr_mc,n) - 1)).toFixed(2);
    w_c.value = oblizanie*n;
    w.value = oblizanie;
    if (isNaN(w_c.value)) {
        w_c.value=""
        w.value="Błąd w danych!"
    }
    //w.value=((K*pr_mc)/(1-(1/(Math.pow((1+pr_mc),n)))));
} else {
    w.value="Błąd w danych!"
}
}
