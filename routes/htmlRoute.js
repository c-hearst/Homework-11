// Put dependencies up here
const express = require('express');
const path = require("path");

// Router
const router = express.Router();

// Get returns from the notes and index html files
router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
module.exports = router;
