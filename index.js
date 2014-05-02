var fs = require('fs');
var saveFile = require('./save');

var filearray = fs.readdirSync('./new/');
console.log(filearray);

for (var i = 0, ln = filearray.length; i < ln; i++) {
    var filename = filearray[i];
    var filestat = fs.statSync('new/' + filename);
    console.log('trying ' + filename);
    if (filestat.isFile()) {
        var split = filename.split('.');
        if (split[split.length - 1] === 'kml') {
            saveFile( 'new/' + filename);
            console.log('done with ' + filename);
        }
    }
}
