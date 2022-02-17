// fetch('data/inventory.json').then(r => console.log(r))

function getGithubUsernames(username) {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: { Authorization: `${GITHUB_KEY}`}})
        .then(response => response.json())
        .then(result => {
            console.log(result)
        }).catch(error => alert('No Commits'))
}

getGithubUsernames('raymondjdugan');
