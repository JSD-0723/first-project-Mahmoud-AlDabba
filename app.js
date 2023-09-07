const favBtn = document.querySelector('.fav');
const darkBtn = document.querySelector('.dark-mode');
const favContainer = document.querySelector('.fav-container');
const cards = document.querySelector('.cards');
const search = document.querySelector('.search-input');

var sortMenu = document.getElementById('sort');
var value = sortMenu.options[sortMenu.selectedIndex].value;
console.log(value);

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
let topicsData;
async function fetchData() {
  try {
    const response = await fetch('https://tap-web-1.herokuapp.com/topics/list');
    const topics = await response.json();
    topicsData = topics;
    return topics;
  } catch (error) {
    console.log(error);
  }
}
// fetchData();
(async () => {
  try {
    await fetchData();
    // Now you can safely access topicsData here
  } catch (error) {
    console.error('Error fetching data:', error);
  }
})();

function displayLastFilteredData(lastFilteredData) {
  cards.innerHTML = ''; // Clear previous results
  lastFilteredData.forEach((topic) => {
    cards.innerHTML += `
 <a href="details.html" class="card">
      <img src="./Logos/${topic.image}" alt="${topic.image}" />
      <div class="card-text">
        <h4>Frontend Frameworks and Libraries</h4>
        <p class="card-framework">${topic.topic}</p>
        <div class="star">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </div>
        <p class="card-author">Author: ${topic.name}</p>
      </div>
      </a>`;
  });
}

search.addEventListener('input', (e) => {
  let a = e.target.value.toLowerCase();
  // console.log(topicsData);
  let b = topicsData.filter((el) => {
    return el.topic.toLowerCase().startsWith(a);
  });
  console.log(b);
  displayLastFilteredData(b);
});
