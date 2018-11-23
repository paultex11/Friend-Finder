// IMPORTING NPM PACKAGES

var express = require("express");
var app = express();

// USING PATH PACKAGE TO ROUTE BETWEEN PAGES
var path = require("path");

// SETTING PORT
var PORT = process.env.PORT || 8080;

// SETS UP DATA PARSING FOR EXPRESS APP
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// STATIC FILE ROUTE

app.use(express.static(path.join(__dirname, 'app', 'public')))

// LISTENER

app.listen(PORT, function () {
  console.log("App listening on URL: http://localhost:" + PORT);
});