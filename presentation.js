
const cards = document.querySelector('.cards');


 export function displayLastFilteredData(lastFilteredData) {
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
  