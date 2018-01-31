const express = require('express');
const app     = express();
const PORT    = process.env.PORT || 3002;

app.use(express.static('public'));

// app.get('/*', function(req, res) {
//   res.sendfile('./public/index.html')
// })

app.listen(PORT, () => console.log('Running on PORT:' + PORT) );
