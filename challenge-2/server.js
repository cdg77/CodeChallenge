var sys = require("sys"),
my_http = require("http"),
path = require("path"),
url = require("url"),
fs = require("fs");
port = process.argv[2] || 8080;

my_http.createServer(function(request,response){

  var my_path = url.parse(request.url).pathname;
  var full_path = path.join(process.cwd(),my_path);

  fs.exists(full_path,function(exists){
    if(!exists){
      response.writeHeader(404, {"Content-Type": "text/plain"});  
      response.write("404 Not Found\n");  
      response.end();
    }

    if (fs.statSync(full_path).isDirectory()) full_path += '/index.html';

      fs.readFile(full_path, "binary", function(err, file) {  
           if(err) {  
               response.writeHeader(500, {"Content-Type": "text/plain"});  
               response.write(err + "\n");  
               response.end();  

           }
         else{
          response.writeHeader(200);  
              response.write(file, "binary");  
              response.end();
        }

      });
  });
}).listen(process.env.PORT || 8080);
sys.puts("Server Running on 8080");
