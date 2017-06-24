// CONSTANTS
express = require("express");

//MIDDLEWARE
app = express();

// SITES
app.get('/', function(req, res) {
    res.send('hello world');
})

// FOOTERS
app.listen(8080, function() {
    console.log('listening on port 8080');
})
