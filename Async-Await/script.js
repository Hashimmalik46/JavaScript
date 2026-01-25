'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const searchBtn = document.querySelector('.btn-search');
const input = document.querySelector('.input-search');
const inputBox = document.querySelector('.input-box');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
//https://countries-api-836d.onrender.com/countries/

// const getCountry=function(country){
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

// request.addEventListener('load', function () {
//   const [data] = JSON.parse(this.responseText);
//   console.log(data);

//   const countryCard = `
//    <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${+((data.population)/1000000).toFixed(2)} M</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//           </div>
//         </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', countryCard);
//   countriesContainer.style.opacity = 1;
// });
// }
// getCountry('germany')
// getCountry('usa')

//Callback Hell

const renderCountry = function (data, className = '') {
  const countryCard = `
   <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${+(data.population / 1000000).toFixed(2)} M</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', countryCard);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  //AJAX call 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //Render country
    renderCountry(data);

    const neigh = data.borders?.[0];
    if (!neigh) return;
    console.log(neigh);

    //AJAX call 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neigh}`);
    request2.send();

    request2.addEventListener('load', function () {
      console.log(this.responseText);

      const neighData = JSON.parse(this.responseText);

      renderCountry(neighData, 'neighbour');
    });
  });
};
const getDetails = function () {
  const inputCountry = input.value;
  console.log(inputCountry);
  getCountryAndNeighbour(inputCountry);
  inputBox.style.opacity = 0;
};
searchBtn.addEventListener('click', getDetails);
