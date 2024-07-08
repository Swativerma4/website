const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    toggleMoreInfo(card);
  });
});

function toggleMoreInfo(card) {
  var moreInfo = card.querySelector('.more-info');
  moreInfo.style.display = moreInfo.style.display === 'none'? 'block' : 'none';
}

const seeMoreButton = document.getElementById('see-more');
const moreCardsContainer = document.getElementById('more-cards');
let cardIndex = 3; // start from 4th card

seeMoreButton.addEventListener('click', () => {
  const nextThreeCards = Array.prototype.slice.call(cards, cardIndex, cardIndex + 3);
  moreCardsContainer.innerHTML = ''; // clear container
  nextThreeCards.forEach((card) => {
    moreCardsContainer.appendChild(card.cloneNode(true)); // clone and append card
  });
  cardIndex += 3; // increment index
  if (cardIndex >= cards.length) {
    seeMoreButton.disabled = true; // disable button if all cards are shown
  }
});