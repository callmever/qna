const express = require("express");
const app = express();
const path = require("path");
const port = 5500;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use((req, res) => {
  res.status(404);
  res.send(`<h3>Error : Wrong path or the file maybe not exist</h3>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// app.get('/printer', (req, res) => {
//     const filePath = path.join(__dirname, 'public', 'categories', 'printer.html')
//     res.sendFile(filePath)
// })
