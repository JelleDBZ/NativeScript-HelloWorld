const obs = require('data/observable');
const axios = require('axios');

let user = obs.fromObject({
    id: 'JelleDBZ',
    name: 'unknown',
    nickname: 'unspecified'
});

exports.onLoaded = function(args){
    let page = args.object;
    page.bindingContext = user;

    // Make a request for a user with a given ID
    axios.get('https://api.github.com/users/' + user.id)
    .then(function (response) {
        // handle success
        user.name = response.data.name;
        user.nickname = response.data.nickname;
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
}