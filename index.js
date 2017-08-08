var proj4 = require('proj4');
var defs = require('./defs');

module.exports = function convert(lat, lon) {
    return proj4(defs.mvdGis).inverse([lat, lon]);
}