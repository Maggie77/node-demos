var http = require('http')
var fs = require('fs')
var request = require('request')

http.createServer(function(req,res){
  // fs.readFile('logo.png', function(err,data){
  //   if(err) {
  //     res.end('file not exist!')
  //   }
  //   else{
  //     res.writeHead(200,{'Context-Type': 'text/html'})
  //     res.end(data)
  //   }
  // })

  // fs.createReadStream('logo.png').pipe(res)
  request('http://img.mukewang.com/5333a0490001f9ff02200220-200-200.jpg').pipe(res)
}).listen(8090)