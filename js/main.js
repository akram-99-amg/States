const search = document.getElementById("search")
const matchList = document.getElementById("match-list")

//search states.json and filter it

search.addEventListener("input", () => searchStates(search.value));