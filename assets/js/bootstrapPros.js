// var nextModal = document.getElementsByClassName('next-modal')[0];
var bootstrapPros = document.getElementsByClassName('pros-bootstrap')[0];
bootstrapPros.addEventListener('click', function () {
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
});
