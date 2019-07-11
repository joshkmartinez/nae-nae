var express = require("express");
var app = express();

const api = express.Router();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
api.get("/", (req, res) => {
  res.sendFile("/static/img.png", { root: __dirname });
});
app.use("/", api);
app.listen(3000, () => {
  //console.log('Server running on port 3000')
});
