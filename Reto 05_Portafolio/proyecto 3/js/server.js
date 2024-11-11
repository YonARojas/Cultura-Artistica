var express = require("express");
var mysql = require("mysql");
var cors = require("cors");
var path = require("path");
const { request } = require("http");
var app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "static")));
app.use(cors());

var connection = mysql.createConnection({
  host: "localhost", 
  user: "root",
  password: "12345paul6789",
  database: "clientdb",
});


connection.connect(function (err) {
  if (err) {
    throw err;
  } else {
    console.log("conexion exitosa");
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log("Servidor funcionando en " + PORT);
});

//Main path
app.get("/api/dates/:current", (req, res) => {
  var request = req.params.current;
  console.log("Fecha solicitada: ", request); 
  connection.query(
      "SELECT nameCalendar, description, DATE_FORMAT(date, '%d/%m/%Y') AS date FROM calendario WHERE date = ?",
      [request],
      function (err, row, fields) {
          if (err) {
              throw err;
          } else if (row.length > 0) {
              res.json(row[0]);
          } else {
              res.json(null);
          }
      }
  );
});
