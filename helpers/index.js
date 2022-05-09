export const isParentLinkOrButton = (node) => {
  let currentNode = node;
  const maxCount = 20;
  let initCount = 1;
  while (currentNode.parentElement && initCount < maxCount) {
    if (
      currentNode.parentElement.tagName.toLowerCase() === 'a' ||
      currentNode.parentElement.tagName.toLowerCase() === 'button'
    ) {
      return true;
    }
    currentNode = currentNode.parentElement;
    initCount += 1;
  }

  return false;
};

export const fixedNav = () => {
  const main = document.querySelector('#main');
  const header = document.querySelector('#header');
  const parallaxPage = document.querySelector('body.parallax-page');
  const parallaxSection = document.querySelector('.parallax-section');
  const svgHome = document.querySelector('#lift-img-scroll');

  if (parallaxPage && parallaxSection) {
    if (
      parallaxSection.getBoundingClientRect().top <= 70 &&
      parallaxSection.getBoundingClientRect().bottom >= 0
    ) {
      header.classList.remove('with-bg');
    } else {
      header.classList.add('with-bg');
    }
  }

  if (!parallaxPage) {
    if (main.getBoundingClientRect().top <= 0) {
      header.classList.add('with-bg');
    } else {
      header.classList.remove('with-bg');
    }
  }

  if (svgHome) {
    const min = -500;
    const mainToTop = main.getBoundingClientRect().top;
    const screenHeight = window.screen.height;
    const offset = (mainToTop / screenHeight) * screenHeight * 2;

    svgHome.style.transform = `translate3d(0, ${Math.max(min, offset)}px, 0)`;
  }
};

export const cursorLink = (e, cursor) => {
  if (
    e.target.tagName.toLowerCase() === 'a' ||
    e.target.className === 'swiper-button-prev' ||
    e.target.className === 'swiper-button-next' ||
    e.target.tagName.toLowerCase() === 'button' ||
    isParentLinkOrButton(e.target)
  ) {
    return cursor.classList.add('link');
  }
  return cursor.classList.remove('link');
};

export const preLoadImage = (url) =>
  new Promise((resolve, reject) => {
    const loadImg = new Image();
    loadImg.src = url;
    loadImg.onload = () => resolve(url);
    loadImg.onerror = (err) => reject(err);
  });

export const scrollToElement = (element) => {
  if (element) {
    const headerOffset = 0;
    const elementPosition =
      window.pageYOffset + element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

export const tooSlowFallback = (setValue, time) => {
  setTimeout(() => {
    setValue(true);
  }, time);
};
