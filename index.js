console.log('bobbyhadz.com');

let lastScrollTop =
  window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener(
  'scroll',
  function handleScroll() {
    const scrollTopPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTopPosition > lastScrollTop) {
      console.log('scrolling down');
    } else if (scrollTopPosition < lastScrollTop) {
      console.log('scrolling up');
    }
    lastScrollTop =
      scrollTopPosition <= 0 ? 0 : scrollTopPosition;
  },
  false,
);
