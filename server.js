const path = require('path');
const express = require('express');
const app = express();
const Data = require('./data');

const advices = Data.ADVICES;
const port = process.env.PORT || 5000;

app.use('/', express.static(`${__dirname}/build`));

//Service endpoint for the client to retrive advices
app.get('/api/magic8ball/v1/advice/', (req, res) => {
  let randomNo = 0;
  try {
    if (advices.length) {
      randomNo = Math.floor(Math.random() * advices.length) + 0;
    }
    res.send(advices[randomNo]);
  } catch (error) {
    throw new Error('Error occured while calculating advice');
  }
});

// express will serve up index.html if it doesn't recognize the route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));