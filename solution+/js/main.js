const swup = new Swup();

const makeTransition = () => {
  document.body.classList.add('active');
  setTimeout(() => {
    swup.loadPage({
      url: './nes.html', // route of request (defaults to current url)
      method: 'GET', // method of request (defaults to "GET")
    });
  }, 900);
}

const toggleVisibleClass = (visible) => {
  const transitionIsActive = document.body.classList.contains('active');
  if (visible) {
    document.body.classList.add('visible');
  } else if (!transitionIsActive && !visible) {
    document.body.classList.remove('visible');
  }
}

const resetHome = () => {
  const modifiedBody = document.querySelector('.nes.home');
  if (modifiedBody) {
    modifiedBody.classList.remove('home');
  } else {
    document.querySelector('.nes:not(.home)').classList.add('home');
  }

  document.body.classList = '';
  setTimeout(() => {
    init();
  }, 200);
}

const init = () => {
  document.querySelector('.trigger').addEventListener('click', makeTransition);
  document.querySelector('.trigger').addEventListener('mouseenter', () => {
    toggleVisibleClass(true)
  });
  document.querySelector('.trigger').addEventListener('mouseleave', () => {
    toggleVisibleClass(false)
  });
}
  swup.on('willReplaceContent', resetHome);



init();
