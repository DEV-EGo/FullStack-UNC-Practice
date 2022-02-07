const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector("container");
let searchQuery = "";
const APP_ID = "4b4a492a";
const APP_Key = "5b9ed93a32ba8d37635a6c868d15c084";
// const baseURL = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_Key}`;

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  fetchAPI();
});
async function fetchAPI() {
  const baseURL = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_Key}&to=20`;
  const response = await fetch(baseURL);
  const data = await response.json();
  generateHTML(data.hits);
  console.log(data);
}
function generateHTML(results) {
  let generatedHTML = "";

  results.map((result) => {
    generatedHTML += `
    <div class="items">
            <img src="./css/PANCAKE.jpeg" alt="" />

            <div class="flex-container">
              <h1 class="title">This is a recipe</h1>
              <a class="view-button" href="#"> View Recipe</a>
            </div>
    `;
  });

  searchResultDiv.innerHTML = generateHTML;
}
