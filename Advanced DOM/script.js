'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabCont = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
const imgTargets = document.querySelectorAll('img[data-src]');
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotsCont = document.querySelector('.dots');

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

//Scroll Button
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  // console.log(e.target.getBoundingClientRect()); //reltive to viewport
  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  // console.log(
  //   'height/width of viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth,
  // );

  //Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset, //current postion + current scroll
  //   s1coords.top + window.pageYOffset,
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset, //current postion + current scroll
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //Modern way
  section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////////////////////////////////////
//Page Navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//Using Event Delegation(Adding event listner to common parent element, determine what element originated the event)
//By event delegation we can use event handlers on elements that dont exist in the beginnning that's those that are generated dynamically, this cant be done by event handlers.
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//Tabbed Component

tabCont.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  //Guard Clause
  if (!clicked) return;

  //Removing active classes
  tabs.forEach(t => {
    t.classList.remove('operations__tab--active');
  });
  tabsContent.forEach(c => {
    c.classList.remove('operations__content--active');
  });

  //Active Tab
  clicked.classList.add('operations__tab--active');

  //Activating content area
  const data = clicked.dataset.tab;
  console.log(data);

  const content = document.querySelector(`.operations__content--${data}`);

  content.classList.add('operations__content--active');
});

//Adding menu effect(fade)
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

//Passing args into event handlers
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//Sticky Navbar
// const coords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);
//   if (window.scrollY > coords.top) {
//     nav.classList.add('sticky');
//   } else nav.classList.remove('sticky');
// });//But scroll event is not an optimal way to do it...

//Using Intersection Observer API

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null, //elements the target is intersecting, null= entire viewport
//   threshold: [0, 0.2], //percentage of intersection at which observercallback will be called, 0 means completely out of view.
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, //this is the height of navbar, this will apply a box outside of our target element.We did this so that the nav bar will not overlap the section 1 and starts just according to its height.
});
headerObserver.observe(header);

//Revealing elements/sections
const revealSection = function (entries, observer) {
  // const [entry] = entries;//observer api observes all at the beginning itself so we can loop over all those observations to fix the reload bug.
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(sec => {
  sectionObserver.observe(sec);
  sec.classList.add('section--hidden');
});

//Lazy Loading images(very low resolution image loaded in the beginning in the src attribute)
const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img'); //remove filter once it is loaded.
  });
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px', //so that it is not lazy loading is not visible to the user.
});
imgTargets.forEach(img => imgObserver.observe(img));

//Slider Component
const sliderComp = function () {
  let curSlide = 0;
  const maxSlides = slides.length;
  slider.style.overflow = 'visible';

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotsCont.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`,
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSLide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${120 * (i - slide)}%)`;
    });
  };

  const nextSlide = function () {
    if (curSlide === maxSlides - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSLide(curSlide);
    activateDot(curSlide);
  };
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlides - 1;
    } else {
      curSlide--;
    }
    goToSLide(curSlide);
    activateDot(curSlide);
  };

  //Init Fn
  const init = function () {
    createDots();
    activateDot(0);
    goToSLide(0);
  };

  init();

  //Event Handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    else if (e.key === 'ArrowRight') nextSlide();
  });

  dotsCont.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const curSlide = Number(e.target.dataset.slide);
      goToSLide(curSlide);
      activateDot(curSlide);
    }
  });
};
sliderComp();
////////////////////////////////////////////////
// Selecting
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); //this method returns and HTML collection, it changes automatically when DOM is updated, unlike the node list which doesnt update automatically and retains the previous state.

console.log(document.getElementsByClassName('btn'));
//also returns live collection

//Creating and inserting
//.innerAdjacentHTML

// //Cookie Message
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent="we use cookies for improved functionality"
// message.innerHTML =
//   'we use cookies for improved functionality. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
// header.append(message);
// //dom elements are unique so we can not only insert elements but can move them like we did by first using prepend then append.
// //if we want clones
// // header.append(message.cloneNode(true));

// header.before(message);
// // header.after(message)

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     //old way(DOM Traversing)
//     // message.parentElement.removeChild(message)
//     message.remove();
//   });

// //Styles, these are added as inline styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.color); //doesnt give anything
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 15 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'a logo';

//Non standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'bankist');

console.log(logo.src); //absolute url
console.log(logo.getAttribute('src')); //relative
//works on link attribute too

//Data Attributes
console.log(logo.dataset.versionNumber);

//Classes
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();

const h1 = document.querySelector('h1');

const h1alert = function (e) {
  // alert('You are reading the heading!');
};
h1.addEventListener('mouseenter', h1alert);

// h1.onmouseenter = function (e) {
//   alert('You areee reading the heading!');//oldway
// };

//adv of addeventlistner is we can add multiply functions on the same event, we can also remove an eventhandler

setTimeout(() => h1.removeEventListener('mouseenter', h1alert), 3000);

//We can handle events in the html itself, like "onclick"

//Event propagation
// const randomInt = (max, min) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// // console.log(randomColor(0,255));

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   //stopping propagation
//   // e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Container', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Nav', e.target, e.currentTarget);
// });
//If i choose any target the event bubbles up to all the parent elements

//To handle at capturing phase, add a true parameter in the event handler fn.

//DOM Traversing
//Going downwards: child
console.log(h1.querySelectorAll('.highlight')); //this only shows the direct connection no matter how far up in the dom tree but not any other highlight class in the dom.
console.log(h1.childNodes); //direct children
console.log(h1.children);

// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orange';

// //Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

// //If we want to select any other parent not the direct one.
// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';
// //Queryselector finds children no matter how deep in the dom tree, while as closest finds the parents no matter how far up in the dom tree.

// //Going Sideways: siblings(only the direct ones)
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

// //If we want to get all the siblings
console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

//Lifecycle DOM Events
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built', e); //this event is fired as soon as the html is downloaded and been converted to dom tree, also all scripts must be dwnloaded and executed before this.
});
window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);//Fired when all other resources are laoded.
});
window.addEventListener('beforfeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});




