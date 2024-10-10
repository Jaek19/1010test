const button = document.querySelector('button');
const nav = document.querySelector('nav');
const toUp = document.getElementById('toUp');

button.addEventListener('click', () => {
  if (nav.classList.contains('show')) {
    nav.classList.remove('show');
    nav.classList.add('hide');
    button.textContent = 'menu';
    setTimeout(() => {
      nav.style.visibility = 'hidden';
    }, 500);
  } else {
    nav.style.visibility = 'visible';
    nav.classList.remove('hide');
    nav.classList.add('show');
    button.textContent = 'close';
  }
});
document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
    nav.classList.add('hide');
    button.textContent = 'menu';
    setTimeout(() => {
      nav.style.visibility = 'hidden';
    }, 500);
  });
});

toUp.addEventListener('click', () => {
  if (nav.classList.contains('show')) {
    nav.classList.remove('show');
    nav.classList.add('hide');
    button.textContent = 'menu';
    setTimeout(() => {
      nav.style.visibility = 'hidden';
    }, 500);
  }
});
