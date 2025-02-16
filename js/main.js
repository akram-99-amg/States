const search = document.getElementById("search")
const matchList = document.getElementById("match-list")

//search states.json and filter it
const searchStates = async searchText => {
    const res = await fetch("./data/states.json");
    const states = await res.json();

    //Get matches to current text input
    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi')  // ^ we use this so we can match the first letter written and "gi" to match whatever is an upper or lowercase
        return state.name.match(regex) || state.abbr.match(regex)
    });
    if (searchText.length === 0) {
        matches = [];
    }

    outputHtml(matches)

}
//show result

const outputHtml = matches => {
    if (matches.length > 0) {
        const html = matches
        .map(match => `
        <div class="card card-body mb-1">
        <h4>${match.name} (${match.abbr}) <span class="text-primary">${match.capital} </span></h4>
        <small>Lat:${match.lat} / Long: ${match.long} </small>
        </div>
        `
    ).join('');
    matchList.innerHTML= html;
    
    }

}

search.addEventListener("input", () => searchStates(search.value));