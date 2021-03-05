const PORT = 3001;
const express = require('express');
const apiRoute = require('./routes/api')
const path = require('path');
const app = express();
 
app.use('/', express.static(path.join(__dirname, "public")));
app.use('/all', apiRoute);


app.listen(PORT, ()=> {
    console.log('Server running on port: '+PORT);
});

