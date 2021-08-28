var lastPros = document.getElementsByClassName('last-products')[0];

lastPros.addEventListener('click', function () {
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
  });
