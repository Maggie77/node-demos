var fs = require('fs')

var readStream = fs.createReadStream('pixel.png')
var n = 0

readStream
  .on('data', function(chunk){
    n++
    console.log('data emits')
    console.log(Buffer.isBuffer(chunk))
    console.log(n)

    readStream.pause()
    console.log('data pause')
    setTimeout(function(){
      console.log('data pause stop')
      readStream.resume()
    },2000)
  })
  .on('readable', function(){
    console.log('data readable')
  })
  .on('end', function(){
    console.log('end:' + n)
    console.log('data ends')
  })
  .on('close', function(){
    console.log('data close')
  })
  .on('error', function(e){
    console.log('data read error + e')
  })