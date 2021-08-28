$(document).ready(function () {

  $('.grid').isotope({ itemSelector: '.grid-item', masonry: { columnWidth: 150 } });

});

var DATACONTENT = {
    karizi: {
        html: 'Html5',
        css: 'Css3',
        js: 'javascript',
        bootstrap: 'Bootstrap 3.3.7',
        jq: 'Jquery',
        lib_1: 'FancyBoxApp',
        lib_2: 'Owl-carousel',
        lib_3: 'Jssor',
        lib_4: '',
      },
    gallery: {
        html: 'html5',
        css: 'css3',
        js: 'javascript',
        bootstrap: '',
        jq: 'jquery',
        lib_1: 'FancyBoxApp',
        lib_2: 'Owl-carousel',
        lib_3: 'Isotope.js',
        lib_4: '',
      },
    beartist: {
        html: 'html5',
        css: 'css3',
        js: '',
        bootstrap: '',
        jq: 'jquery',
        lib_1: 'FancyBoxApp',
        lib_2: 'Owl-carousel',
        lib_3: 'Isotope.js',
        lib_4: '',
      },
    auto: {
        html: 'html5',
        css: 'css3',
        js: '',
        bootstrap: '',
        jq: 'jquery',
        lib_1: 'Owl-carousel',
        lib_2: 'Jssor.js',
        lib_3: 'Rellax.js',
        lib_4: 'ViewPortChecker',
      },
    guest: {
        html: 'html5',
        css: 'css3',
        js: 'javascript',
        bootstrap: 'bootstrap',
        jq: 'jquery',
        lib_1: 'FancyBoxApp',
        lib_2: 'Owl-carousel',
        lib_3: 'Jssor',
        lib_4: '',
      },
    stiker: {
        html: 'html5',
        css: 'css3',
        js: 'javascript',
        bootstrap: '',
        jq: 'jquery',
        lib_2: 'Owl-carousel',
        lib_1: '',
        lib_3: '',
        lib_4: '',
      },
    cars: {
        html: 'html5',
        css: 'css3',
        js: 'javascript',
        bootstrap: '',
        jq: '',
        lib_1: 'Jssor',
        lib_2: '',
        lib_3: '',
        lib_4: '',
      },
    portfolio: {
        html: 'html5',
        css: 'css3',
        js: 'javascript',
        bootstrap: 'bootstrap',
        jq: '',
        lib_1: 'Isotope.js',
        lib_2: '',
        lib_3: '',
        lib_4: '',
      },
    livingstone: {
        html: 'html5',
        css: 'css3',
        js: 'javascript',
        bootstrap: '',
        jq: '',
        lib_1: '',
        lib_2: '',
        lib_3: '',
        lib_4: '',
      },
    howto: {
        html: 'html5',
        css: 'css3',
        js: 'javascript',
        bootstrap: '',
        jq: 'jquery',
        lib_1: 'Owl carousel',
        lib_2: 'Jssor',
        lib_3: '',
        lib_4: '',
      },
    kgt: {
        html: 'html5',
        css: 'css3',
        js: 'javascript',
        bootstrap: 'bootstrap',
        jq: 'jquery',
        lib_1: 'fancyBoxApp',
        lib_2: 'Owl carousel',
        lib_3: 'Isotope.js',
        lib_4: '',
      },
  };

function changeData(content) {

  for (var i in  DATACONTENT[content]) {

    document.querySelector('[data-content="' + i + '"]').innerText = DATACONTENT[content][i];
  }

}

const body = document.querySelector('body');

var modalWrapper = document.getElementsByClassName('modal')[0];
var modalWindow = document.getElementById('modal-window');

var closeBtn = document.getElementById('close-btn');

closeBtn.onclick = function () {
  if (modalWindow.classList.contains('open-modal')) {

    modalWindow.className = 'modal-wrapper close-modal';
    modalWrapper.style.zIndex = '0';
  }
};

modalWrapper.onclick = function () {
  if (modalWindow.classList.contains('open-modal')) {

    modalWindow.className = 'modal-wrapper close-modal';
    setTimeout(function() {
      modalWrapper.style.zIndex = '0';
    }, 1);
  }
};


var gallery = document.getElementById('gallery');
var karizi = document.getElementById('karizi');
var auto = document.getElementById('auto');
var cars = document.getElementById('cars');
var guest = document.getElementById('guest');
var howto = document.getElementById('howto');
var livingstone = document.getElementById('livingstone');
var portfolio = document.getElementById('portfolio');
var stiker = document.getElementById('stiker');
var beartist = document.getElementById('beartist');

// მასივი

var imgs = document.getElementsByClassName('img-140x140');

for (var x = 0; x < imgs.length; x++) {

  imgs[x].addEventListener('click', function () {

        if (modalWindow.className = 'modal-wrapper close-modal') {
          modalWindow.className = 'modal-wrapper open-modal';
          modalWrapper.style.zIndex = '10';
        }
      });
}

// სურათები
var img1 = document.getElementById('img-1');
var img2 = document.getElementById('img-2');
var img3 = document.getElementById('img-3');
var img4 = document.getElementById('img-4');

// ლინკები
var serverLink = document.getElementsByClassName('server')[0];
var githubLink = document.getElementsByClassName('github')[0];

karizi.addEventListener('click', function () {
  img1.src = 'assets/img/karizi/1.png';
  img2.src = 'assets/img/karizi/2.png';
  img3.src = 'assets/img/karizi/3.png';
  img4.src = 'assets/img/karizi/4.png';

  serverLink.href = 'http://karizi.ge';
  githubLink.href = 'https://github.com/AleksiSvaridze/karizi.ge';
});

gallery.addEventListener('click', function () {
  img1.src = 'assets/img/acgallery/1.png';
  img2.src = 'assets/img/acgallery/2.png';
  img3.src = 'assets/img/acgallery/3.png';
  img4.src = 'assets/img/acgallery/4.png';

  serverLink.href = 'http://tbilisi.atwebpages.com/Art-Gallery/';
  githubLink.href = 'https://github.com/AleksiSvaridze/Art-Gallery';
});

auto.addEventListener('click', function () {
  img1.src = 'assets/img/auto/1.jpg';
  img2.src = 'assets/img/auto/2.jpg';
  img3.src = 'assets/img/auto/3.jpg';
  img4.src = 'assets/img/auto/4.jpg';

  serverLink.href = 'http://tbilisi.atwebpages.com/auto/';
  githubLink.href = 'https://github.com/AleksiSvaridze/auto';
});

cars.addEventListener('click', function () {
  img1.src = 'assets/img/cars/1.jpg';
  img2.src = 'assets/img/cars/2.jpg';
  img3.src = 'assets/img/cars/3.jpg';
  img4.src = 'assets/img/cars/3.png';

  serverLink.href = 'http://carsforrent.ge';
  githubLink.href = '#';
});

guest.addEventListener('click', function () {
  img1.src = 'assets/img/guest/1.png';
  img2.src = 'assets/img/guest/2.png';
  img3.src = 'assets/img/guest/5.png';
  img4.src = 'assets/img/guest/4.png';

  serverLink.href = 'http://tbilisi.atwebpages.com/Guest/index.html';
  githubLink.href = 'https://github.com/AleksiSvaridze/Guest';
});

howto.addEventListener('click', function () {
  img1.src = 'assets/img/howto/1.png';
  img2.src = 'assets/img/howto/1.png';
  img3.src = 'assets/img/howto/1.png';
  img4.src = 'assets/img/howto/1.png';

  serverLink.href = 'http://tbilisi.atwebpages.com/howto-front/';
  githubLink.href = 'https://github.com/GeoLabJuniors/howto-front';
});

livingstone.addEventListener('click', function () {
  img1.src = 'assets/img/livingstone/1.png';
  img2.src = 'assets/img/livingstone/2.png';
  img3.src = 'assets/img/livingstone/3.png';
  img4.src = 'assets/img/livingstone/4.png';

  serverLink.href = 'http://tbilisi.atwebpages.com/livingstone/';
  githubLink.href = 'https://github.com/AleksiSvaridze/livingstone';
});

portfolio.addEventListener('click', function () {
  img1.src = 'assets/img/portfolio/1.png';
  img2.src = 'assets/img/portfolio/2.png';
  img3.src = 'assets/img/portfolio/1.png';
  img4.src = 'assets/img/portfolio/3.png';

  serverLink.href = 'http://tbilisi.atwebpages.com/aleksisvaridze.github.io/';
  githubLink.href = 'https://github.com/AleksiSvaridze/aleksisvaridze.github.io';
});

stiker.addEventListener('click', function () {
  img1.src = 'assets/img/stiker/1.png';
  img2.src = 'assets/img/stiker/2.png';
  img3.src = 'assets/img/stiker/3.png';
  img4.src = 'assets/img/stiker/4.png';

  serverLink.href = 'http://tbilisi.atwebpages.com/Stikers_v2/';
  githubLink.href = 'https://github.com/AleksiSvaridze/Stikers_v2';
});

beartist.addEventListener('click', function () {
  img1.src = 'assets/img/beartist/1.png';
  img2.src = 'assets/img/beartist/1.png';
  img3.src = 'assets/img/beartist/1.png';
  img4.src = 'assets/img/beartist/1.png';

  serverLink.href = '#';
  githubLink.href = '#';
});

// Email closeBtn
var mailBtn = document.getElementsByClassName('thumb')[0];
var mailLink = document.getElementsByClassName('email-a')[0];

function moveBtn() {
  if (mailBtn.className == 'thumb') {
    mailBtn.className = 'thumb active-tumb';
    mailLink.className = 'email-a active-email-a';
  } else {
    mailBtn.className = 'thumb';
    mailLink.className = 'email-a';
  }
}
