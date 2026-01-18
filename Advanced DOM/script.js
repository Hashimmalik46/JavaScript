'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////////////
////////////////////////////////////////////////
// Selecting
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); //this method returns and HTML collection, it changes automatically when DOM is updated, unlike the node list which doesnt update automatically and retains the previous state.

console.log(document.getElementsByClassName('btn'));
//also returns live collection

//Creating and inserting
//.innerAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent="we use cookies for improved functionality"
message.innerHTML =
  'we use cookies for improved functionality. <button class="btn btn--close-cookie">Got it!</button>';
header.prepend(message);
header.append(message);
//dom elements are unique so we can not only insert elements but can move them like we did by first using prepend then append.
//if we want clones
// header.append(message.cloneNode(true));

header.before(message);
// header.after(message)

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    //old way(DOM Traversing)
    // message.parentElement.removeChild(message)
    message.remove();
  });
