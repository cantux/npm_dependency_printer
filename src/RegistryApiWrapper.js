const fetch = require('isomorphic-fetch');

function getPackageDetails(packageName, callback, version = "latest",) {
    fetch(`https://registry.npmjs.org/${packageName}/${version}`).then(function(response) {
        return response.json();
    } ).then(function(json) {
        callback(json)
    }).catch((e)=>{});
}

module.exports = getPackageDetails;