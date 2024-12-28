import http from "http";

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  let responseText = "";
  let statusCode = 200;

  if (req.url === "/home") {
    responseText = "Welcome to the Home page!";
  } else if (req.url === "/root") {
    responseText = "Welcome to the Root page!";
  } else if (req.url === "/welcome") {
    responseText = "Welcome to the Welcome page!";
  } else {
    responseText = "Page not found";
    statusCode = 404;
  }

  res.statusCode = statusCode;
  res.setHeader("Content-Type", "text/plain");
  res.end(responseText);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
