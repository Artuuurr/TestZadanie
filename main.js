const FILMS = [
    {
        id: 1, 
        name: 'Игра престолов' ,
        duration: '190:50:10', 
        price: 390, 
        rating: '9.0', 
        reviews: 230
    },
    {
        id: 2, 
        name: 'Железный человек' ,
        duration: '1:20:10', 
        price: 200, 
        rating: '9.3', 
        reviews: 142
    },
    {
        id: 3, 
        name: 'Железный человек 2' ,
        duration: '1:33:00', 
        price: 210, 
        rating: '8.5', 
        reviews: 133
    },
    {
        id: 4, 
        name: 'Мстители' ,
        duration: '1:36:33', 
        price: 400, 
        rating: '8.8', 
        reviews: 110
    },
    {
        id: 5, 
        name: 'Время' ,
        duration: '1:14:22', 
        price: 154, 
        rating: '8.2', 
        reviews: 56
    },
    {
        id: 6, 
        name: 'Эффект бабочки' ,
        duration: '1:42:00', 
        price: 100, 
        rating: '7.7', 
        reviews: 30
    },
    {
        id: 7, 
        name: 'Противостояние' ,
        duration: '1:12:12', 
        price: 110, 
        rating: '7.0', 
        reviews: 12
    }
]

const wrapper = document.querySelector('.wrapper');
const btnSortAscend = document.querySelectorAll('.btn-srt')[0];
const btnSortDescen = document.querySelectorAll('.btn-srt')[1];
const inputfilter = document.querySelector('.inputSort');


function displayFILMS (array){
    wrapper.innerHTML = array.map((film) => `
        <div class="box-book" id=${film.id}>
            <p style="padding: 26px 0;">${film.name}</p>
            <p style="padding: 26px 0;">${film.duration}</p>
            <p style="padding: 26px 0;">${film.price} руб</p>
            <p style="padding: 26px 0;">${film.rating}</p>
            <p style="padding: 26px 0;">${film.reviews}</p>
            <button class="btn-buy">Купить</button>
        </div>
    `).join("");
}


function sortAscend(){
    FILMS.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    displayFILMS(FILMS);
}

function sortDescen(){
    FILMS.sort(function (a, b) {
        if (a.price < b.price) {
          return 1;
        }
        if (a.price > b.price) {
          return -1;
        }
        return 0;
      });
    displayFILMS(FILMS);
}

btnSortAscend.addEventListener("click", sortAscend);
btnSortDescen.addEventListener("click", sortDescen);

displayFILMS(FILMS);

inputfilter.addEventListener('input', function() {
    var inputText = inputfilter.value.toLowerCase();
    var filteredFilms = FILMS.filter(function(film) {
        return film.name.toLowerCase().includes(inputText);
    });
    displayFILMS(filteredFilms);
});

const btnsBuy = document.querySelectorAll('.btn-buy');

function changeFilm(film) {
    console.log(`Купленный фильм: ${film.id}`);
  }

btnsBuy.forEach((btnBuy, index) => {
    btnBuy.addEventListener('click', () => {
    changeFilm(FILMS[index]);  
    });
});

