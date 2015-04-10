var http = require("http");
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<!DOCTYPE html>");
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Hello World Page</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("<h1>This is an h1 tag</h1>");
  response.write("<h2>Hello World!</h2>");
  response.write("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nostrum quod omnis iure quae sequi neque libero vel doloribus unde, consectetur est fugiat eveniet enim in aliquam dicta ipsum repudiandae!</p>");
  response.write("<p>This is a p tag</p>");
  response.write('<a href="index.html">This will take you to the index page</a>');
  response.write("</body>");
  response.write("</html>");
  response.end();
});
 
server.listen(8080);
console.log("Server is listening");