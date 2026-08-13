const http = require("http");
const port = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200, {"content-type": "application/json"});
  res.end(JSON.stringify({ message: "hello from S4 Cloud PaaS", path: req.url }));
}).listen(port, () => console.log(`listening on ${port}`));
