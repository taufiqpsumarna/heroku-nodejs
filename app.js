const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json({
    type: 'get',
    number: 1,
    nama: 'M Taufiq Permana Sumarna',
    npm: '2042802'
  });
})

app.post('/', function (req, res) {
  res.json({
    type: 'post',
    number: 1,
    nama: 'M Taufiq Permana Sumarna',
    npm: '2042802'
  });
})

app.set('port', (process.env.PORT || 8080));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
