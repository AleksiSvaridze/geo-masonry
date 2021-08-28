var currentPros = document.getElementsByClassName('current')[0];
currentPros.addEventListener('click', function () {
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
  justInfoImg.src = 'assets/img/justinfo/2.jpg';
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

  // beartist
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
