const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic3Rpam52ZG5ldXQiLCJhIjoiY2p5NGJudndkMTN5ODNubzgwdmdlcW5hNSJ9.IctTM869BcPF6hPD-gHZyg&limit=1';

    request({ url, json:true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                lat: body.features[0].center[1],
                lon: body.features[0].center[0],
                location: body.features[0].place_name

            })
        }
    })
}

module.exports = geocode;