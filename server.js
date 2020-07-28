const express = require("express");
const app = new express();
const path = require("path");
const dbjson = require("./db/db.json")
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// html routes
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/notes.html"));
});

// api get routes
app.get("/api/notes", (req, res) => {
    res.json(dbjson);
});

// api post routes
app.post("/api/notes", (req, res) => {
    res.json(dbjson);
});


app.listen(PORT, () => {
    console.log("App listening on port: " + PORT)
})

