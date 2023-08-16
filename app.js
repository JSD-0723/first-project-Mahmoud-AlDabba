const darkBtn = document.querySelector('.dark-mode');
const favBtn = document.querySelector('.fav');
const favContainer = document.querySelector('.fav-container');

darkBtn.addEventListener('click', () => {
  if (document.documentElement.getAttribute('theme') === 'light') {
    document.documentElement.setAttribute('theme', 'dark');
  } else {
    document.documentElement.setAttribute('theme', 'light');
  }
});

let toggle = true;
favBtn.addEventListener('click', () => {
  if (toggle === true) {
    favContainer.style.display = 'block';
  } else {
    favContainer.style.display = 'none';
  }
  toggle = !toggle;
});
