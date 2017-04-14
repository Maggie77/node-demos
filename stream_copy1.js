var fs = require('fs')

var source = fs.readFileSync('logo.png')

fs.writeFileSync('stream_copy1.png', source)