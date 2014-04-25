var fs = require('fs');
var saveFile = require('./save');

var filearray = fs.readdirSync('./kml/');
console.log(filearray);

for (var i = 0, ln = filearray.length; i < ln; i++) {
    var filename = filearray[i];
    var filestat = fs.statSync('kml/' + filename);
    console.log('trying ' + filename);
    if (filestat.isFile()) {
        var split = filename.split('.');
        if (split[split.length - 1] === 'kml') {
            saveFile( 'kml/' + filename);
            console.log('done with ' + filename);
        }
    }
}
