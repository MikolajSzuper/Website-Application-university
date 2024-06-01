function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}
document.addEventListener("DOMContentLoaded", function() {
        var currentUrl = window.location.href;
        var currentFile = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);
        if (currentFile == "cart.html") {
            showCart();

        }else if(currentFile == "cars.html"){
            var button = document.getElementById("more_content");

    button.addEventListener('click', function() {
        for (let i = 1; i <= 6; i++) {
            let url = `http://localhost:81/projekt_koncowy/assets/${i}.txt`;

            fetch(url)
                .then(response => response.text())
                .then(dane => {
                    let detailsElement = document.querySelector(`#element-${i} #details`);
                    detailsElement.innerHTML = dane;
                })
                .catch(error => console.error('Error:', error));
        }
        button.style.display = 'none';
    }, false);

    var buttons = document.querySelectorAll("#btn_more");
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var target = button.getAttribute('data-target');
            var url = `http://localhost:81/projekt_koncowy/assets/${target}.txt`;

            fetch(url)
                .then(response => response.text())
                .then(dane => {
                    var detailsElement = document.querySelector(`#element-${target} #details`);
                    detailsElement.innerHTML = dane;
                })
                .catch(error => console.error('Error:', error));
        });
    });
        }else if(currentFile == "contact.html"){
            getLocation();
        }
});

function btnTrash() {
    var buttons = document.querySelectorAll("#btn_trash");
                buttons.forEach(function(button) {
                button.addEventListener('click', function() {
                    var target = button.getAttribute('data-target');
                    var list = JSON.parse(localStorage.getItem('list'));
                    if (confirm("Usunąć element?")) list.splice(target,1);
                    localStorage.setItem('list',JSON.stringify(list));
                    showCart();
                });
            });
}

function showCart() {
    var result = "";
            var list = JSON.parse(localStorage.getItem('list'));
            if (list===null || list.length===0) {
                result += "Koszyk jest pusty!";
            }else{
                result += '<form id="contactForm" action="mailto:s99711@pollub.edu.pl" method="post" onsubmit="return showCartInWindow();">';
                result += '<div id="shopping-cart-content">';
                result += '    <div class="position">';
                result += '        <table>';
                result += '            <thead>';
                result += '                <th></th>';
                result += '                <th>Nazwa</th>';
                result += '                <th>Kolor</th>';
                result += '                <th>Kolor wnętrza</th>';
                result += '                <th>Wyposażenie</th>';
                result += '                <th>Dodatki</th>';
                result += '                <th>Cena</th>';
                result += '                <th></th>';
                result += '            </thead><tbody>';
                for (i = 0; i < list.length; i++) {
                    result += '<tr>';
                    result += '<td><img src="assets/' + list[i].id + '.png"></td>';
                    result += '<td><div id="responsive_tag">Nazwa</div><br>' + list[i].name + '</td>';
                    result += '<td><div id="responsive_tag">Kolor</div><br><div>';
                    result += '    <input type="radio" id="radioWhite_' + i + '" name="color_' + i + '" value="Biały">';
                    result += '    <label for="radioWhite_' + i + '">Biały</label>';
                    result += '</div>';
                    result += '<div>';
                    result += '    <input type="radio" id="radioBlack_' + i + '" name="color_' + i + '" value="Czarny">';
                    result += '    <label for="radioBlack_' + i + '">Czarny</label>';
                    result += '</div>';
                    result += '<div>';
                    result += '    <input type="radio" id="radioRed_' + i + '" name="color_' + i + '" value="Czerwony">';
                    result += '    <label for="radioRed_' + i + '">Czerwony</label>';
                    result += '</div>';
                    result += '<div>';
                    result += '    <input type="radio" id="radioBlue_' + i + '" name="color_' + i + '" value="Niebieski">';
                    result += '    <label for="radioBlue_' + i + '">Niebieski</label>';
                    result += '</div>';
                    result += '<div>';
                    result += '    <input type="radio" id="radioSilver_' + i + '" name="color_' + i + '" value="Srebrny">';
                    result += '    <label for="radioSilver_' + i + '">Srebrny</label>';
                    result += '</div></td>';
                    result += '<td><div id="responsive_tag">Kolor Wnętrza</div><br><div>';
                    result += '    <input type="radio" id="radioBlackInterior_' + i + '" name="interiorColor_' + i + '" value="Czarny">';
                    result += '    <label for="radioBlackInterior_' + i + '">Czarny</label>';
                    result += '</div>';
                    result += '<div>';
                    result += '    <input type="radio" id="radioBeigeInterior_' + i + '" name="interiorColor_' + i + '" value="Beżowy">';
                    result += '    <label for="radioBeigeInterior_' + i + '">Beżowy</label>';
                    result += '</div>';
                    result += '<div>';
                    result += '    <input type="radio" id="radioGreyInterior_' + i + '" name="interiorColor_' + i + '" value="Szary">';
                    result += '    <label for="radioGreyInterior_' + i + '">Szary</label>';
                    result += '</div>';
                    result += '<div>';
                    result += '    <input type="radio" id="radioBrownInterior_' + i + '" name="interiorColor_' + i + '" value="Brązowy">';
                    result += '    <label for="radioBrownInterior_' + i + '">Brązowy</label>';
                    result += '</div>';
                    result += '<div>';
                    result += '    <input type="radio" id="radioWhiteInterior_' + i + '" name="interiorColor_' + i + '" value="Biały">';
                    result += '    <label for="radioWhiteInterior_' + i + '">Biały</label>';
                    result += '</div></td>';
                    result += '<td><div id="responsive_tag">Wyposażenie</div><br><div class="radio-group">';
                    result += '    <div>';
                    result += '        <input type="radio" id="radioStandard_' + i + '" name="equipment_' + i + '" value="Standard">';
                    result += '        <label for="radioStandard_' + i + '">Standard</label>';
                    result += '    </div>';
                    result += '    <div>';
                    result += '        <input type="radio" id="radioPremium_' + i + '" name="equipment_' + i + '" value="Premium">';
                    result += '        <label for="radioPremium_' + i + '">Premium</label>';
                    result += '    </div>';
                    result += '</div></td>';
                    result += '<td><div id="responsive_tag">Dodatki</div><br><div>';
                    result += '    <input type="checkbox" id="checkboxGPS_' + i + '" name="accessories_' + i + '" value="gps">';
                    result += '    <label for="checkboxGPS_' + i + '">System nawigacji GPS</label>';
                    result += '</div>';
                    result += '<div>';
                    result += '    <input type="checkbox" id="checkboxBluetooth_' + i + '" name="accessories_' + i + '" value="bluetooth">';
                    result += '    <label for="checkboxBluetooth_' + i + '">System Bluetooth</label>';
                    result += '</div>';
                    result += '<div>';
                    result += '    <input type="checkbox" id="checkboxParkingSensors_' + i + '" name="accessories_' + i + '" value="parkingSensors">';
                    result += '    <label for="checkboxParkingSensors_' + i + '">Czujniki parkowania</label>';
                    result += '</div>';
                    result += '<div>';
                    result += '    <input type="checkbox" id="checkboxHeatedSeats_' + i + '" name="accessories_' + i + '" value="heatedSeats">';
                    result += '    <label for="checkboxHeatedSeats_' + i + '">Podgrzewane siedzenia</label>';
                    result += '</div>';
                    result += '<div>';
                    result += '    <input type="checkbox" id="checkboxSunroof_' + i + '" name="accessories_' + i + '" value="sunroof">';
                    result += '    <label for="checkboxSunroof_' + i + '">Szyberdach</label>';
                    result += '</div></td>';
                    result += '<td id="price_'+i+'"><div id="responsive_tag">Cena</div><br>' + list[i].price + ' PLN</td>';
                    result += '<td><button id="btn_trash" data-target=' + i + '><i class="fa fa-trash"></i></button></td></tr>';
                }
                
                result += "</tbody></table>";
                result += '<div id="summary">';
                result += '<h3>Podsumowanie</h3><br>';
                result += '    <div>';
                result += '        <label for="firstName">Imię:</label>';
                result += '        <input type="text" id="firstName" name="firstName" required pattern="[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]+" title="Imię musi składać się z liter" />';
                result += '    </div>';
                result += '    <div>';
                result += '        <label for="lastName">Nazwisko:</label>';
                result += '        <input type="text" id="lastName" name="lastName" required pattern="[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ\-]+" title="Nazwisko musi składać się z liter i ewentualnie myślnika (-)" />';
                result += '    </div>';
                result += '    <div>';
                result += '        <label for="email">E-mail:</label>';
                result += '        <input type="email" id="email" name="email" required />';
                result += '    </div>';
                result += '    <div>';
                result += '        <label for="phone">Numer telefonu:</label>';
                result += '        <input type="tel" id="phone" name="phone" required pattern="[0-9]{9}" title="Numer telefonu musi składać się z 9 cyfr" />';
                result += '    </div>';
                result += '<label>Łączny koszt: </label><label id="summary_label"></label><br>';
                result += '<button type="submit" id="rentcars_button">Złóż zamówienie</button><br>';
                result += '</div>';
                result += '    </div>';
                result += '    </div>';
                result += '    </form>';
            }
            document.getElementById("shopping-cart-content").innerHTML = result;
            if(list.length!=0){
                var summary_result=0;
                for (i = 0; i < list.length;i++) {
                    summary_result += parseInt(list[i].price);
                    document.querySelector('input[type=radio][name="color_'+i+'"][value="'+list[i].color+'"]').checked = true;
                    document.querySelector('input[type=radio][name="interiorColor_'+i+'"][value="'+list[i].color_inside+'"]').checked = true;
                    document.querySelector('input[type=radio][name="equipment_'+i+'"][value="'+list[i].equpimnet+'"]').checked = true;

                    var selectedOption = [document.querySelector('input[type=checkbox][id="checkboxGPS_'+i+'"][name="accessories_'+i+'"]'),
                    document.querySelector('input[type=checkbox][id="checkboxBluetooth_'+i+'"][name="accessories_'+i+'"]'),
                    document.querySelector('input[type=checkbox][id="checkboxParkingSensors_'+i+'"][name="accessories_'+i+'"]'),
                    document.querySelector('input[type=checkbox][id="checkboxHeatedSeats_'+i+'"][name="accessories_'+i+'"]'),
                    document.querySelector('input[type=checkbox][id="checkboxSunroof_'+i+'"][name="accessories_'+i+'"]')];
                    for(j=0;j<selectedOption.length;j++){
                    if (list[i].accesories.includes(selectedOption[j].value)){
                        selectedOption[j].checked = true;
                    }
                    }
                }
                document.getElementById("summary_label").innerHTML = summary_result+" PLN";
                btnTrash();
                radioButtonsChecker();
                checkBoxChecker();
            }
}

function showCartInWindow() {
    var dane="Następujące dane zostaną wysłane:\n";
    var list = JSON.parse(localStorage.getItem('list'));
    for(i=0;i<list.length;i++){
        dane+="Nazwa: "+list[i].name+"\n";
        dane+="Kolor: "+list[i].color+"\n";
        dane+="Kolor wnętrza: "+list[i].color_inside+"\n";
        dane+="Wyposażenie: "+list[i].equpimnet+"\n";
        dane+="Dodatki: "+list[i].accesories+"\n";
        dane+="Cena: "+list[i].price+"\n";
    }
    dane+="Łączna cena: "+document.getElementById('summary_label').textContent+"\n";
    dane+="Zamówionę przez: \n";
    dane+="Imię: "+document.getElementById('firstName').value+"\n";
    dane+="Nazwisko: "+document.getElementById('lastName').value+"\n";
    dane+="E-mail: "+document.getElementById('email').value+"\n";
    dane+="Numer telefonu: "+document.getElementById('phone').value+"\n";

 if (window.confirm(dane)) return true;
 else return false;
}

function addToCart(id) {
            var url = `http://localhost:81/projekt_koncowy/assets/${id}.txt`;
            var item = {};
            item.id = id;
            item.name = document.querySelector(`#element-${id} #name`).textContent;
            item.color = 'Biały';
            item.color_inside = 'Czarny';
            item.equpimnet = 'Standard';
            item.accesories = '';
            fetch(url)
                .then(response => response.text())
                .then(dane => {
                    var tempDiv = document.createElement('div');
                    tempDiv.innerHTML = dane;
                    var priceElement = tempDiv.querySelector('li:last-child');
                    var priceText = priceElement.textContent;
                    item.price = priceText.split(': ')[1].split(' P')[0].trim();
                    var list = JSON.parse(localStorage.getItem('list'));
                    if(list === null) list=[];
                    list.push(item);
                    localStorage.setItem('list',JSON.stringify(list));
                    console.log(item);
                })
                .catch(error => console.error('Error:', error));
}
   
function showLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var wspolrzedne = new google.maps.LatLng(53.419,14.581);
        var opcjeMapy = {
        zoom: 10,
        center: wspolrzedne,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var mapa = new
        google.maps.Map(document.getElementById("mapka"),opcjeMapy);
}
function errorHandler(error) {
    var output = document.getElementById("geo");
    switch (error.code) {
        case error.PERMISSION_DENIED:
        output.innerHTML = "Użytkownik nie udostępnił danych.";
        break;
        case error.POSITION_UNAVAILABLE:
        output.innerHTML = "Dane lokalizacyjne niedostępne.";
        break;
        case error.TIMEOUT:
        output.innerHTML = "Przekroczono czas żądania.";
        break;
        case error.UNKNOWN_ERROR:
        output.innerHTML = "Wystąpił nieznany błąd.";
        break;
    }
}
function getLocation() {
    if (navigator.geolocation) {
        var options = {timeout: 60000};
        navigator.geolocation.getCurrentPosition(showLocation,errorHandler,options);
    } else { alert("Twoja przeglądarka nie wspiera geolokalizacji!");

    }
}

function radioButtonsChecker(){
    var radioButtons = document.querySelectorAll('input[type=radio]');
        // Dla każdego radiobuttona dodaj nasłuchiwacz zdarzeń
        radioButtons.forEach(function(radioButton) {
            radioButton.addEventListener('change', function() {
                var list = JSON.parse(localStorage.getItem('list'));
                var summary_result = 0;
                for(i=0;i<list.length;i++){
                    var selectedOptionColor = document.querySelector('input[type=radio][name="color_'+i+'"]:checked').value;
                    var selectedOptionInsideColor = document.querySelector('input[type=radio][name="interiorColor_'+i+'"]:checked').value;
                    var selectedOptionEqupiment = document.querySelector('input[type=radio][name="equipment_'+i+'"]:checked').value;
                    if(list[i].equpimnet==="Premium" && selectedOptionEqupiment==="Standard"){ 
                        list[i].price = parseInt(list[i].price)-30000;
                    }else if(list[i].equpimnet==="Standard" && selectedOptionEqupiment==="Premium"){
                        list[i].price = parseInt(list[i].price)+30000;
                    }
                    summary_result += parseInt(list[i].price);
                    document.getElementById("price_"+i+"").textContent = list[i].price+" PLN";
                    document.getElementById("summary_label").textContent = summary_result+" PLN";
                    list[i].color = selectedOptionColor;
                    list[i].color_inside = selectedOptionInsideColor;
                    list[i].equpimnet = selectedOptionEqupiment;
                }
                localStorage.setItem('list',JSON.stringify(list));
                //showCart();
            });
        });
}

function checkBoxChecker(){
    var checkboxes = document.querySelectorAll('input[type=checkbox]');

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            var list = JSON.parse(localStorage.getItem('list'));
            for(i=0;i<list.length;i++){
                var local_accesories = [];
                var selectedOption = [document.querySelector('input[type=checkbox][id="checkboxGPS_'+i+'"][name="accessories_'+i+'"]:checked'),
                document.querySelector('input[type=checkbox][id="checkboxBluetooth_'+i+'"][name="accessories_'+i+'"]:checked'),
                document.querySelector('input[type=checkbox][id="checkboxParkingSensors_'+i+'"][name="accessories_'+i+'"]:checked'),
                document.querySelector('input[type=checkbox][id="checkboxHeatedSeats_'+i+'"][name="accessories_'+i+'"]:checked'),
                document.querySelector('input[type=checkbox][id="checkboxSunroof_'+i+'"][name="accessories_'+i+'"]:checked')];
                for(j=0;j<selectedOption.length;j++){
                    if(selectedOption[j]){
                        local_accesories.push(selectedOption[j].value);
                    }
                }
                list[i].accesories = local_accesories;
            }
            localStorage.setItem('list',JSON.stringify(list));
        });
    });
}