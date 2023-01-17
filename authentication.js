// redirect the user to the Spotify authentication page
function authenticate() {
    let client_id = '46547f73d0804d0d95a44690313e4704';
    let redirect_uri = 'https://button1587.github.io./';
    let scope = 'user-library-read user-read-playback-state user-read-currently-playing';
    let url = 'https://accounts.spotify.com/authorize?client_id=' + client_id +
        '&redirect_uri=' + redirect_uri +
        '&scope=' + scope +
        '&response_type=code';
    window.location = url;
}

// get the authorization code from the redirect URI
let auth_code = getCodeFromUrl();

// use the authorization code to obtain an access token
getAccessToken(auth_code)
    .then(access_token => {
        // use the access token to make requests to the Spotify Web API
    });

function getCodeFromUrl() {
    let params = new URLSearchParams(window.location.search);
    return params.get('code');

    const searchForm = document.getElementById("search-form");
    searchForm.addEventListener("submit", search);

}

const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", search);

function search(event) {
    event.preventDefault();
    const query = document.getElementById("query").value;
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    fetch(url, {
        headers: {
            'Authorization': 'Bearer ' + access_token
        }
    })
        .then(response => response.json())
        .then(data => {
            // get the search results from the data object
            const searchResults = data.tracks.items;
            // clear the previous search results
            document.getElementById("search-results").innerHTML = "";
            // loop through the search results and add them to the UI
            for (let i = 0; i < searchResults.length; i++) {
                const track = searchResults[i];
                const li = document.createElement("li");
                li.innerHTML = `<a href="${track.external_urls.spotify}">${track.name}</a>`;
                document.getElementById("search-results").appendChild(li);
            }
        });
}

