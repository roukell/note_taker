const express = require("express");
const app = new express();
const fs = require("fs");
const path = require("path");
const dbjson = require("./db/db.json");
const { v4: uuidv4 } = require('uuid');
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// html routes
app.get("/notes", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/notes.html"));
});

// api get routes
app.get("/api/notes", (req, res) => {
    res.json(dbjson);
});

// api post routes
app.post("/api/notes", (req, res) => {
    req.body.id = uuidv4();
    dbjson.push(req.body);
    writeToFile("./db/db.json", JSON.stringify(dbjson));
    console.log(dbjson);
    res.json(dbjson);
});

app.delete("/api/notes/:id", (req, res) => {
    console.log(req.params.id);
    for (let i = 0; i < dbjson.length; i++) {
        if (dbjson[i].id === req.params.id) {
            dbjson.splice(i, 1);
        }
    }
    writeToFile("./db/db.json", JSON.stringify(dbjson));
    res.json(dbjson);
})

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/index.html"));
});

app.listen(PORT, () => {
    console.log("App listening on port: " + PORT)
})

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
      if (err) {
        throw err;
      }
      console.log("Successful");
    });
  }



