// fetch('data/inventory.json').then(r => console.log(r))
const formatDate = function (date) {
    console.log(new Date(date).toLocaleDateString())
}

const getLastCommit = function (repoName){
    let [username, repo] = repoName.split("/")
    return fetch(`https://api.github.com/repos/${username}/${repo}/commits`, {headers: { Authorization: `${GITHUB_KEY}`}})
        .then(response => {
            return response.json()
        }).then(result => {
            formatDate(result[0].commit.author.date)
        }).catch(error => alert('No Commits'))
}

const getLastRepo = function (username) {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: { Authorization: `token ${GITHUB_KEY}`}})
        .then(response => {
            return response.json()
        })
        .then(result => {
            // console.log(result)
            // console.log(result[0].repo.name)
            getLastCommit(result[0].repo.name)
        }).catch(error => alert('No Commits'))
}

getLastRepo('raymondjdugan');

// Custom promise

function wait(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
                resolve(time)
        }, time);
    });
}
wait(1000).then(r => console.log(`You'll see this after ${r} seconds`));
wait(3000).then(r => console.log(`You'll see this after ${r} seconds`));
