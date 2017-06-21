var path = require('path');
var fs = require('fs');

var htmlToText = require('../lib/html-to-text');

console.log('fromString:');
try {
  fs.readFile(path.join(__dirname, 'test.html'), 'utf8', function(err, contents) {
    if (err) {
      console.log(err);
    }
    var text = htmlToText.fromString(contents, {
      wordwrap: 130
    });
    console.log(text);
  });
} catch (e) {
  console.log(e);
}

