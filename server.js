const express = require('express');

const app = express();

function delay(duration) {
  const startTime = Date.now();
  while(Date.now() - startTime < duration) {
    //event loop is blocked...
  }
}

app.get('/', (req, res) => {
  // JSON.stringify({}) => "{}"
  // JSON.parse("{}") => {}
  // [5,1,2,3,4].sort()
  res.send('Performance example');
});

app.get('/timer', (req, res) => {
  delay(9000);
  res.send('Ding ding ding!');
})

app.listen(3000);