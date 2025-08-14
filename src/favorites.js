const favoritescats = document.getElementById("cats");

let favorites;
try {
  favorites = JSON.parse(localStorage.getItem("favorites")) || [];
} catch (error) {
  console.log("error");
  const geterror = document.createElement("p");
  geterror.innerHTML = "there is a problem getting imges form local storage";
}

if (favorites.length === 0) {
  favoritescats.innerHTML = "<p>No Favorite Cats</p>";
} else {
  favorites.forEach((catId) => {
    const card = document.createElement("div");
    card.classList.add("catimg");

    card.innerHTML = `
      <img src="https://cataas.com/cat/${catId}" alt="Cat">
      <button class="favorite-btn" onclick="removefavorite('${catId}')">Delete</button>
    `;

    favoritescats.appendChild(card);
  });
}

function removefavorite(catId) {
  favorites = favorites.filter((id) => id !== catId);
  try {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } catch (error) {
    console.log("error in setting imges");
  }
  location.reload();
}
