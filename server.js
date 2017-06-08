const express = require('express');
const app = express();
const multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var port = process.env.PORT;

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/index.html');
});

app.post('/get-file-size', upload.single('file'), function (req, res, next) {
  res.send(JSON.stringify({"size":req.file.size}));
});

app.listen(port);
console.log("Server is listening on port " + port);