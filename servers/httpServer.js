const app = require("express")();
const http = require("http");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const httpServer = http.createServer(app);
httpServer.listen(8000, () => {
  console.log("server is listening on ", 8000);
});
module.exports = { app: app, http: http };
