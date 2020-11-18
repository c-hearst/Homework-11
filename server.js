// Placed dependencies up here
const express = require("express");
const routeAPI = require("./routes/apiRoute");
const routeHTML = require("./routes/htmlRoute");

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
app.use('/api', routeAPI);
app.use('/', routeHTML);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});