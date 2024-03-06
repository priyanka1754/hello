const express = require('express');
const app = express();
const port = 3009;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/inde.html');
});

app.listen(port, () => {
    const port = process.env.PORT || 3009;

  console.log(`Server is running at http://localhost:${port}`);
});
