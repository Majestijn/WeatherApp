const request = require('request');

const forecast = (lat, lon, callback) => {
    const url = 'https://api.darksky.net/forecast/0243c49a0fe214a9f55e30c493393c27/' + lat + ',' + lon + '?units=si';

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees celcius. There is a ' + body.currently.precipProbability + '% chance on rain')
        }
    })
}

module.exports = forecast;