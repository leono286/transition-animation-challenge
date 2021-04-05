let video;

const makeTransition = () => {
  if (!document.body.classList.contains('active')) {
    document.body.classList.add('active');
    playVideo();
  } else {
    document.body.classList.remove('active');
    setTimeout(() => {
      toggleVisibleClass(false);
    }, 1600);
  }
}

const toggleVisibleClass = (showBehind) => {
  const transitionIsActive = document.body.classList.contains('active');
  if (showBehind) {
    document.body.classList.add('visible');
    playVideo();
  } else if (!transitionIsActive && !showBehind) {
    document.body.classList.remove('visible');
    resetVideo();
  }
}

const resetVideo = () => {
  video.pause();
  video.currentTime = 0;
}

const playVideo = () => {
  video.play();
}

const init = () => {
  document.body.addEventListener('click', () => {
    document.body.classList.contains('active') && makeTransition();
  });
  document.querySelector('.trigger').addEventListener('click', (e) => {
    e.stopPropagation();
    makeTransition();
  });
  document.querySelector('.trigger').addEventListener('mouseenter', () => {
    toggleVisibleClass(true)
  });
  document.querySelector('.trigger').addEventListener('mouseleave', () => {
    toggleVisibleClass(false)
  });
  video = document.querySelector('video');
}

init();
