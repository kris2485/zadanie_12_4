// scripts.js
//Zmienna url zawiera pełny adres naszego dowcipu
var url = 'http://api.icndb.com/jokes/random';

//Do części dla chętnych...czy to jest poprawne? Na pewno działa :-)
getJoke();

//Nasłuchiwanie na kliknięcie w odpowiedni przycisk na stronie, aby każdorazowo pobierał nam się losowy żart
var button = document.getElementById('get-joke');
button.addEventListener('click', function(){
  getJoke();
});

//Zmienna która odpowiada za wyświetlenie dowcipu
var paragraph = document.getElementById('joke');

//implementacja funkcji getJoke()
function getJoke() {
  var xhr = new XMLHttpRequest(); //Nowa instancja obiektu XMLHttpRequest,
  xhr.open('GET', url); //Otwieranie połączenia z wybranym adresem
  xhr.addEventListener('load', function(){
    var response = JSON.parse(xhr.response); //Nasłuchiwanie na odpowiedź z serwera
    paragraph.innerHTML = response.value.joke; //Jako tekst paragrafu z dowcipem ustawiamy wartość, która siedzi w odpowiedzi z serwera, czyli w response.value.joke
  });
  xhr.send();
}