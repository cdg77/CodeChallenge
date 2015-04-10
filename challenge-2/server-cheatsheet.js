var http = require("http"), // easy use of Node's HTTP API
    url = require("url"), // utilities for URL resolution and parsing
    path = require("path"), // utilities for handling and transforming filepaths
    fs = require("fs"), //File System utilities for I/O, ensures POSIX happiness
    port = process.argv[2] || 3000; //process.argv = array of command line arguments

http.createServer(function(req, res) {

  var uri = url.parse(req.url).pathname, filename = path.join(process.cwd(), uri);

  // error checking
  fs.exists(filename, function(exists) { // tests whether a path exists in the file system
    if(!exists) { // if the filepath does not exist... 404!!!
      res.writeHead(404, {"Content-Type": "text/plain"});
      res.write("404: File not found!\n");
      res.end();
      return;
    }

    if (fs.statSync(filename).isDirectory()) filename += '/index.html'; //default to index.html in a directory

    // this asynchronously reads file contents, give a 500 is a problem exists
    fs.readFile(filename, "binary", function(err, file) {
      if(err) {
        res.writeHead(500, {"Content-Type": "text/plain"});
        res.write(err + "\n");
        res.end();
        return;
      }
      res.writeHead(200);
      res.write(file, "binary");
      res.end();
    });
  });
}).listen(process.env.PORT || 3000);

console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");