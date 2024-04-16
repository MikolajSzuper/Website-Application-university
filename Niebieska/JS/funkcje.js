function oblicz()
 { 
var K=parseFloat(document.getElementById('K').value);
var pr=parseInt(document.getElementById('pr').value)/100;
var n=parseInt(document.getElementById('n').value);
var pr_mc=pr/12;
var w=document.getElementById('rata');
if ((!isNaN(K) || isFinite(1000/K))&&(!isNaN(pr) || isFinite(1000/pr))&&(!isNaN(n) || isFinite(1000/n))) {
    w.value=((K*pr_mc)/(1-(1/(Math.pow((1+pr_mc),n)))));
} else {
    w.value="Błąd w danych!"
}
}