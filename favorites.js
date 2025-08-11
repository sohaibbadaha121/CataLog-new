const favoritescats = document.getElementById("cats");

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

if (favorites.length === 0) {
  favoritescats.innerHTML = "<p>No Favorite Cats</p>";
} else {
  favorites.forEach((catId) => {
    const card = document.createElement("div");
    card.classList.add("catimg");

    card.innerHTML = `
      <img src="https://cataas.com/cat/${catId}" alt="Cat">
      <button class="favorite-btn" onclick="removeFavorite('${catId}')">Delete</button>
    `;

    favoritescats.appendChild(card);
  });
}

function removeFavorite(catId) {
  favorites = favorites.filter((id) => id !== catId);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  location.reload();
}
