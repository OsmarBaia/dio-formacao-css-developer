// Evento de rolagem para esconder a barra de navegação
const navbar = document.querySelector('nav.menu');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    navbar.classList.add('hidden');
  } else {
    navbar.classList.remove('hidden');
  }
  lastScrollY = window.scrollY;
});

// Evento de rolagem do conteúdo
const contentsContainer = document.querySelector('.contents__container');
const contentsCards = document.querySelectorAll('.contents__card');
let currentCardIndex = 0;
let intervalId;
const intervalo_rolagem = 3500;

function moveScrollToNextCard() {
    if (window.innerWidth <= 480) {
      currentCardIndex = (currentCardIndex + 1) % contentsCards.length;
      contentsCards[currentCardIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }

function startInterval() {
  intervalId = setInterval(moveScrollToNextCard, intervalo_rolagem);
}

function stopInterval() {
  clearInterval(intervalId);
}

window.addEventListener('resize', () => {
  if (window.innerWidth <= 480) {
    startInterval();
  } else {
    stopInterval();
  }
});

startInterval();