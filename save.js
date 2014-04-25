var togeo = require('togeojson');
var jsdom = require('jsdom').jsdom;
var fs = require('fs');

module.exports = function (filename) {
    var split = filename.split('.')
    var name = split[split.length - 2].split('/');
    name = name[name.length - 1];
    console.log(name);

    var kml = jsdom(fs.readFileSync(filename, 'utf8'))
    var geo = togeo.kml(kml);
    fs.writeFileSync('./geojson/' + name + '.geojson', JSON.stringify(geo));
};
