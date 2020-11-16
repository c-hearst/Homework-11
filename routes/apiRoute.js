const express = require('express');
const fs = require('fs');
const { uuid } = require('uuidv4');
var theNotes = require("../db/db.json");
const router = express.Router();

router.get("/notes", function (req, res) {
    res.json(theNotes);
});

router.post("/notes", function (req, res) {

    const data = req.body;
    data.id = uuid(data.id);
    theNotes.push(data);

    fs.writeFile('db/db.json', JSON.stringify(theNotes), (err) => {
        if (err) throw err;
        console.log('Data written to file');   
    });
    res.json(true)
});

router.delete("/notes/:id", function (req, res) {

    const setID = req.params.id;

    theNotes = theNotes.filter((note, index) => {
        return setID !== note.id;
    })

    fs.writeFile('db/db.json', JSON.stringify(theNotes), (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
    res.json(true);
});

module.exports = router;