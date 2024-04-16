function pokaz(id)
{
 var tresc="";
 switch (id)
 { case 2: tresc += pokazGalerie();break;
 case 3: tresc += pokazPost(); break;
 case 4: tresc += pokazKontakt();break;
 default: tresc += pokazO();
 }
 //pobierz element o wskazanym id i ustaw jego nową zawartość:
 document.getElementById('blok').innerHTML = tresc;
}
function pokazO(){
 var tresc ='<h2><br />Pierwsze kroki</h2> ';
 //operator += uzupełnia łańcuch kolejną porcją znaków:
 tresc += '<p> W aplikacjach typu SPA ......</p>'+
 '<p class="srodek"><img src="images/baner.jpg" alt="Zdjęcie" /></p>'+
 '<article><h2>Wady SPA</h2><p>'+
 ' Czas wytworzenia oraz nakład pracy ... </p></article>';
 //przekaż wynik – gotową zawartość – do miejsca wywołania funkcji:
 return tresc;
}
function pokazGalerie()
{
 var tresc='<h2><br />Moja galeria</h2>';
 tresc+=' <div class="galeria">';
 //wygeneruj kod HTML z obrazami za pomocą pętli for:
 for(i=1;i<=10;i++)
 {
 tresc+='<div class="slajd"><img src="miniaturki/obraz'+i+'.JPG" alt="Zdjęcie'+i+'" /></div>';
 }
 return tresc+'</div>';
}
function pokazKontakt()
{
 var tresc='<h2><br />Kontakt</h2>';
tresc+='<div class="kontakt">'
tresc+='<p>tel. +48999999999</p>'+'<p>email: mmmm@onet.pl</p>'
 return tresc+'</div>';
}
function pokazPost()
{
 //funkcja generuje kod formularza – dane wpisane w odpowiednie pola przez
 //użytkownika zostaną przekazane mailem na wskazany adres, ale najpierw po
 //zajściu zdarzenia submit (wyślij) – zostanie wywołana funkcja pokazDane()
 tresc='<h2><br />Dodaj post</h2>';
 tresc+='<article class="srodek" ><form action="mailto:s99711@pollub.pl" method="post" onsubmit="return pokazDane();">'+
 'Twój email:<br /> <input type="email" name="email" id="email" required /><br />'+
 'Nazwisko i imię:<br /> <input type="text" name="nazwisko_imie" id="nazwisko_imie" required /><br />'+
 'Numer telefonu:<br><input type="text" name="telefon" id="telefon" pattern="[0-9]{9}" title="Numer telefonu ma 9 cyfr" required><br>'+
 '<p>Zainteresowania:<br><input type="checkbox" name="sport" value="sport" /> Sport<input type="checkbox" name="muzyka" value="muzyka" /> Muzyka'+
 '<input type="checkbox" name="film" value="film" /> Film<input type="checkbox" name="inne" value="inne" /> Inne</p>'+
 '<p>Wiek:<br><input type="radio" name="wiek" value="1" /> Mniej niż 10 <input type="radio" name="wiek" value="2" /> 10-20'+
 '<input type="radio" name="wiek" value="3" /> 21-30 <input type="radio" name="wiek" value="4" /> 31-40'+
 '<input type="radio" name="wiek" value="5" /> 41-50 <input type="radio" name="wiek" value="6" /> Więcej niż 50 </p>'+
 'Komentarz: <br /><textarea rows="15" cols="75" id="wiadomosc" name="wiadomosc" required></textarea>'+
 '<br /> <input type="submit" name="wyslij" value="Wyślij" />'+
 '</form></article><br>';
 return tresc;
}
function pokazDane()
{
 //Funkcja zbiera dane wpisane w pola formularza i wyświetla okienko
 //typu confirm do zatwierdzenia przez użytkownika:
 var dane="Następujące dane zostaną wysłane:\n";
 dane+="Email: "+document.getElementById('email').value+"\n";
 dane+="Imię i nazwisko: "+document.getElementById('nazwisko_imie').value+"\n";
 dane+="Telefon: "+document.getElementById('telefon').value+"\n";
 dane+="Komentarz: "+document.getElementById('wiadomosc').value+"\n";
 // uzupełnij dane ...
 if (window.confirm(dane)) return true;
 else return false;
}
