/// redirect the user to the Spotify authentication page
function authenticate() {
    let client_id = '46547f73d0804d0d95a44690313e4704';
    let redirect_uri = 'https://button1587.github.io./';
    let scope = 'user-library-read user-read-playback-state user-read-currently-playing';
    let url = 'https://accounts.spotify.com/authorize?client_id=' + client_id +
        '&redirect_uri=' + redirect_uri +
        '&scope=' + scope +
        '&response_type=token';
    window.location = url;
}

// use the authorization code to obtain an access token
let auth_code = 'BQCmv6Cw5oLouG7qL3GKEFs4lcd6Ha3pbhn0sV0Ca1KW6t5PuMUqtV5jkivj3Qx3nxIUaUN6SwCutM9hCiiBrjU2uhaEASy-bRbRquRcIm5Pap9pTQ4EyAa4HtwZEIL-5B-hR-jlJrIohuf3BVq9bXxU0XKcLoBZmacZ7PCXgl9wqDbjcRF0kOkdIjJLn2KckOg'
let access_token = getAccessToken(auth_code);

function getCodeFromUrl() {
    let url = window.location.href;
    let code = url.split('=')[1];
    return code;
}

function getAccessToken(auth_code) {
    let client_id = '46547f73d0804d0d95a44690313e4704';
    let client_secret = 'c46e57754ae34b33be4a08822f8617b2';
    let redirect_uri = 'https://button1587.github.io./';
    let data = {
        grant_type: 'authorization_code',
        code: auth_code,
        redirect_uri: redirect_uri
    };

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic ' + btoa(client_id + ':' + client_secret));

    let options = {
        method: 'POST',
        headers: headers,
        body: new URLSearchParams(data)
    };

    fetch('https://accounts.spotify.com/api/token', options)
        .then(response => response.json())
        .then(data => {
            access_token = data.access_token;
        });
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
