/* exported data */

var $cards = document.getElementById('cards');

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://ghibliapi.herokuapp.com/films');
xhr.responseType = 'json';

// Browse Page
xhr.addEventListener('load', function () {
  // console.log('xhr status:', xhr.status);
  // console.log('xhr response:', xhr.response);
  for (let i = 0; i < xhr.response.length; i++) {
    var $card = document.createElement('section');
    var $h2 = document.createElement('h2');
    $h2.textContent = xhr.response[i].title;
    var $img = document.createElement('img');
    $img.setAttribute('src', xhr.response[i].image);
    $img.className = 'card';
    var $p = document.createElement('p');
    $p.textContent = xhr.response[i].description;

    $card.appendChild($h2);
    $card.appendChild($img);
    $card.appendChild($p);

    $cards.appendChild($card);
  }
});

// Details Page

xhr.addEventListener('click', function () {
  // console.log('xhr status:', xhr.status);
  // console.log('xhr response:', xhr.response);

  document.addEventListener('click', function (event) {
    // console.log('click!');
    if (event.target.matches('h2') || event.target.matches('.card')) {
      // console.log('title has been clicked!');
    }
  });

  for (let i = 0; i < xhr.response.length; i++) {
    var $card = document.createElement('section');
    var $h2 = document.createElement('h2');
    $h2.textContent = xhr.response[i].title;
    var $img = document.createElement('img');
    $img.setAttribute('src', xhr.response[i].image);
    $img.className = 'card';
    var $p = document.createElement('p');
    $p.textContent = xhr.response[i].description;

    $card.appendChild($h2);
    $card.appendChild($img);
    $card.appendChild($p);

    $cards.appendChild($card);
  }
});

xhr.send();
