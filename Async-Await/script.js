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

//Callback Hell(nesting of calls)
const renderError = function (msg) {
  countriesContainer.insertAdjacentHTML('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};
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

// const getCountryAndNeighbour = function (country) {
//   //AJAX call 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     //Render country
//     renderCountry(data);

//     const neigh = data.borders?.[0];
//     if (!neigh) return;
//     console.log(neigh);

//     //AJAX call 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neigh}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       console.log(this.responseText);

//       const neighData = JSON.parse(this.responseText);

//       renderCountry(neighData, 'neighbour');
//     });
//   });
// };
// const getDetails = function () {
//   const inputCountry = input.value;
//   console.log(inputCountry);
//   getCountryAndNeighbour(inputCountry);
//   inputBox.style.opacity = 0;
// };
// searchBtn.addEventListener('click', getDetails);

//Promises(placeholder of a future value or result of an async fn)
//First it goes in pending state then it is settled,a promise is settled only once(then it has two states fulfilled and rejected)

const request = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request);

// const getCountry = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       return response.json(); //also a promise
//     })
//     .then(function (data) {
//       renderCountry(data[0]);
//     });
// };

// getCountry('usa');

// //Chanining promises
// const getCountry = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Country not found!(${response.status})`);
//       } //This will reject the promise and then will propagate to the catch block
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neigh = data[0].borders?.[0];
//       if (!neigh) return;

//       return fetch(`https://restcountries.com/v2/alpha/${neigh}`);
//     }) //whatever we return from the prev then method will become a fullfilled value for next then method
//     //fetch(`https://restcountries.com/v2/alpha/${neigh}`).then
//     //we can do this also but its still callback hell so always return it an then use then method outside of the prev then method.
//     .then(response => response.json())
//     .then(neighdata => renderCountry(neighdata, 'neighbour'))
//     .catch(err => {
//       console.log(`${err}💥💥💥`);
//       renderError(`Something went wrong❌${err.message}`); //err.message is the message that we passed above.
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', () => {
//   getCountry('russia');
// });

//Handling rejected promises
//Fetch only returns error in case of user got disconnected
//Then rerturns when promise is fulfilled and catch returns when it is rejected while as finally returns always.
//we can handle errors in 2 ways either using another callback in then
// .then(response => response.json(), err=> ) or using catch

// const getJSON = function (url, errMsg = 'Something went wrong!') {
//   return fetch(url).then(response => {
//     if (!response.ok) {
//       throw new Error(`${errMsg}(${response.status})`);
//     }
//     return response.json();
//   });
// };

// const getCountry = function (country) {
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country Not found')
//     .then(data => {
//       renderCountry(data[0]);

//       const neigh = data[0].borders?.[0];
//       if (!neigh) throw new Error('No neighbour found');

//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neigh}`,
//         'Neighbour Not Found',
//       );
//     })
//     .then(neighdata => renderCountry(neighdata, 'neighbour'))
//     .catch(err => {
//       console.log(`${err}💥💥💥`);
//       renderError(`Something went wrong! ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', () => {
//   getCountry('australia');
// });

// //Event Loop
// console.log('Test 1'); //1
// setTimeout(() => {
//   console.log('0 sec timer'); //2
// }, 0);
// Promise.resolve('resolved promise 1').then(res => console.log(res)); //3 promise.resolve() resolves immediately
// console.log('Test ended'); //4
// //Seq=1->4->3->2
// //This happened because microtask queue has priority over callback queue.

// //Creating own promises
// const lotteryPromise = new Promise(function (resolve, reject) {
//   //Executor function
//   console.log('Lottery Draw is happening🔮');
//   //making it async
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You Won 💰');
//     } else {
//       reject(new Error('You Lost😔'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// //Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('1 sec Passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 secs Passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 secs Passed');
//     return wait(1);
//   });

// //Callback Hell
// setTimeout(() => {
//   console.log('1 sec Passed');
//   setTimeout(() => {
//     console.log('2 secs Passed');
//     setTimeout(() => {
//       console.log('3 secs Passed');
//     }, 1000);
//   }, 1000);
// }, 1000);

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem')).catch(err => console.log(err)); //when nothing is to be resolved then we dont use then.

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.
The AJAX call will be done to a URL with this format: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.`,
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(
//         `You've entered the wrong coordinates ${response.status}`,
//       );
//     }
//     return response
//       .json()
//       .then(location => {
//         console.log(location);
//         console.log(`You are in ${location.city}, ${location.countryName}.`);
//         return fetch(
//           `https://restcountries.com/v2/name/${location.countryName}`,
//         );
//       })
//       .then(res => {
//         return res.json().then(country => {
//           console.log(country[1]);
//           renderCountry(country[1]);
//         });
//       })
//       .catch(err => {
//         console.log(err.message);
//       })
//       .finally(() => {
//               countriesContainer.style.opacity = 1;
//       });
//   });
// };
// whereAmI(52.508, 13.381);
// // whereAmI(19.037, 72.873);
// // whereAmI(-33.933, 18.474);

// navigator.geolocation.getCurrentPosition(position => {
//   (console.log(position), err => console.err(err));
// });
// // console.log('Gettting Postion');

// const getPos = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(position => {
//     //   (resolve(position), err => reject(err));
//     // });
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = function () {
//   getPos().then(pos => {
//     const { latitude: lat, longitude: lng } = pos.coords;

//     fetch(
//       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.`,
//     ).then(response => {
//       return response.json().then(country => {
//         console.log(`Your are in ${country.city}.`);
//       });
//     });
//   });
// };
// whereAmI();

//Consuming using async/await
const getPos = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async () => {
  try {
    const pos = await getPos();
    const { latitude: lat, longitude: lng } = pos.coords;

    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.`,
    );
    if (!resGeo.ok) throw new Error('Problem getting data');

    const dataGeo = await resGeo.json();

    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.countryName}`,
    );
    if (!resGeo.ok) throw new Error('Problem getting country');

    const data = await res.json();
    renderCountry(data[1]);
    return `You are in ${dataGeo.city}`;
  } catch (err) {
    console.log(`${err}`);
    renderError(`${err.message}`);

    //Reject Promise from async
    throw err;
  }
};
whereAmI();

// //Returning values from async
// console.log('1: Will get Location');
// // const res = whereAmI();
// // console.log(res);//showing promise pending
// whereAmI()
//   .then(res => console.log(`2: ${res}`))
//   .catch(err => console.err(`2:${err.message}`))
//   .finally(() => {
//     console.log('3: Ending...'); //in order to print 3 after 2 as 2 is async it would be executed at last.
//   });
// //if there is an error above it will still return a promise as the promise by async is never rejected.

//Converting it into aync/await, can be done using IIfs
(async function () {
  console.log('1: Will get location!');
  try {
    const city = await whereAmI();
    console.log(city);
  } catch (err) {
    console.error(`2:${err.message}`);
  }
  console.log('3: Ending...');
})();
