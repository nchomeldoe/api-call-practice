const quoteContainer = document.querySelector("#quote-container");
const getQuoteButton = document.querySelector("#get-quote-button");
const randomDogContainer = document.querySelector("#random-dog-container");
const getRandomDogButton = document.querySelector("#get-random-dog-button");
const fiveRandomDogsContainer = document.querySelector(
  "#five-random-dogs-container",
);
const getFiveRandomDogsButton = document.querySelector(
  "#get-five-random-dogs-button",
);

const getQuote = async () => {
  const response = await fetch("https://api.quotable.io/random?maxLength=50");
  if (!response.ok) {
    console.log(`Unsuccessful fetch, error code was: ${response.status}`);
    return;
  }
  const quote = await response.json();
  const { author, content } = quote;
  quoteContainer.innerHTML += `<p class="quote">${author}: <em>${content}<em></p>`;
};

const getRandomDog = async () => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/randomm");
    if (!response.ok) {
      throw new Error(response.status + " error with request");
    }
    const randomDog = await response.json();
    randomDogContainer.innerHTML = `<img src=${randomDog.message}>`;
  } catch (error) {
    alert(error.message);
  }
};

const getFiveRandomDogs = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random/5");
  const fiveRandomDogs = await response.json();
  const dogImages = fiveRandomDogs.message.map((dog) => {
    return `<img src=${dog}>`;
  });
  fiveRandomDogsContainer.innerHTML = dogImages;
};

getQuoteButton.addEventListener("click", getQuote);
getRandomDogButton.addEventListener("click", getRandomDog);
getFiveRandomDogsButton.addEventListener("click", getFiveRandomDogs);
