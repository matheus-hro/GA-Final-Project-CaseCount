const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const routes = require('./routes/routes.js')
const apiRoutes = require('./routes/apiRoutes.js')

require('./config/database.js')
require('dotenv').config()

const app = express();

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middlewares
// to serve from the production 'build' folder
//app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the "catch all" 
app.use('/api', apiRoutes);

// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});