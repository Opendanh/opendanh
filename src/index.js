const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to OpenClaw!');
});

app.listen(PORT, () => {
  console.log(`OpenClaw server running at http://localhost:${PORT}`);
});
