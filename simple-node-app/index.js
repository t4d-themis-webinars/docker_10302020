const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('./public'));

app.listen(port, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`server running on port ${port}`);
});
