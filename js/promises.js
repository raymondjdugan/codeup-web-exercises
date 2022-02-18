// fetch('data/inventory.json').then(r => console.log(r))
const formatDate = function (date) {
    return new Date(date).toLocaleDateString()
}

const getLastRepo = function (username) {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: { Authorization: `token ${GITHUB_KEY}`}})
        .then(response => {
            return response.json();
        })
        .then(events => {
            console.log(events)
            for (let event of events){
                if (event.type === 'PushEvent') {
                    return event.created_at;
                }
            }
        })
}

getLastRepo('raymondjdugan').then(lastEventDate => console.log(formatDate(lastEventDate)))




// Custom promise

function wait(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
                resolve(time)
        }, time);
    });
}
wait(1000).then(r => console.log(`You'll see this after ${r/1000} seconds`));
wait(3000).then(r => console.log(`You'll see this after ${r/1000} seconds`));
