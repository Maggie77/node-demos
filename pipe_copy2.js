var fs = require('fs')

fs.createReadStream('pixel.png').pipe(fs.createWriteStream('pipe-copy.png'))