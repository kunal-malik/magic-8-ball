//const data = require('./data.js');
const path = require('path');
const express = require('express');
const app = express();

const DATA = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
]

const port = process.env.PORT || 5000;

app.use('/', express.static(`${__dirname}/build`));

app.get('/api/magic8ball/v1/', (req, res) => {
  const randomNo = Math.floor(Math.random() * DATA.length) + 0;
  res.send(DATA[randomNo]);
});

// express will serve up index.html if it doesn't recognize the route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));