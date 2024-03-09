const express = require('express');
const app = express();
const port = 3019;

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.get('/script.js', (req, res) => {
    res.sendFile(__dirname + '/public/script.js');
  });
  
  
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});







