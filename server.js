const express = require('express');
const cors = require('cors');
const bodyParse = require('body-parser');


const app = express();
app.use(cors());
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

app.get('/', (req, res) => {
  res.send('Server In Up')
})

app.post('/download/:title', (req, res) => {

  const file = __dirname + `/files/${req.params.title}.xlsx`;
  res.download(file)

});

const PORT = 5000;
app.listen(PORT)
