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
  const baseURL = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_Key}`;
  const response = await fetch(baseURL);
  console.log(response);
}
