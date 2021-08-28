var allProducts = document.getElementsByClassName('all-productes')[0];

allProducts.addEventListener('click', function () {
  const nextModal = document.createElement('div');
  body.insertBefore(nextModal, body.getElementsByTagName('div')[0]);
  nextModal.setAttribute('class', 'next-modal');

  setTimeout(function() {
      nextModal.style.opacity = 1;
  }, 100);
  // Close i tag
  const i = document.createElement('i');
  i.classList.add('far', 'fa-window-close');
  i.setAttribute('id', 'close-next-modal');
  nextModal.appendChild(i);

    i.addEventListener('click', function () {
       setTimeout(function() {
          if (nextModal.style.opacity = 1) {
            body.removeChild(nextModal);
          }
      }, 300);
      nextModal.style.opacity = 0;
    });
  // karizi
  const createKarizi = document.createElement('div');
  nextModal.appendChild(createKarizi);
  const innerKarizi = document.createElement('div');
  const infoKarizi = document.createElement('div');
  const kariziLink = document.createElement('a');
  const kariziImg = document.createElement('img');

  nextModal.appendChild(createKarizi);
  createKarizi.appendChild(innerKarizi);
  innerKarizi.appendChild(kariziImg);
  innerKarizi.appendChild(infoKarizi);
  infoKarizi.appendChild(kariziLink);

  createKarizi.className = 'main-div';
  innerKarizi.setAttribute('class', 'innerDivClass');
  kariziImg.classList.add('img');
  kariziImg.src = 'assets/img/karizi/1.png';
  infoKarizi.setAttribute('class', 'info-div');
  kariziLink.classList.add('link-to-site');
  kariziLink.setAttribute('href', 'http://karizi.ge');
  kariziLink.setAttribute('target', '_blank');
  kariziLink.innerText = 'საიტის ნახვა';

  // Guest Elements
  const createguest = document.createElement('div');
  nextModal.appendChild(createguest);
  const innerguest = document.createElement('div');
  const infoguest = document.createElement('div');
  const guestLink = document.createElement('a');
  const guestImg = document.createElement('img');

  nextModal.appendChild(createguest);
  createguest.appendChild(innerguest);
  innerguest.appendChild(guestImg);
  innerguest.appendChild(infoguest);
  infoguest.appendChild(guestLink);

  createguest.className = 'main-div';
  innerguest.setAttribute('class', 'innerDivClass');
  guestImg.classList.add('img');
  guestImg.src = 'assets/img/guest/4.png';
  infoguest.setAttribute('class', 'info-div');
  guestLink.classList.add('link-to-site');
  guestLink.setAttribute('href', 'http://tbilisi.atwebpages.com/Guest/');
  guestLink.setAttribute('target', '_blank');
  guestLink.innerText = 'საიტის ნახვა';

  // Livingstone
  const createlivingstone = document.createElement('div');
  nextModal.appendChild(createlivingstone);
  const innerlivingstone = document.createElement('div');
  const infolivingstone = document.createElement('div');
  const livingstoneLink = document.createElement('a');
  const livingstoneImg = document.createElement('img');

  nextModal.appendChild(createlivingstone);
  createlivingstone.appendChild(innerlivingstone);
  innerlivingstone.appendChild(livingstoneImg);
  innerlivingstone.appendChild(infolivingstone);
  infolivingstone.appendChild(livingstoneLink);

  createlivingstone.className = 'main-div';
  innerlivingstone.setAttribute('class', 'innerDivClass');
  livingstoneImg.classList.add('img');
  livingstoneImg.src = 'assets/img/livingstone/2.png';
  infolivingstone.setAttribute('class', 'info-div');
  livingstoneLink.classList.add('link-to-site');
  livingstoneLink.setAttribute('href', 'http://tbilisi.atwebpages.com/livingstone/');
  livingstoneLink.setAttribute('target', '_blank');
  livingstoneLink.innerText = 'საიტის ნახვა';

  // Portfolio
  const createportfolio = document.createElement('div');
  nextModal.appendChild(createportfolio);
  const innerportfolio = document.createElement('div');
  const infoportfolio = document.createElement('div');
  const portfolioLink = document.createElement('a');
  const portfolioImg = document.createElement('img');

  nextModal.appendChild(createportfolio);
  createportfolio.appendChild(innerportfolio);
  innerportfolio.appendChild(portfolioImg);
  innerportfolio.appendChild(infoportfolio);
  infoportfolio.appendChild(portfolioLink);

  createportfolio.className = 'main-div';
  innerportfolio.setAttribute('class', 'innerDivClass');
  portfolioImg.classList.add('img');
  portfolioImg.src = 'assets/img/portfolio/1.png';
  infoportfolio.setAttribute('class', 'info-div');
  portfolioLink.classList.add('link-to-site');
  portfolioLink.setAttribute('href', 'http://tbilisi.atwebpages.com/aleksisvaridze.github.io/');
  portfolioLink.setAttribute('target', '_blank');
  portfolioLink.innerText = 'საიტის ნახვა';

  // Auto
  const createauto = document.createElement('div');
  nextModal.appendChild(createauto);
  const innerauto = document.createElement('div');
  const infoauto = document.createElement('div');
  const autoLink = document.createElement('a');
  const autoImg = document.createElement('img');

  nextModal.appendChild(createauto);
  createauto.appendChild(innerauto);
  innerauto.appendChild(autoImg);
  innerauto.appendChild(infoauto);
  infoauto.appendChild(autoLink);

  createauto.className = 'main-div';
  innerauto.setAttribute('class', 'innerDivClass');
  autoImg.classList.add('img');
  autoImg.src = 'assets/img/auto/1.jpg';
  infoauto.setAttribute('class', 'info-div');
  autoLink.classList.add('link-to-site');
  autoLink.setAttribute('href', 'http://tbilisi.atwebpages.com/auto');
  autoLink.setAttribute('target', '_blank');
  autoLink.innerText = 'საიტის ნახვა';

  // Gallery
  const creategallery = document.createElement('div');
  nextModal.appendChild(creategallery);
  const innergallery = document.createElement('div');
  const infogallery = document.createElement('div');
  const galleryLink = document.createElement('a');
  const galleryImg = document.createElement('img');

  nextModal.appendChild(creategallery);
  creategallery.appendChild(innergallery);
  innergallery.appendChild(galleryImg);
  innergallery.appendChild(infogallery);
  infogallery.appendChild(galleryLink);

  creategallery.className = 'main-div';
  innergallery.setAttribute('class', 'innerDivClass');
  galleryImg.classList.add('img');
  galleryImg.src = 'assets/img/acgallery/4.png';
  infogallery.setAttribute('class', 'info-div');
  galleryLink.classList.add('link-to-site');
  galleryLink.setAttribute('href', 'http://tbilisi.atwebpages.com/Art-Gallery/');
  galleryLink.setAttribute('target', '_blank');
  galleryLink.innerText = 'საიტის ნახვა';

  // Carrent
  const createcars = document.createElement('div');
  nextModal.appendChild(createcars);
  const innercars = document.createElement('div');
  const infocars = document.createElement('div');
  const carsLink = document.createElement('a');
  const carsImg = document.createElement('img');

  nextModal.appendChild(createcars);
  createcars.appendChild(innercars);
  innercars.appendChild(carsImg);
  innercars.appendChild(infocars);
  infocars.appendChild(carsLink);

  createcars.className = 'main-div';
  innercars.setAttribute('class', 'innerDivClass');
  carsImg.classList.add('img');
  carsImg.src = 'assets/img/cars/4.png';
  infocars.setAttribute('class', 'info-div');
  carsLink.classList.add('link-to-site');
  carsLink.setAttribute('href', 'http://carsforrent.ge');
  carsLink.setAttribute('target', '_blank');
  carsLink.innerText = 'საიტის ნახვა';

  // JustInfo
  const createjustInfo = document.createElement('div');
  nextModal.appendChild(createjustInfo);
  const innerjustInfo = document.createElement('div');
  const infojustInfo = document.createElement('div');
  const justInfoLink = document.createElement('a');
  const justInfoImg = document.createElement('img');

  nextModal.appendChild(createjustInfo);
  createjustInfo.appendChild(innerjustInfo);
  innerjustInfo.appendChild(justInfoImg);
  innerjustInfo.appendChild(infojustInfo);
  infojustInfo.appendChild(justInfoLink);

  createjustInfo.className = 'main-div';
  innerjustInfo.setAttribute('class', 'innerDivClass');
  justInfoImg.classList.add('img');
  justInfoImg.src = 'assets/img/justInfo/1.png';
  infojustInfo.setAttribute('class', 'info-div');
  justInfoLink.classList.add('link-to-site');
  justInfoLink.setAttribute('href', 'http://tbilisi.atwebpages.com/');
  justInfoLink.setAttribute('target', '_blank');
  justInfoLink.innerText = 'საიტის ნახვა';

  // Kgt
  const createkgt = document.createElement('div');
  nextModal.appendChild(createkgt);
  const innerkgt = document.createElement('div');
  const infokgt = document.createElement('div');
  const kgtLink = document.createElement('a');
  const kgtImg = document.createElement('img');

  nextModal.appendChild(createkgt);
  createkgt.appendChild(innerkgt);
  innerkgt.appendChild(kgtImg);
  innerkgt.appendChild(infokgt);
  infokgt.appendChild(kgtLink);

  createkgt.className = 'main-div';
  innerkgt.setAttribute('class', 'innerDivClass');
  kgtImg.classList.add('img');
  kgtImg.src = 'assets/img/kgt/3.png';
  infokgt.setAttribute('class', 'info-div');
  kgtLink.classList.add('link-to-site');
  kgtLink.setAttribute('href', 'http://tbilisi.atwebpages.com/kingdomGeorgiaRepository/');
  kgtLink.setAttribute('target', '_blank');
  kgtLink.innerText = 'საიტის ნახვა';

  // Stikers
  const createstiker = document.createElement('div');
  nextModal.appendChild(createstiker);
  const innerstiker = document.createElement('div');
  const infostiker = document.createElement('div');
  const stikerLink = document.createElement('a');
  const stikerImg = document.createElement('img');

  nextModal.appendChild(createstiker);
  createstiker.appendChild(innerstiker);
  innerstiker.appendChild(stikerImg);
  innerstiker.appendChild(infostiker);
  infostiker.appendChild(stikerLink);

  createstiker.className = 'main-div';
  innerstiker.setAttribute('class', 'innerDivClass');
  stikerImg.classList.add('img');
  stikerImg.src = 'assets/img/stiker/2.png';
  infostiker.setAttribute('class', 'info-div');
  stikerLink.classList.add('link-to-site');
  stikerLink.setAttribute('href', 'http://tbilisi.atwebpages.com/Stikers_v2/');
  stikerLink.setAttribute('target', '_blank');
  stikerLink.innerText = 'საიტის ნახვა';

  // beArtist
  const createbeartist = document.createElement('div');
  nextModal.appendChild(createbeartist);
  const innerbeartist = document.createElement('div');
  const infobeartist = document.createElement('div');
  const beartistLink = document.createElement('a');
  const beartistImg = document.createElement('img');

  nextModal.appendChild(createbeartist);
  createbeartist.appendChild(innerbeartist);
  innerbeartist.appendChild(beartistImg);
  innerbeartist.appendChild(infobeartist);
  infobeartist.appendChild(beartistLink);

  createbeartist.className = 'main-div';
  innerbeartist.setAttribute('class', 'innerDivClass');
  beartistImg.classList.add('img');
  beartistImg.src = 'assets/img/beartist/1.png';
  infobeartist.setAttribute('class', 'info-div');
  beartistLink.classList.add('link-to-site');
  beartistLink.setAttribute('href', 'http://beartist.ge');
  beartistLink.setAttribute('target', '_blank');
  beartistLink.innerText = 'საიტის ნახვა';
});
