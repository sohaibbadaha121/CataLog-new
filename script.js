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
      card.classList.add("cat-card");
      card.innerHTML = `
        <img src="https://cataas.com/cat/${cat.id}" alt="cat">
        `;
      catscontainer.appendChild(card);
    });
  } catch (error) {
    catscontainer.innerHTML("error");
  }
}
