const express = require('express');
const path = require('path');
const app = express();
app.use('/', express.static(path.join(__dirname, '../static')));
const port = 80;
app.listen(port, "0.0.0.0", function() {
    console.log(`App listening at port ${port}`);
})