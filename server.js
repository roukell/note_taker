const express = require("express");
const app = new express();
const dbjson = require("./db/db.json")
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// html routes
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/notes", (req, res) => {
    res.render("notes");
});

// api get routes
app.get("/api/notes", (req, res) => {
    res.json(dbjson);
    console.log(dbjson);
});

// api post routes
app.post("/api/notes", (req, res) => {
    res.json(dbjson);
    console.log(dbjson);
});

app.listen(PORT, () => {
    console.log("App listening on port: " + PORT)
})

