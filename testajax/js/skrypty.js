//utworzenie obiektu xhr:
/*const xhr = new XMLHttpRequest();
function pobierzDane(nazwaPliku)
{ if (xhr) {
 var url = "http://localhost:81/testajax/dane/" + nazwaPliku + ".txt";
 xhr.open("GET", url);
 xhr.addEventListener("readystatechange", function () {
 if (xhr.readyState === 4) {
 document.getElementById("s1").innerHTML = xhr.responseText;
 }
 });
 xhr.send(null);
 }
}*/

document.addEventListener("DOMContentLoaded", function() {
    //obsługa zdarzenia kliknięcia na b1:
    var but1 = document.getElementById("b1");
    but1.addEventListener('click', function(){
    fetch("http://localhost:81/testajax/dane/1.txt")
    .then( response => {return response.text();} )
    .then( dane => { document.getElementById("s1").innerHTML = dane; })
    },
    false);
   
    //obsługa zdarzenia kliknięcia na b2:
    var but2 = document.getElementById("b2");
    but2.addEventListener('click', function(){
        fetch("http://localhost:81/testajax/dane/2.txt")
        .then( response => {return response.text();} )
        .then( dane => { document.getElementById("s1").innerHTML = dane; })
    },
    false);
    var but3 = document.getElementById("b3");
    but3.addEventListener('click', function(){
        fetch("http://localhost:81/testajax/dane/3.txt")
        .then( response => {return response.text();} )
        .then( dane => { document.getElementById("s1").innerHTML = dane; })
    },
    false);
    var but4 = document.getElementById("b4");
    but4.addEventListener('click', function(){
        fetch("http://localhost:81/testajax/dane/4.txt")
        .then( response => {return response.text();} )
        .then( dane => { document.getElementById("s1").innerHTML = dane; })
    },
    false);
   })
   