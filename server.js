const express = require("express");
const app = new express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/notes", (req, res) => {
    res.render("notes");
});

app.listen(3000, () => {
    console.log("App listening on port 3000")
})

