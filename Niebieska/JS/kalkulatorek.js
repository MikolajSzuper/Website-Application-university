function oblicz(){
    var tab = document.getElementsByName("dzialanie");
    var op;
    for(let i=0;i<tab.length;i++){
        if(tab[i].checked) op = tab[i].value;
    } 

    var lx = parseFloat(document.getElementById('X').value);
    var ly = parseFloat(document.getElementById('Y').value);
    
    var w = document.getElementById('w');
    if ((!isNaN(lx) || isFinite(1000/lx))&&(!isNaN(ly) || isFinite(1000/ly))) {
        switch (op) {
            case "+":
                w.value = lx+ly;
                break;
            case "-":
                w.value = lx-ly;
                break;
            case "*":
                w.value = lx*ly;
                break;
            case "/":
                if (ly==0) {
                    w.value = "Dzielenie przez zero!"
                } else {
                    w.value = lx/ly;   
                }
                break;
            default:
                w.value = "Wybierz działanie!";
                break;
        }
    } else {
        w.value = "Błąd danych!"
    }
}