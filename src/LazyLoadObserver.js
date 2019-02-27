'use strict';

// May not support IE8 due to the DOMContentLoaded listener
let lazyImageObserver;

const replaceImage = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { // Replacing the src to the real url and remove the image from the observe list.
      const lazyImage = entry.target;
      lazyImage.src = lazyImage.dataset.src;
      lazyImageObserver.unobserve(lazyImage);
    }
  });
};

const registerIntersectionObserver = () => {
  const allImage = document.getElementsByTagName('img');
  if ('IntersectionObserver' in window) {
    lazyImageObserver = new IntersectionObserver(replaceImage);
    Array.prototype.forEach.call(allImage, img => {
      if (img.getAttribute('data-src')) lazyImageObserver.observe(img);
    });
  } else {
    // Replace all images' src with data-src to make sure images will be showed correctly.
    console.warn('This browser does not support IntersectionObserver.');
    Array.prototype.forEach.call(allImage, img => {
      const realSrc = img.getAttribute('data-src');
      if (realSrc) {
        img.setAttribute('src', realSrc);
        img.removeAttribute('data-src');
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', registerIntersectionObserver);
