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
}
