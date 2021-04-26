const initChangeText = () => {
  const texts = document.querySelectorAll('.js-text-changer');

  if (!texts.length) {
    return;
  }

  const breakpointSm = window.matchMedia('(max-width: 699px)');
  const breakpointMd = window.matchMedia('(max-width: 849px)');

  const breakpointChecker = () => {
    if (!breakpointSm.matches && breakpointMd.matches) {
      texts.forEach((item) => {
        item.innerText = item.dataset.tabletText;
      });
    } else if (breakpointSm.matches && breakpointMd.matches) {
      texts.forEach((item) => {
        item.innerText = item.dataset.mobileText;
      });
    } else {
      texts.forEach((item) => {
        item.innerText = item.dataset.desktopText;
      });
    }
  };

  breakpointSm.addListener(breakpointChecker);
  breakpointMd.addListener(breakpointChecker);
  breakpointChecker(breakpointMd);
};


export {initChangeText};
