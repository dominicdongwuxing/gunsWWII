const express = require("express");
const path = require("path");
const port = 8000;

const app = express();

app.use(express.static(path.resolve(__dirname, "frontend")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(port, () => console.log("Server running..."));