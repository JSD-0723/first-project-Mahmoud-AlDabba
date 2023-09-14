import { displayLastFilteredData } from './presentation.js';
import { debounced } from './debounced.js';

const favBtn = document.querySelector('.fav');
const darkBtn = document.querySelector('.dark-mode');
const favContainer = document.querySelector('.fav-container');
const search = document.querySelector('.search-input');
const sortMenu = document.getElementById('sort');
const filterMenu = document.getElementById('filter');

let topics;

//theme toggle
function toggleTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('theme', 'dark');
  } else {
    document.documentElement.setAttribute('theme', 'light');
  }
}
toggleTheme();

darkBtn.addEventListener('click', () => {
  if (localStorage.getItem('theme') !== 'dark') {
    document.documentElement.setAttribute('theme', 'dark');
    localStorage.setItem('theme', 'dark');
    darkBtn.innerHTML =
      '<ion-icon name="moon-outline" class="nav-icon" class="nav-icon"></ion-icon> Dark Mode';
  } else {
    document.documentElement.setAttribute('theme', 'light');
    localStorage.setItem('theme', 'light');
    darkBtn.innerHTML =
      '<ion-icon name="sunny-outline" class="nav-icon"></ion-icon>  Light Mode';
  }
});

// favorite footer
let toggle = true;
favBtn.addEventListener('click', () => {
  if (toggle === true) {
    favContainer.style.display = 'block';
  } else {
    favContainer.style.display = 'none';
  }
  toggle = !toggle;
});

async function fetchData() {
  try {
    const response = await fetch('https://tap-web-1.herokuapp.com/topics/list');
    topics = await response.json();

    displayLastFilteredData(topics);

    return topics;
  } catch (error) {
    console.error(error);
  }
}
fetchData();

let upDateDebounced = debounced(async (topic) => {
  try {
    const response = await fetch(
      `https://tap-web-1.herokuapp.com/topics/list?phrase=${topic}`
    );
    topics = await response.json();

    displayLastFilteredData(topics);

    return topics;
  } catch (error) {
    console.error(error);
  }
}, 1000);

search.addEventListener('input', (e) => {
  let topic = e.target.value;
  upDateDebounced(topic);
});

sortMenu.addEventListener('change', (e) => {
  let sortBy = e.target.value;

  switch (sortBy) {
    case 'topic':
      topics = [...topics].sort((a, b) => {
        return a.topic > b.topic ? 1 : -1;
      });
      break;
    case 'name':
      topics = [...topics].sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });
      break;
    default:
      topics = [...topics];
  }

  displayLastFilteredData(topics);
});

filterMenu.addEventListener('change', (e) => {
  let filterBy = e.target.value;
  let filteredTopic = topics.filter((topic) => topic.category === filterBy);
  displayLastFilteredData(filteredTopic);
});
