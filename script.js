const catscontainer = document.getElementById("cats");
const prevbtn = document.getElementById("prev-btn");
const nextbtn = document.getElementById("next-btn");
let skip = 0;
const limit = 8;

fetchcats();
async function fetchcats() {
  catscontainer.innerHTML = "<p>Loading ... </p>";
  try {
    const req = await fetch(
      `https://cataas.com/api/cats?skip=${skip}&limit=${limit}`
    );
    const cats = await req.json();
    catscontainer.innerHTML = "";
    cats.forEach((cat) => {
      const card = document.createElement("div");
      card.classList.add("catimg");
      card.innerHTML = `
        <img src="https://cataas.com/cat/${cat.id}" alt="cat">
        <button class="fav-btn" onclick="addfavorites('${cat.id}')">
         ${isfavorite(cat.id) ? "❤️" : "🤍"}
         </button>
        `;
      catscontainer.appendChild(card);
    });
  } catch (error) {
    catscontainer.innerHTML("error");
  }
}

nextbtn.addEventListener("click", () => {
  skip += limit;
  fetchcats();
});

prevbtn.addEventListener("click", () => {
  if (skip >= limit) {
    skip -= limit;
    fetchcats();
  }
});

function addfavorites(catId) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (favorites.includes(catId)) {
    favorites = favorites.filter((id) => id !== catId);
  } else {
    favorites.push(catId);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
  fetchcats();
}

function isfavorite(catId) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  return favorites.includes(catId);
}
